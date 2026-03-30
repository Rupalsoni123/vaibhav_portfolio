import React, { useRef, useEffect } from 'react';
import { useOS } from './OSContext';
import { useTerminal } from './useTerminal';
import TerminalTabs from './TerminalTabs';

const Terminal = () => {
  const os = useOS();
  const {
    tabs,
    activeTabId,
    activeTab,
    setActiveTabId,
    addTab,
    closeTab,
    handleInput,
    handleKeyDown,
    exitVim
  } = useTerminal(os);
  
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  
  const getPrompt = (cwd) => {
    const formattedCwd = cwd === '/' ? '~' : `~${cwd}`;
    return (
      <span className="os-terminal__prompt select-none">
        <span className="text-[#4ade80] font-bold">vaibhav@os</span>:<span className="text-blue-400">{formattedCwd}</span>$ 
      </span>
    );
  };

  useEffect(() => {
    // Auto-scroll on new output or tab switch
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [activeTab.history, activeTabId, activeTab.vimData]);

  useEffect(() => {
    const handleVimKey = (e) => {
      if (activeTab.vimData && e.key.toLowerCase() === 'q') {
        e.preventDefault();
        exitVim();
      }
    };
    if (activeTab.vimData) {
      window.addEventListener('keydown', handleVimKey);
      return () => window.removeEventListener('keydown', handleVimKey);
    }
  }, [activeTab.vimData, exitVim]);

  return (
    <div className="os-terminal-container" onClick={() => { if(!activeTab.vimData) inputRef.current?.focus() }}>
      <TerminalTabs 
        tabs={tabs}
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
        onAddTab={addTab}
        onCloseTab={closeTab}
      />
      {activeTab.vimData ? (
        <div className="os-terminal flex flex-col pt-1 bg-[#1e1e1e] font-mono h-full relative z-10 p-2 overflow-hidden shadow-inner">
           <div className="flex-1 overflow-y-auto whitespace-pre-wrap custom-scrollbar text-gray-200 p-2 text-sm leading-relaxed select-text">
             {activeTab.vimData.content || '~\n~\n~'}
           </div>
           <div className="flex-shrink-0 bg-[#333] px-3 py-1 flex justify-between items-center text-xs font-bold text-gray-300">
             <span>"{activeTab.vimData.title}" {activeTab.vimData.content ? '[Read-Only]' : '[New File]'}</span>
             <span className="bg-black/40 px-2 py-0.5 rounded text-white tracking-wider outline outline-1 outline-white/10 uppercase">Press 'q' to quit</span>
           </div>
        </div>
      ) : (
      <div className="os-terminal">
        <div className="os-terminal__output flex flex-col gap-1 pb-4" ref={scrollRef}>
          {activeTab.history.map((entry, i) => (
            <div key={i} className={`os-terminal__line os-terminal__line--${entry.type}`}>
              {entry.type === 'command' && getPrompt(entry.cwd || '/')}
              <span className="os-terminal__text break-words whitespace-pre-wrap">{entry.text}</span>
            </div>
          ))}

          {/* Current input line */}
          <div className="os-terminal__line os-terminal__line--input mt-2">
            {getPrompt(activeTab.cwd || '/')}
            <input
              ref={inputRef}
              type="text"
              className="os-terminal__input flex-1 bg-transparent border-none outline-none text-white ml-2 caret-[#4ade80]"
              value={activeTab.input}
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Terminal;
