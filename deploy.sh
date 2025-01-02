#!/bin/bash

# Variables
SERVER_USER="ubuntu"                # Replace with your EC2 user, e.g., ubuntu or ec2-user
SERVER_IP="3.107.188.16"           # Replace with your EC2 instance's public IP
APP_NAME="revenue-calc"            # Name of your app
REMOTE_DIR="/var/www/$APP_NAME"    # Deployment directory on the server
LOCAL_BUILD_DIR="dist"             # Vite's build directory
NODE_VERSION="22"                  # Node.js version to install (e.g., 16)
SSH_KEY_PATH="$HOME/test.pem"      # Path to your private SSH key for EC2 access

# Step 1: Build the React Vite app
echo "Building the React Vite app..."
pnpm run build || { echo "Build failed. Exiting."; exit 1; }

# Step 2: SSH into the server and ensure prerequisites are installed
echo "Ensuring Node.js, npm, and PM2 are installed on the server..."
ssh -i "$SSH_KEY_PATH" "$SERVER_USER@$SERVER_IP" << EOF
  set -e  # Exit on any error
  
  # Update and install necessary packages
  sudo apt update -y
  
  # Install Node.js and npm if not already installed
  if ! command -v node &> /dev/null; then
    echo "Installing Node.js and npm..."
    curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | sudo -E bash -
    sudo apt install -y nodejs
  fi
  
  # Install PM2 globally if not already installed
  if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
  fi

  echo "Node.js, npm, and PM2 installation complete."
EOF

# Step 3: Set up the server directory
echo "Setting up directory on the server..."
ssh -i "$SSH_KEY_PATH" "$SERVER_USER@$SERVER_IP" << EOF
  sudo mkdir -p $REMOTE_DIR
  sudo chown -R $SERVER_USER:$SERVER_USER $REMOTE_DIR
  echo "Directory setup complete."
EOF

# Step 4: Transfer build files to the server
echo "Transferring build files to the server..."
scp -i "$SSH_KEY_PATH" -r $LOCAL_BUILD_DIR/* "$SERVER_USER@$SERVER_IP:$REMOTE_DIR"

# Step 5: Start or restart the application using PM2
echo "Starting the application on the server..."
ssh -i "$SSH_KEY_PATH" "$SERVER_USER@$SERVER_IP" << EOF
  cd $REMOTE_DIR
  
  # Use PM2 to serve the app
  if pm2 list | grep -q "$APP_NAME"; then
    echo "Restarting existing app..."
    pm2 restart $APP_NAME
  else
    echo "Starting new app..."
    pm2 serve $REMOTE_DIR 3000 --name "$APP_NAME" --spa
  fi

  pm2 save
  echo "Application started successfully."
EOF

echo "Deployment completed successfully!"
