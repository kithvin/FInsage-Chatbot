const Chat = require('../models/Chat');
const contextService = require('../services/contextService');
const geminiService = require('../services/geminiService');

const chatController = {
  /**
   * Processes an incoming chat message.
   * 1. Validates the request body.
   * 2. Retrieves global chat context from the database.
   * 3. Generates a response using the Gemini AI service.
   * 4. Saves the interaction (user message and AI response) to the database.
   * 5. Returns the saved chat object to the client.
   * 
   * @async
   * @function processMessage
   * @param {Object} req - Express request object.
   * @param {Object} req.body - The request body.
   * @param {string} req.body.message - The user's message.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>} Sends a JSON response.
   */
  processMessage: async (req, res) => {
    try {
      const { message } = req.body;
      const userId = 'anonymous'; // Hardcoded for now, can be dynamic later
      
      if (!message) {
        res.status(400);
        throw new Error('Message is required');
      }

      // 1. Retrieve Context (Global)
      const context = await contextService.getContext();

      // 2. Generate Response using Gemini
      const responseText = await geminiService.generateResponse(message, context);

      // 3. Save to Database
      const chat = await Chat.create({
        user: userId,
        message,
        response: responseText,
      });

      res.status(201).json({ 
        success: true,
        data: chat 
      });
    } catch (error) {
      console.error('Error processing message:', error);
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = chatController;
