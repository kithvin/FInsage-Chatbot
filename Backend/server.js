const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./src/config/config');
const { errorHandler } = require('./src/middleware/errorMiddleware');

/**
 * Connects to the MongoDB database using the configuration provided.
 * Logs a success message on connection or exits the process on failure.
 * @async
 * @function connectDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongodbUri, {
      dbName: config.mongodbDbName,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware
if (config.env === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

const chatRoutes = require('./src/routes/chatRoutes');

// Routes
app.use('/api/chat', chatRoutes);

// Base Route
app.get('/', (req, res) => {
  res.send('Chatbot API is running...');
});

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
