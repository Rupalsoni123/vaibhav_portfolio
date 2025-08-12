import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../utils/ThemeContext';
import ChatMessage from './ui/ChatMessage';
import ChatInput from './ui/ChatInput';
import { getChatbotResponse } from '../utils/chatbotLogic';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomePulse, setShowWelcomePulse] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Vaibhav's AI assistant. I can help you learn about his DevOps skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show welcome pulse for 10 seconds, then hide it
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePulse(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const botResponse = await getChatbotResponse(message);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Vaibhav's AI assistant. I can help you learn about his DevOps skills, projects, and experience. What would you like to know?",
        isBot: true,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div className="fixed bottom-6 right-6 z-50">
        {/* Welcome pulse effect */}
        {showWelcomePulse && !isOpen && (
          <div className="absolute inset-0 w-14 h-14 bg-blue-500 rounded-full animate-ping opacity-20"></div>
        )}
        
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowWelcomePulse(false);
          }}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle chatbot"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-24 right-6 z-40 w-80 h-96 rounded-lg shadow-2xl overflow-hidden sm:w-80 sm:h-96 max-sm:w-[calc(100vw-3rem)] max-sm:h-[calc(100vh-8rem)] max-sm:bottom-20 max-sm:right-3 max-sm:left-3 ${
              theme === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* Chat Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">V</span>
                </div>
                <div>
                  <h3 className={`font-semibold text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Vaibhav's Assistant
                  </h3>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
                aria-label="Clear chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 h-64 max-sm:h-[calc(100%-8rem)] chatbot-messages ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} theme={theme} />
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <div className={`px-3 py-2 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="chatbot-typing-dots">
                      <div className="bg-gray-400"></div>
                      <div className="bg-gray-400"></div>
                      <div className="bg-gray-400"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <ChatInput onSendMessage={handleSendMessage} theme={theme} disabled={isTyping} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
