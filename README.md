# Revenue Calculator Project

This project is built with **Vite** and **TypeScript** to ensure fast development and type safety.

---

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Running the Development Server](#running-the-development-server)
4. [Building for Production](#building-for-production)
5. [Previewing Production Build](#previewing-production-build)
6. [Folder Structure](#folder-structure)

---

## Requirements

Before running the project, ensure the following tools are installed on your system:

- **Node.js**: `>= 16.x`
- **Package Manager**: Choose one of:
  - npm
  - yarn
  - pnpm

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kunal-511/revenue-calculator
   cd revenue-calculator
   ```

2. Install dependencies:

   Using **npm**:
   ```bash
   npm install
   ```

   Using **yarn**:
   ```bash
   yarn install
   ```

   Using **pnpm**:
   ```bash
   pnpm install
   ```

---

## Running the Development Server

To start the development server, run:

Using **npm**:
```bash
npm run dev
```

Using **yarn**:
```bash
yarn dev
```

Using **pnpm**:
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Building for Production

To create a production build, use:

Using **npm**:
```bash
npm run build
```

Using **yarn**:
```bash
yarn build
```

Using **pnpm**:
```bash
pnpm build
```

The production-ready files will be located in the `dist` folder.

---

## Previewing Production Build

To preview the production build locally:

Using **npm**:
```bash
npm run preview
```

Using **yarn**:
```bash
yarn preview
```

Using **pnpm**:
```bash
pnpm preview
```

This will serve the files from the `dist` folder.

---

## Folder Structure

Here’s an overview of the project structure:

```
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
```

