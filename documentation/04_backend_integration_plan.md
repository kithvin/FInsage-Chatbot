# Backend Integration Plan

## Overview
This document outlines the steps to connect the React Frontend to the existing Node.js/Express Backend. The backend is already set up to handle chat messages using Google's Gemini AI.

## Prerequisites
- **Backend Directory**: `c:\Users\Keshada\Desktop\Chatbot\Backend`
- **Frontend Directory**: `c:\Users\Keshada\Desktop\Chatbot\Frontend`

## Step-by-Step Implementation

### 1. Backend Configuration & Startup
The backend needs to be running and accessible.

1.  **Environment Variables**:
    -   Ensure `Backend/.env` contains valid credentials:
        ```env
        PORT=5000
        MONGODB_URI=<your_mongodb_connection_string>
        GEMINI_API_KEY=<your_gemini_api_key>
        ```
2.  **Install Dependencies**:
    -   Open terminal in `Backend` directory.
    -   Run `npm install`.
3.  **Start Server**:
    -   Run `npm start`.
    -   Verify it says: `Server is running on port 5000` and `MongoDB Connected`.

### 2. API Endpoint Details
-   **URL**: `http://localhost:5000/api/chat/message`
-   **Method**: `POST`
-   **Headers**: `Content-Type: application/json`
-   **Request Body**:
    ```json
    {
      "message": "User's input text"
    }
    ```
-   **Response Format**:
    ```json
    {
      "success": true,
      "data": {
        "response": "AI generated reply",
        ...
      }
    }
    ```

### 3. Frontend Integration (`Chatbot.jsx`)
We will replace the dummy timeout logic with a real API call.

#### Changes Required:
1.  **Remove Dummy Logic**: Delete the `setTimeout` block in `handleSend`.
2.  **Async API Call**:
    -   Convert `handleSend` to an `async` function.
    -   Use `fetch` to send the user's message to the backend.
3.  **State Updates**:
    -   Set `isTyping` to `true` before the request.
    -   On success: Add the bot's response (`data.data.response`) to the `messages` state.
    -   On error: Add an error message to the chat or show a toast notification.
    -   Finally: Set `isTyping` to `false`.

### 4. CORS Verification
The backend `server.js` already includes `app.use(cors())`, so requests from `localhost:3000` (Frontend) to `localhost:5000` (Backend) should work without issues.

## Next Steps
Once this plan is approved, we will proceed with modifying `Chatbot.jsx` to implement the integration.
