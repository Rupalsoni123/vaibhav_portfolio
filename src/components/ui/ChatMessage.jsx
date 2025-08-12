import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, theme }) => {
  const { text, isBot, timestamp } = message;

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex items-start space-x-2 max-w-xs ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot 
            ? 'bg-blue-500' 
            : theme === 'dark' 
              ? 'bg-gray-600' 
              : 'bg-gray-300'
        }`}>
          <span className="text-white text-xs font-bold">
            {isBot ? 'V' : 'U'}
          </span>
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col">
          <div className={`px-3 py-2 rounded-lg ${
            isBot
              ? theme === 'dark'
                ? 'bg-gray-700 text-gray-100'
                : 'bg-gray-100 text-gray-900'
              : 'bg-blue-500 text-white'
          }`}>
            <p className="text-sm whitespace-pre-wrap">{text}</p>
          </div>
          
          {/* Timestamp */}
          <span className={`text-xs mt-1 ${
            isBot ? 'text-left' : 'text-right'
          } ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
