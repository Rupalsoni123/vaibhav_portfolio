import React, { useRef, useEffect, useState } from 'react';
import { useAI } from './useAI';

// Use correct path for caricature
const AVATAR_URL = "/images/caricature.png";

const AssistantApp = () => {
  const { messages, isTyping, sendMessage, clearHistory } = useAI();
  const [input, setInput] = useState('');
  const [avatarError, setAvatarError] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-[#1c1c1e] text-[#e5e7eb] font-sans overflow-hidden select-none">
      {/* Header (GNOME Style) */}
      <div className="flex items-center justify-between px-3 h-10 bg-[#252526] border-b border-black/30 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-indigo-500/20 flex items-center justify-center text-[10px] border border-white/5 ring-1 ring-indigo-500/20">
            {!avatarError ? (
              <img 
                src={AVATAR_URL} 
                alt="AI" 
                className="w-full h-full object-cover" 
                onError={() => setAvatarError(true)}
              />
            ) : (
              <span className="font-bold text-indigo-400">V</span>
            )}
          </div>
          <span className="text-[11px] font-bold text-gray-300 tracking-tight uppercase">AI Assistant</span>
        </div>
        <button 
          onClick={clearHistory}
          className="text-[9px] font-extrabold text-gray-500 hover:text-red-400 uppercase tracking-widest transition-colors py-1 px-2 hover:bg-white/5 rounded"
        >
          Reset Session
        </button>
      </div>

      {/* Chat History (System Like) */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 custom-scrollbar">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-30 py-8">
             <div className="w-10 h-10 mb-2 p-2 bg-white/5 rounded-full flex items-center justify-center">
                <span className="text-xl opacity-40">🤖</span>
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">System Ready. Ask anything about Vaibhav.</p>
          </div>
        )}

        {messages.map((msg, idx) => {
          const isUser = msg.role === 'user';
          return (
            <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div 
                className={`max-w-[85%] rounded px-3 py-1.5 text-[12.5px] leading-relaxed shadow-sm ${
                  isUser 
                    ? 'bg-indigo-600/90 text-white border border-indigo-500/30' 
                    : 'bg-[#2d2d2d] text-gray-300 border border-white/5'
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-[#2d2d2d] text-indigo-400 rounded px-3 py-1.5 border border-indigo-500/10 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce"></span>
              AI is thinking...
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input Area (Integrated) */}
      <div className="px-3 pb-3 bg-[#1c1c1e] flex-shrink-0">
        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your query..."
            disabled={isTyping}
            className="w-full bg-[#2d2d2d] text-[12.5px] text-white rounded px-3 py-2 outline-none border border-white/5 focus:border-indigo-500/50 transition-all placeholder-gray-600"
            autoFocus
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-1.5 py-0.5 px-3 bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 rounded text-[9px] font-bold uppercase text-indigo-400 hover:text-white transition-all disabled:opacity-0"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssistantApp;
