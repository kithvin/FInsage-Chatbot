# Chatbot Project

## Project Overview
This project is a full-stack AI Chatbot application consisting of a modern React frontend and a Node.js backend powered by Google's Gemini AI.

## Integration Status
**✅ Frontend & Backend Integrated**

The frontend and backend have been successfully connected.
- **Frontend**: Sends user messages via HTTP POST requests.
- **Backend**: Receives messages, queries the Gemini AI API, and returns the intelligent response.
- **Real-time Interaction**: The UI updates asynchronously to display the bot's response.

## Project Structure
- **Frontend/**: React application built with Vite and Tailwind CSS.
  - Runs on: `http://localhost:3000`
- **Backend/**: Express.js API with MongoDB and Gemini AI integration.
  - Runs on: `http://localhost:5000`
- **documentation/**: Contains detailed logs of the development steps.

## How to Run
1. **Start the Backend**:
   ```bash
   cd Backend
   npm start
   ```
2. **Start the Frontend**:
   ```bash
   cd Frontend
   npm run dev
   ```
3. **Open Browser**: Navigate to `http://localhost:3000`.
