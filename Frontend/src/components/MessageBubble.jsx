import React from 'react';

const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in-up`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-200 hover:shadow-md ${
        isUser 
          ? 'bg-primary text-white rounded-br-none' 
          : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
      }`}>
        <p className="text-sm leading-relaxed">{message.text}</p>
        <span className={`text-[10px] mt-1 block text-right ${isUser ? 'text-indigo-200' : 'text-gray-400'}`}>
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
