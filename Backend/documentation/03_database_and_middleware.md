# Step 3: Database and Middleware Integration

## Overview
This step involved connecting the application to a MongoDB database, setting up data models, and implementing global error handling.

## Actions Taken

1.  **Database Setup**:
    *   Installed `mongoose` for MongoDB object modeling.
    *   Created `src/config/db.js` to handle the database connection logic.
    *   Configured the connection to use `process.env.MONGO_URI` or a local default (`mongodb://localhost:27017/chatbot`).
    *   Updated `.env` to include the `MONGO_URI`.

2.  **Data Modeling**:
    *   Created `src/models/Chat.js` to define the schema for chat messages.
    *   Schema includes:
        *   `user`: String (default 'anonymous')
        *   `message`: String (required)
        *   `response`: String (required)
        *   `timestamp`: Date (default `Date.now`)

3.  **Middleware Implementation**:
    *   Created `src/middleware/errorMiddleware.js`.
    *   Implemented a global `errorHandler` to format error responses consistently (JSON format with message and stack trace in development).

4.  **Integration**:
    *   Updated `server.js`:
        *   Imported and called `connectDB()` to establish the database connection on startup.
        *   Added `app.use(errorHandler)` at the end of the middleware chain to catch errors.
    *   Updated `src/controllers/chatController.js`:
        *   Imported the `Chat` model.
        *   Modified `processMessage` to save the user's message and the bot's response to the database using `Chat.create()`.
        *   Updated the response to include the saved chat object.

## Files Created/Modified
-   `src/config/db.js`
-   `src/models/Chat.js`
-   `src/middleware/errorMiddleware.js`
-   `server.js`
-   `src/controllers/chatController.js`
-   `.env`
