Revenue Calculator Project
This project is built with Vite and TypeScript to ensure fast development and type safety.

Table of Contents
Requirements
Installation
Running the Development Server
Building for Production
Previewing Production Build
Folder Structure
Requirements
Before running the project, ensure you have the following installed on your system:

Node.js: >= 16.x
Package Manager: npm, yarn, or pnpm (choose one)
Installation
Clone the repository:


git clone https://github.com/kunal-511/revenue-calculator
cd revenue-calculator
Install dependencies:

If you use npm:


npm install
If you use yarn:


yarn install
If you use pnpm:



pnpm install
Running the Development Server
To start the development server, run:

Using npm:


npm run dev
Using yarn:


yarn dev
Using pnpm:


pnpm dev
Open http://localhost:5173 in your browser to view the application.

Building for Production
To create a production build, use:

Using npm:



npm run build
Using yarn:



yarn build
Using pnpm:



pnpm build
The production-ready files will be located in the dist folder.

Previewing Production Build
To preview the production build locally:

Using npm:



npm run preview
Using yarn:

bash
yarn preview
Using pnpm:


pnpm preview
This will serve the files from the dist folder.

Folder Structure
Here’s a general overview of the project structure:



├── public/         # Static assets
├── src/
│   ├── assets/     # Project-specific assets
│   ├── components/ # Reusable React components
│   ├── pages/      # Page components
│   ├── App.tsx     # Root component
│   ├── main.tsx    # Application entry point
│   └── styles/     # Global styles
├── .gitignore      # Git ignore file
├── index.html      # Main HTML template
├── package.json    # Project configuration and dependencies
├── tsconfig.json   # TypeScript configuration
├── vite.config.ts  # Vite configuration
