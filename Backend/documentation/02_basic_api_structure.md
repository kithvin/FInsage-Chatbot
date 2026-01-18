# Step 2: Basic API Structure

## Overview
This step focused on organizing the codebase into a modular structure (MVC pattern) and implementing the initial chat functionality.

## Actions Taken

1.  **Directory Structure**:
    *   Created a `src` directory to house the application source code.
    *   Created `src/controllers` for business logic.
    *   Created `src/routes` for route definitions.

2.  **Controller Implementation**:
    *   Created `src/controllers/chatController.js`.
    *   Implemented a `processMessage` function.
    *   Added basic validation to ensure a message is present in the request body.
    *   Added a placeholder "Echo" logic to simulate a chatbot response.
    *   Implemented error handling within the controller.

3.  **Route Definition**:
    *   Created `src/routes/chatRoutes.js`.
    *   Defined a POST route (`/message`) mapping to `chatController.processMessage`.

4.  **Server Integration**:
    *   Updated `server.js` to import and use the new `chatRoutes`.
    *   Mounted the chat routes at `/api/chat`.
    *   Removed the previous inline placeholder route from `server.js`.

5.  **Documentation**:
    *   Created `README.md` with setup instructions, running commands, and API endpoint documentation.

## Files Created/Modified
-   `src/controllers/chatController.js`
-   `src/routes/chatRoutes.js`
-   `server.js`
-   `README.md`
