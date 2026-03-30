import React, { useRef, useEffect, useState } from 'react';
import { Bot, X, Send, RotateCcw } from 'lucide-react';
import { useOS } from '../OSContext';
import { useAI } from './useAI';

// Correct path for caricature
const AVATAR_URL = "/images/caricature.png";

const FloatingAssistant = () => {
  const { isChatOpen, toggleChat } = useOS();
  const { messages, isTyping, sendMessage, clearHistory } = useAI();
  const [input, setInput] = useState('');
  const endRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isChatOpen && containerRef.current && !containerRef.current.contains(e.target) && !e.target.closest('.chatbot-trigger')) {
        toggleChat();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isChatOpen, toggleChat]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* PROFESSIONAL CHAT WINDOW: Opens ABOVE the button */}
      {isChatOpen && (
        <div 
          ref={containerRef}
          className="w-[320px] h-[400px] bg-[#1a1a1b]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in origin-bottom-right pointer-events-auto mb-2"
        >
          {/* Minimal Header */}
          <div className="p-4 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                 <img src={AVATAR_URL} alt="Bot" className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">Assistant</span>
            </div>
            <div className="flex items-center gap-1">
               <button 
                 onClick={clearHistory}
                 className="p-1 px-2 hover:bg-white/5 rounded text-gray-500 hover:text-white transition-colors"
                 title="Clear"
               >
                 <RotateCcw size={14} />
               </button>
               <button 
                 onClick={toggleChat}
                 className="p-1 px-2 hover:bg-white/5 rounded text-gray-500 hover:text-red-400 transition-colors"
               >
                 <X size={14} />
               </button>
            </div>
          </div>

          {/* Minimal Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar text-xs select-text">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-30 mt-[-10px]">
                 <Bot size={28} className="mb-2 text-gray-500" />
                 <p className="text-[10px] font-medium uppercase tracking-[3px] text-gray-500">System Ready</p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg px-3 py-2 leading-relaxed tracking-tight ${
                  m.role === 'user' 
                    ? 'bg-white/10 text-white' 
                    : 'bg-white/[0.04] text-gray-300 border border-white/[0.08]'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
               <div className="text-[9px] font-bold text-indigo-400 px-2 animate-pulse uppercase tracking-widest">
                 Thinking...
               </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Compact Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-white/[0.08] bg-black/20 flex gap-2">
            <input 
              autoFocus
              className="flex-1 bg-white/[0.03] text-xs text-white px-3 py-2 rounded-lg border border-white/10 focus:border-white/20 outline-none transition-all"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all disabled:opacity-20 active:scale-95"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* REDESIGNED CHATBOT TRIGGER: No bright purple, 56px subtle style */}
      <div className="relative flex items-center pointer-events-auto group">
        {!isChatOpen && (
          <div className="absolute right-full mr-4 whitespace-nowrap bg-[#1a1a1b]/90 backdrop-blur-xl border border-white/10 text-gray-200 text-[11px] font-medium py-1.5 px-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] opacity-90 hover:opacity-100 transition-all flex items-center gap-2 cursor-pointer animate-fade-in"
               onClick={toggleChat}>
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
            Hi, I'm here!
          </div>
        )}
        <button 
          className={`chatbot-trigger w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale(1.05) active:scale-95 border border-white/10 ${
            isChatOpen ? 'bg-white/10 rotate-90 scale-90' : 'bg-[#1a1a1b]/80 backdrop-blur-xl hover:bg-white/10'
          }`}
          onClick={toggleChat}
          style={{ transition: 'all 0.3s' }}
        >
          <Bot size={28} className={isChatOpen ? 'text-white' : 'text-gray-300'} />
        </button>
      </div>
      
    </div>
  );
};

export default FloatingAssistant;
