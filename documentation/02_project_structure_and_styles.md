# Project Structure and Styles Setup

## Overview
This step focused on establishing the source code structure, global styles, and the main application entry points.

## Actions Taken

### 1. Source Directory Setup
- Created `src` directory.
- Created `src/components` directory for React components.

### 2. Global Styles (`src/index.css`)
- Imported Tailwind CSS layers: `@tailwind base`, `@tailwind components`, `@tailwind utilities`.
- Applied global styles to `body`:
    - Background color: `bg-gray-50`.
    - Text color: `text-gray-900`.
    - Font family: 'Inter', sans-serif.
- Added custom scrollbar styling for a polished look:
    - Width: 6px.
    - Thumb color: #E5E7EB (with hover state #D1D5DB).
    - Track background: Transparent.

### 3. Application Entry Point (`src/main.jsx`)
- Set up the React root using `ReactDOM.createRoot`.
- Wrapped the `App` component in `React.StrictMode`.
- Imported the global `index.css`.

### 4. Main Layout (`src/App.jsx`)
- Created the main `App` component.
- Implemented a centered layout container:
    - `min-h-screen`: Ensures full height.
    - `flex items-center justify-center`: Centers the chatbot content.
    - `bg-gray-100`: Sets the background color.
- Imported and rendered the `Chatbot` component (placeholder at this stage).
