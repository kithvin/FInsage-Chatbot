import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage.text }),
      });

      const data = await response.json();

      if (data.success) {
        const botResponse = {
          id: Date.now() + 1,
          text: data.data.response,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the server. Please ensure the backend is running on port 5000.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px] transition-all duration-300 hover:shadow-3xl">
      {/* Header */}
      <div className="bg-primary p-4 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg tracking-wide">AI Assistant</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
              <span className="text-indigo-100 text-xs font-medium">Online</span>
            </div>
          </div>
        </div>
        <button className="text-indigo-100 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto custom-scrollbar relative">
        {/* Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4 animate-fade-in-up">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-50 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all border border-transparent focus:border-indigo-200 placeholder-gray-400 shadow-inner"
          />
          <button 
            type="submit" 
            disabled={!inputText.trim()}
            className="bg-primary hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center w-12 h-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
