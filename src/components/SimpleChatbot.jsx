import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../utils/ThemeContext';
import freeChatbot from '../utils/freeChatbot';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 **Hello! I'm Vaibhav's Portfolio Assistant**\n\nI can help you learn about:\n• **Vaibhav's experience** and projects\n• **DevOps technologies** (Kubernetes, Docker, Terraform)\n• **Cloud platforms** (AWS, Azure)\n• **Career guidance** in DevOps\n\nWhat would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  // Client-side rate limit: 3 messages per rolling 60s window.
  // Stored in localStorage so it persists across page reloads but
  // not across browsers/incognito. Server-side limit is the real gate.
  const RATE_KEY = "p3-chat-stamps";
  const RATE_MAX = 3;
  const RATE_WINDOW_MS = 60 * 1000;

  const checkClientRate = () => {
    const now = Date.now();
    let stamps = [];
    try {
      stamps = JSON.parse(localStorage.getItem(RATE_KEY) || "[]");
    } catch {
      stamps = [];
    }
    stamps = stamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (stamps.length >= RATE_MAX) {
      const oldest = stamps[0];
      const waitSec = Math.max(1, Math.ceil((RATE_WINDOW_MS - (now - oldest)) / 1000));
      return { ok: false, waitSec };
    }
    stamps.push(now);
    try {
      localStorage.setItem(RATE_KEY, JSON.stringify(stamps));
    } catch {}
    return { ok: true };
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const validateInput = (input) => {
    if (!input || input.trim().length === 0) {
      return { valid: false, error: 'Please enter a question' };
    }
    
    if (input.trim().length > 500) {
      return { valid: false, error: 'Question is too long. Please keep it under 500 characters.' };
    }
    
    return { valid: true, sanitized: input.trim() };
  };

  const handleSendMessage = async (messageText) => {
    const validation = validateInput(messageText);
    if (!validation.valid) {
      const errorMessage = {
        id: Date.now(),
        text: `🚫 **${validation.error}**`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setMessage('');
      return;
    }

    const rate = checkClientRate();
    if (!rate.ok) {
      const limitMessage = {
        id: Date.now(),
        text: `Thanks for being curious — you've asked a few questions in the last minute. Let's pause for about **${rate.waitSec}s** so I can give every visitor a fair turn.`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, limitMessage]);
      setMessage('');
      return;
    }

    const sanitizedMessage = validation.sanitized;

    const userMessage = {
      id: Date.now(),
      text: sanitizedMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    setTimeout(async () => {
      try {
        const botResponse = await freeChatbot.query(sanitizedMessage);
        
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Chatbot error:', error);
        const errorMessage = {
          id: Date.now() + 1,
          text: freeChatbot.handleError(),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
    }
  };

  // Escape HTML first to prevent XSS, then apply markdown-lite formatting.
  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const formatMessage = (text) => {
    return escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /`(.*?)`/g,
        '<code style="background: var(--p3-bg-2); padding: 1px 6px; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">$1</code>'
      )
      .replace(/\n/g, "<br>");
  };

  return (
    <>
      {/* Chatbot toggle (FAB stack: bottom-most) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        title={isOpen ? "Close assistant" : "Open assistant"}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 50,
          width: 48,
          height: 48,
          borderRadius: 12,
          background: isOpen ? "var(--p3-err)" : "var(--p3-accent)",
          color: "var(--p3-bg-0)",
          border: "1px solid var(--p3-line)",
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            role="dialog"
            aria-label="Portfolio assistant"
            style={{
              position: "fixed",
              right: 20,
              bottom: 80,
              zIndex: 49,
              width: "min(380px, calc(100vw - 40px))",
              height: "min(560px, calc(100vh - 120px))",
              background: "var(--p3-bg-1)",
              border: "1px solid var(--p3-line)",
              borderRadius: 14,
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header — terminal chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                background: "var(--p3-bg-2)",
                borderBottom: "1px solid var(--p3-line)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--p3-err)" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--p3-warn)" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--p3-ok)" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--p3-ink-mut)",
                  marginLeft: 8,
                }}
              >
                ~/assistant
              </span>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                background: "var(--p3-bg-0)",
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    justifyContent: msg.isBot ? "flex-start" : "flex-end",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "10px 12px",
                      borderRadius: 10,
                      fontSize: 13,
                      lineHeight: 1.5,
                      background: msg.isBot ? "var(--p3-bg-1)" : "var(--p3-accent)",
                      color: msg.isBot ? "var(--p3-ink)" : "var(--p3-bg-0)",
                      border: msg.isBot ? "1px solid var(--p3-line)" : "none",
                      fontFamily: msg.isBot ? "var(--font-sans)" : "var(--font-sans)",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        marginTop: 6,
                        opacity: 0.65,
                      }}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <div
                    style={{
                      padding: "10px 14px",
                      background: "var(--p3-bg-1)",
                      border: "1px solid var(--p3-line)",
                      borderRadius: 10,
                      display: "flex",
                      gap: 4,
                    }}
                  >
                    {[0, 0.15, 0.3].map((d) => (
                      <span
                        key={d}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--p3-ink-mut)",
                          animation: `chatdot 1s infinite ${d}s`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: 12,
                background: "var(--p3-bg-1)",
                borderTop: "1px solid var(--p3-line)",
                display: "flex",
                gap: 8,
              }}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="$ ask me anything…"
                disabled={isTyping}
                aria-label="Ask the assistant"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  border: "1px solid var(--p3-line)",
                  borderRadius: 8,
                  background: "var(--p3-bg-0)",
                  color: "var(--p3-ink)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  outline: "none",
                }}
              />
              <motion.button
                onClick={() => handleSendMessage(message)}
                disabled={isTyping || !message.trim()}
                aria-label="Send message"
                style={{
                  padding: "0 14px",
                  background: "var(--p3-accent)",
                  color: "var(--p3-bg-0)",
                  border: "none",
                  borderRadius: 8,
                  cursor: isTyping || !message.trim() ? "not-allowed" : "pointer",
                  opacity: isTyping || !message.trim() ? 0.5 : 1,
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                ↵
              </motion.button>
            </div>
            <style>{`@keyframes chatdot { 0%,80%,100%{opacity:.3} 40%{opacity:1} }`}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SimpleChatbot;
