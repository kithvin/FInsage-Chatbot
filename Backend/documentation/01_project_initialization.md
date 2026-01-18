# Step 1: Project Initialization

## Overview
This step involved setting up the initial Node.js environment, creating the basic server structure, and handling dependency management.

## Actions Taken

1.  **Project Scaffolding**:
    *   Attempted to initialize the project using `npm init -y`. Due to a timeout/hang, the `package.json` file was created manually.
    *   Defined the project name as `chatbot-backend` and set the main entry point to `server.js`.

2.  **Dependency Management**:
    *   Added the following runtime dependencies:
        *   `express`: Web framework for Node.js.
        *   `cors`: Middleware to enable Cross-Origin Resource Sharing.
        *   `dotenv`: Module to load environment variables from a `.env` file.
    *   Added `nodemon` as a development dependency for hot-reloading.
    *   Ran `npm install` to install all defined dependencies.

3.  **Server Setup**:
    *   Created `server.js` as the entry point.
    *   Configured a basic Express application.
    *   Implemented a root route (`/`) to verify the server is running.
    *   Implemented a placeholder POST route (`/api/chat`) for chatbot interaction.
    *   Configured the server to listen on a port defined in environment variables (defaulting to 5000).

4.  **Environment Configuration**:
    *   Created a `.env` file to store sensitive configuration.
    *   Added `PORT=5000` to the `.env` file.

## Files Created/Modified
-   `package.json`
-   `server.js`
-   `.env`
