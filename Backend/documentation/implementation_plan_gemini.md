# Implementation Plan: Gemini AI Chatbot with Database Context

This plan outlines the steps to integrate Google's Gemini AI into the chatbot backend, utilizing database content for context-aware responses.

## 1. Prerequisites & Configuration
*   **Action**: Obtain a Google Gemini API Key from Google AI Studio.
*   **Action**: Add `GEMINI_API_KEY` to `.env` and update `src/config/config.js`.
*   **Action**: Install the Google Generative AI SDK.
    ```bash
    npm install @google/generative-ai
    ```

## 2. Service Layer Implementation

### A. Context Service (`src/services/contextService.js`)
*   **Purpose**: Retrieve relevant data from the database to feed into the LLM.
*   **Logic**:
    *   Fetch recent chat history for the current user (e.g., last 5-10 messages) to maintain conversation continuity.
    *   (Future) Fetch specific user profile data or other business data if available.
*   **Output**: A formatted string or object representing the conversation context.

### B. Gemini Service (`src/services/geminiService.js`)
*   **Purpose**: Handle direct interactions with the Gemini API.
*   **Logic**:
    *   Initialize the Gemini model (e.g., `gemini-pro`).
    *   Construct a prompt that includes:
        *   **System Instructions**: Define the bot's persona and rules.
        *   **Context**: The data retrieved from `ContextService`.
        *   **User Input**: The current message.
    *   Send the prompt to Gemini and await the text response.

## 3. Controller Update (`src/controllers/chatController.js`)
*   **Current Flow**: Receive message -> Echo response -> Save to DB.
*   **New Flow**:
    1.  Receive `message` and `userId` (or session ID) from request.
    2.  **Retrieve Context**: Call `ContextService.getContext(userId)`.
    3.  **Generate Response**: Call `GeminiService.generateResponse(message, context)`.
    4.  **Save to DB**: Save the user message and the *actual* Gemini response to MongoDB.
    5.  **Respond**: Send the Gemini response back to the client.

## 4. Testing & Validation
*   **Step**: Verify that the bot remembers previous context (e.g., "My name is John" -> "What is my name?").
*   **Step**: Ensure API keys are secure and not committed to version control.

## 5. Future Enhancements (RAG)
*   If "pull out data" implies searching a large knowledge base, we will need to implement Vector Search (RAG) later. For now, we will focus on direct database queries (like history).
