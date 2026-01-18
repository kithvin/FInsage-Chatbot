const Chat = require('../models/Chat');

class ContextService {
  /**
   * Retrieves the recent chat history from the database to provide context for the AI.
   * This method fetches the latest messages globally (across all users) to maintain a continuous conversation flow.
   * The history is reversed to chronological order (oldest to newest) before being returned.
   * 
   * @async
   * @method getContext
   * @param {string} [userId='anonymous'] - The ID of the user (unused in global context mode but kept for compatibility).
   * @param {number} [limit=5] - The number of recent messages to retrieve.
   * @returns {Promise<string>} A formatted string containing the chat history (User: ... \n Bot: ...).
   */
  async getContext(userId = 'anonymous', limit = 5) {
    try {
      // Fetch recent messages globally, sorted by newest first
      const history = await Chat.find({})
        .sort({ createdAt: -1 })
        .limit(limit);

      // Reverse to chronological order for the LLM
      const chronologicalHistory = history.reverse();

      if (chronologicalHistory.length === 0) {
        return 'No previous conversation history.';
      }

      // Format the history into a string
      const contextString = chronologicalHistory
        .map(chat => `User: ${chat.message}\nBot: ${chat.response}`)
        .join('\n\n');

      return contextString;
    } catch (error) {
      console.error('Error retrieving context:', error);
      return ''; // Return empty context on error to allow the chat to proceed
    }
  }
}

module.exports = new ContextService();
