# Chatbot Backend API

This is a Node.js backend for a chatbot using Express.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Create a `.env` file (already created) with the following content:
    ```
    PORT=5000
    ```

## Running the Server

-   **Development Mode** (with hot reload):
    ```bash
    npm run dev
    ```

-   **Production Mode**:
    ```bash
    npm start
    ```

## API Endpoints

### POST /api/chat/message

Send a message to the chatbot.

**Request Body:**
```json
{
  "message": "Hello"
}
```

**Response:**
```json
{
  "success": true,
  "response": "Echo: Hello"
}
```
