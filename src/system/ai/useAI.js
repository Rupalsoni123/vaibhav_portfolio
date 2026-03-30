import { useState, useCallback } from 'react';
import { askAI } from './aiService';

export const useAI = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello Vaibhav, how can I assist you with your system today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (content) => {
    if (!content.trim()) return;

    // Add user message
    const userMsg = { role: 'user', content };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Get context from history (last 5 messages for brevity)
    const historyContext = messages.slice(-5);
    
    // Fetch reply
    const reply = await askAI(content, historyContext);

    // Add assistant reply
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setIsTyping(false);

    return reply;
  }, [messages]);

  const clearHistory = useCallback(() => {
    setMessages([{ role: 'assistant', content: "Memory cleared. How can I help you?" }]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearHistory
  };
};
