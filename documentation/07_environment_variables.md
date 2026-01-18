# Environment Variables Configuration

## Overview
This step involved configuring the Frontend to use environment variables for the Backend URL. This makes the application more flexible and easier to deploy to different environments (e.g., development vs. production) without changing the code.

## Actions Taken

### 1. Created Environment File
Created a `.env` file in the root of the `Frontend` directory (`c:\Users\Keshada\Desktop\Chatbot\Frontend\.env`).

**Content:**
```env
VITE_BACKEND_URL=http://localhost:5000
```
*Note: In Vite, environment variables exposed to the client must start with `VITE_`.*

### 2. Updated `Chatbot.jsx`
Modified `src/components/Chatbot.jsx` to use the environment variable instead of the hardcoded URL.

**Change:**
```javascript
// Before
const response = await fetch('http://localhost:5000/api/chat/message', { ... });

// After
const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/message`, { ... });
```

## How It Works
1.  **Vite loads `.env`**: When you run `npm run dev`, Vite reads the `.env` file.
2.  **`import.meta.env`**: Vite exposes these variables on the special `import.meta.env` object.
3.  **Replacement**: During the build or dev process, `import.meta.env.VITE_BACKEND_URL` is replaced with the actual string `http://localhost:5000`.

## Verification
1.  Restart the Frontend server (`npm run dev`) to load the new `.env` file.
2.  Send a message in the chatbot.
3.  The request should still go to `http://localhost:5000/api/chat/message` and function correctly.
