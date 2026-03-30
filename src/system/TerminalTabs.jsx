import React from 'react';

const TerminalTabs = ({ tabs, activeTabId, onSelectTab, onAddTab, onCloseTab }) => {
  return (
    <div className="os-terminal-tabs">
      <div className="os-terminal-tabs__list">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`os-terminal-tab ${tab.id === activeTabId ? 'active' : ''}`}
            onClick={() => onSelectTab(tab.id)}
          >
            <span className="os-terminal-tab__name">{tab.name}</span>
            <button
              className="os-terminal-tab__close"
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(tab.id);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex-1"></div>
      <button className="os-terminal-tabs__add" onClick={onAddTab} title="New Tab">
        +
      </button>
    </div>
  );
};

export default TerminalTabs;
