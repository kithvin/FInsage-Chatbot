# Complete System Overview

## System Architecture
The application is a full-stack Chatbot solution consisting of a React Frontend and a Node.js/Express Backend.

### High-Level Flow
1.  **User Interface**: The user interacts with the React-based chat interface.
2.  **API Request**: Messages are sent via HTTP POST to the Backend API.
3.  **Processing**: The Backend receives the message, retrieves conversation history from MongoDB, and constructs a prompt.
4.  **AI Generation**: The prompt is sent to Google's Gemini AI (model: `gemini-1.5-flash`).
5.  **Response**: The AI's response is stored in MongoDB and returned to the Frontend.
6.  **Display**: The Frontend displays the AI's response in the chat window.

## Component Breakdown

### 1. Backend (`/Backend`)
The backend is a robust Node.js application structured using the MVC pattern.

-   **Tech Stack**: Node.js, Express, MongoDB (Mongoose), Google Generative AI SDK.
-   **Key Features**:
    -   **Gemini Integration**: Uses `gemini-1.5-flash` for intelligent responses.
    -   **Context Awareness**: Fetches previous chat history from MongoDB to provide context-aware replies.
    -   **Data Persistence**: Stores all user and bot messages in MongoDB.
    -   **Logging**: Uses `morgan` for HTTP request logging.
-   **Documentation**: Detailed step-by-step documentation for the backend creation and updates is located in `Backend/documentation/`.

### 2. Frontend (`/Frontend`)
The frontend is a modern, responsive web application.

-   **Tech Stack**: React, Vite, Tailwind CSS.
-   **Key Features**:
    -   **Responsive Design**: Mobile-friendly layout with a premium feel.
    -   **Real-time Interaction**: Async API calls with loading states and error handling.
    -   **Components**: Modular components like `MessageBubble` and `Chatbot`.
    -   **Styling**: Custom Tailwind configuration for consistent theming (Indigo/Gray palette).
-   **Documentation**: Steps 01-03 in this directory cover the frontend initialization and creation.

### 3. Integration
The connection between Frontend and Backend is established via REST API.

-   **Endpoint**: `POST http://localhost:5000/api/chat/message`
-   **Data Flow**: JSON payload `{ "message": "..." }` -> JSON response `{ "data": { "response": "..." } }`.
-   **Documentation**: Steps 04-05 in this directory cover the integration plan and implementation.

## Current Status
As of the latest update, the system is fully integrated. The frontend successfully communicates with the backend, which in turn communicates with Gemini AI. The chatbot is capable of holding conversations with context retention.
