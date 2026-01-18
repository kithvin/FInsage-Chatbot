const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      default: 'anonymous'
    },
    message: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
