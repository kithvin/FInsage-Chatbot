# REST API Documentation

This document provides a reference for the available API endpoints in the Chatbot Backend.

## Base URL

By default, the API runs on:
`http://localhost:5000`

## Endpoints

### 1. Health Check

Checks if the server is running.

-   **URL**: `/`
-   **Method**: `GET`
-   **Auth Required**: No

#### Success Response

-   **Code**: `200 OK`
-   **Content**: `text/html`

```
Chatbot API is running...
```

---

### 2. Send Chat Message

Sends a user message to the chatbot and receives an AI-generated response. 

**Features:**
*   **AI Model**: Google Gemini 1.5 Flash.
*   **Context**: Uses global conversation history (all previous messages in the database) to provide context-aware responses.
*   **Storage**: The user message and the AI response are stored in the MongoDB database.

-   **URL**: `/api/chat/message`
-   **Method**: `POST`
-   **Auth Required**: No
-   **Content-Type**: `application/json`

#### Request Body

| Field | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `message` | `string` | The message text to send to the chatbot. | Yes |

**Example Request:**

```json
{
  "message": "Hello, who are you?"
}
```

#### Success Response

-   **Code**: `201 Created`
-   **Content**: `application/json`

**Example Response:**

```json
{
  "success": true,
  "data": {
    "user": "anonymous",
    "message": "Hello, who are you?",
    "response": "I am a helpful chatbot assistant powered by Google Gemini. How can I assist you today?",
    "_id": "65a7b9f1e8b9a1234567890",
    "createdAt": "2024-01-16T12:00:00.000Z",
    "updatedAt": "2024-01-16T12:00:00.000Z",
    "__v": 0
  }
}
```

#### Error Responses

**400 Bad Request**

Occurs if the `message` field is missing.

```json
{
  "message": "Message is required",
  "stack": "..." // Only in development mode
}
```

**500 Internal Server Error**

Occurs if there is a server-side error (e.g., database connection failure).

```json
{
  "message": "Internal Server Error",
  "stack": "..." // Only in development mode
}
```
