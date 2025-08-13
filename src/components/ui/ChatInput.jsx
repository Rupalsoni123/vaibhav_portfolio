import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatInput = ({ 
  onSendMessage, 
  theme, 
  disabled, 
  onVoiceInput, 
  isListening = false, 
  showVoiceButton = false 
}) => {
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

  const handleVoiceInput = () => {
    if (onVoiceInput && !isListening && !disabled) {
      onVoiceInput();
    }
  };

  return (
    <div className={`p-4 ${
      theme === 'dark' 
        ? 'bg-gray-900' 
        : 'bg-gray-50'
    }`}>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isListening ? "Listening..." : "Ask about Vaibhav's skills, projects..."}
            disabled={disabled || isListening}
            className={`w-full px-3 py-2 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } ${(disabled || isListening) ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          
          {/* Voice Input Button */}
          {showVoiceButton && (
            <motion.button
              type="button"
              onClick={handleVoiceInput}
              disabled={disabled || isListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all ${
                isListening
                  ? 'text-red-500 animate-pulse'
                  : disabled
                  ? 'text-gray-400 cursor-not-allowed'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
              whileHover={!disabled && !isListening ? { scale: 1.1 } : {}}
              whileTap={!disabled && !isListening ? { scale: 0.9 } : {}}
              aria-label={isListening ? "Listening..." : "Voice input"}
            >
              <AnimatePresence mode="wait">
                {isListening ? (
                  <motion.svg
                    key="listening"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M13.828 7.172a1 1 0 011.414 0A5.983 5.983 0 0117 12a5.983 5.983 0 01-1.758 4.828 1 1 0 11-1.414-1.414A3.987 3.987 0 0015 12a3.987 3.987 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="microphone"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
        
        <motion.button
          type="submit"
          disabled={!message.trim() || disabled || isListening}
          whileHover={!disabled && message.trim() && !isListening ? { scale: 1.05 } : {}}
          whileTap={!disabled && message.trim() && !isListening ? { scale: 0.95 } : {}}
          className={`px-3 py-2 rounded-lg transition-all ${
            !message.trim() || disabled || isListening
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
      
      {/* Enhanced Quick suggestions */}
      <div className="mt-2 flex flex-wrap gap-1">
        {['Skills', 'Projects', 'Experience', 'Contact', 'Certifications'].map((suggestion) => (
          <motion.button
            key={suggestion}
            onClick={() => {
              if (!disabled && !isListening) {
                setMessage(`Tell me about ${suggestion.toLowerCase()}`);
                inputRef.current?.focus();
              }
            }}
            disabled={disabled || isListening}
            className={`px-2 py-1 text-xs rounded-full transition-all ${
              disabled || isListening
                ? 'opacity-50 cursor-not-allowed'
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            whileHover={!disabled && !isListening ? { scale: 1.05 } : {}}
            whileTap={!disabled && !isListening ? { scale: 0.95 } : {}}
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
      
      {/* Voice input status */}
      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center justify-center space-x-2 text-xs text-red-500"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span>Listening... Speak now</span>
        </motion.div>
      )}
    </div>
  );
};

export default ChatInput;
