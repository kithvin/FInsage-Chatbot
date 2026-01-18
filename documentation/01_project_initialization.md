# Project Initialization

## Overview
This step involved setting up the foundational structure for the Chatbot Frontend using Vite and React. Due to issues with the interactive `create-vite` command, the project structure was initialized manually.

## Actions Taken

### 1. Directory Creation
- Created the root directory for the frontend: `c:\Users\Keshada\Desktop\Chatbot\Frontend`.

### 2. Configuration Files
Created the following essential configuration files:

#### `package.json`
Defined the project metadata, scripts, and dependencies.
- **Dependencies**: `react`, `react-dom`.
- **DevDependencies**: `vite`, `tailwindcss`, `postcss`, `autoprefixer`, `@vitejs/plugin-react`.
- **Scripts**: configured `dev`, `build`, `lint`, and `preview`.

#### `vite.config.js`
Configured Vite to use the React plugin and set the development server to run on port **3000**.

#### `tailwind.config.js`
Initialized Tailwind CSS configuration:
- Configured `content` paths to include `index.html` and all source files (`./src/**/*.{js,ts,jsx,tsx}`).
- Extended the theme with a custom color palette:
    - `primary`: #4F46E5 (Indigo 600)
    - `secondary`: #6366F1 (Indigo 500)
    - `accent`: #818CF8 (Indigo 400)
    - `dark`: #1F2937 (Gray 800)
    - `light`: #F3F4F6 (Gray 100)

#### `postcss.config.js`
Configured PostCSS to use `tailwindcss` and `autoprefixer`.

#### `index.html`
Created the HTML entry point with a root div and a script reference to `/src/main.jsx`.

### 3. Dependency Installation
Ran `npm install` to install all the defined dependencies in `package.json`.
