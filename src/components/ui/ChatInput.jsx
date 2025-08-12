import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSendMessage, theme, disabled }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={`p-4 border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about Vaibhav's skills, projects..."
          disabled={disabled}
          className={`flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
        
        <motion.button
          type="submit"
          disabled={!message.trim() || disabled}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          className={`px-3 py-2 rounded-lg transition-all ${
            !message.trim() || disabled
              ? theme === 'dark'
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          aria-label="Send message"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </motion.button>
      </form>
      
      {/* Quick suggestions */}
      <div className="mt-2 flex flex-wrap gap-1">
        {['Skills', 'Projects', 'Experience', 'Contact'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              if (!disabled) {
                setMessage(`Tell me about ${suggestion.toLowerCase()}`);
                inputRef.current?.focus();
              }
            }}
            disabled={disabled}
            className={`px-2 py-1 text-xs rounded-full transition-all ${
              disabled
                ? 'opacity-50 cursor-not-allowed'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatInput;
