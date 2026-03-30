import { useState, useCallback } from 'react';
import { handleAutocomplete } from './AutocompleteEngine';
import skills from '../data/skills.jsx';
import projectsData from '../data/projects';
import contactInfo from '../data/contactInfo';

const HELP_TEXT = `Available commands:
  ls         — List files and directories
  cd <dir>   — Change directory
  pwd        — Print working directory
  cat <file> — View file content
  vim <file> — Open file in vim
  help       — Show this help message
  ask <q>    — Ask AI assistant
  about      — About Vaibhav Soni
  skills     — List technical skills
  projects   — List projects
  clear      — Clear terminal
  open <app> — Open an app (about, skills, projects, contact)
  neofetch   — System info`;

const NEOFETCH = `
      .-/+oossssoo+/-.        vaibhav@VaibhavOS
    \`:+ssssssssssssssssss+:\`   ─────────────────
  -+ssssssssssssssssssyyssss+-  OS: VaibhavOS 3.0 (Jammy)
.osssssssssssssssssssdMMMNyss+. Host: Portfolio Pro v3
+sssssssssshhhyNMMMS+sSMMMNss+  Kernel: React 18
osssssssshNMMs+sssss+/dMMMNss/ Shell: VaibhavTerm
+sssssssydMMMd+ssss+/yNMMMss+  Resolution: ${window.innerWidth}x${window.innerHeight}
/sssssssysMMMN+ssss/sNMMMss/   DE: GNOME 42
 +ssssssssNMMMo//+sdMMMNss+    Theme: Ubuntu Yaru
  +ssssssssdMNhsssdNMNNss+     Icons: Lucide React
   /ssssssssssyhhyyssss/       CPU: Liquid Cooled Cloud
    .+ssssssssssssssss+.       Memory: 128 GB Nano-Cell
      \`:+ssssssssss+:\`
          .-/oossoo/-.
`;

const INITIAL_HISTORY = [
  { type: 'output', text: 'VaibhavOS Terminal v3.0 (Jammy Jellyfish)' },
  { type: 'output', text: 'Logged in as vaibhav. Type "help" for a list of commands.\n' },
];

export const useTerminal = (openWindow, fileSystem) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "main",
      history: [...INITIAL_HISTORY],
      input: "",
      cmdHistory: [],
      historyIndex: -1,
      cwd: '/',
      vimData: null
    }
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [nextTabId, setNextTabId] = useState(2);

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  const updateTabById = useCallback((id, updater) => {
    setTabs(prevTabs => prevTabs.map(tab => 
      tab.id === id ? { ...tab, ...updater(tab) } : tab
    ));
  }, []);

  const updateActiveTab = useCallback((updater) => {
    updateTabById(activeTabId, updater);
  }, [activeTabId, updateTabById]);

  const addTab = useCallback(() => {
    const newId = nextTabId;
    setNextTabId(newId + 1);
    setTabs(prev => [
      ...prev,
      {
        id: newId,
        name: `tab${newId}`,
        history: [...INITIAL_HISTORY],
        input: "",
        cmdHistory: [],
        historyIndex: -1,
        cwd: '/',
        vimData: null
      }
    ]);
    setActiveTabId(newId);
  }, [nextTabId]);

  const closeTab = useCallback((tabId) => {
    setTabs(prev => {
      const remaining = prev.filter(t => t.id !== tabId);
      if (remaining.length === 0) return prev;
      if (activeTabId === tabId) {
        setActiveTabId(remaining[remaining.length - 1].id);
      }
      return remaining;
    });
  }, [activeTabId]);

  const processCommand = useCallback(async (cmdInput, currentTabId) => {
    const trimmed = cmdInput.trim();
    if (!trimmed) return;

    const parts = trimmed.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const activeTabObj = tabs.find(t => t.id === currentTabId);
    let currentCwd = activeTabObj?.cwd || '/';

    const newEntries = [{ type: 'command', text: trimmed, cwd: currentCwd }];

    updateTabById(currentTabId, tab => ({
      history: [...tab.history, ...newEntries],
      input: '',
      cmdHistory: [...tab.cmdHistory, trimmed],
      historyIndex: -1
    }));

    let result = null;

    switch (command) {
      case 'help':
        result = { type: 'output', text: HELP_TEXT };
        break;

      case 'ls':
      case 'll': {
        const targetRaw = args[0] || '.';
        const target = targetRaw.endsWith('/') && targetRaw !== '/' ? targetRaw.slice(0, -1) : targetRaw;
        
        let targetPath = currentCwd;
        if (target !== '.') {
           if (target === '..') {
              targetPath = currentCwd === '/' ? '/' : currentCwd.substring(0, currentCwd.lastIndexOf('/')) || '/';
           } else {
              targetPath = target.startsWith('/') ? target : (currentCwd === '/' ? `/${target}` : `${currentCwd}/${target}`);
           }
        }
        
        const dir = fileSystem[targetPath];
        if (dir && dir.type === 'dir') {
          if (command === 'll') {
             const llFormat = dir.children.map(child => {
                 const childNode = fileSystem[`${targetPath === '/' ? '' : targetPath}/${child}`];
                 const typeChar = childNode?.type === 'dir' ? 'd' : '-';
                 const perms = childNode?.type === 'dir' ? 'rwxr-xr-x' : 'rw-r--r--';
                 const size = childNode?.content?.length || 4096;
                 const date = "Mar 30 12:00";
                 return `${typeChar}${perms} 1 vaibhav staff ${size.toString().padStart(5, ' ')} ${date} ${child}`;
             }).join('\n');
             result = { type: 'output', text: `total ${dir.children.length * 4}\n` + llFormat };
          } else {
            result = { type: 'output', text: dir.children.join('  ') };
          }
        } else {
          result = { type: 'error', text: `${command}: cannot access '${targetRaw}': No such file or directory` };
        }
        break;
      }

      case 'cd': {
        const destRaw = args[0];
        if (!destRaw || destRaw === '.') break;
        const dest = destRaw.endsWith('/') && destRaw !== '/' ? destRaw.slice(0, -1) : destRaw;
        
        let newPath = currentCwd;
        if (dest === '..') {
          if (currentCwd === '/') break;
          newPath = currentCwd.substring(0, currentCwd.lastIndexOf('/')) || '/';
        } else {
          const target = dest.startsWith('/') ? dest : (currentCwd === '/' ? `/${dest}` : `${currentCwd}/${dest}`);
          if (fileSystem[target] && fileSystem[target].type === 'dir') {
            newPath = target;
          } else {
            result = { type: 'error', text: `Directory not found: ${dest}` };
            break;
          }
        }
        updateTabById(currentTabId, () => ({ cwd: newPath }));
        return;
      }

      case 'cat': {
        const file = args[0];
        if (!file) {
          result = { type: 'error', text: 'Usage: cat <file>' };
          break;
        }
        const path = currentCwd === '/' ? `/${file}` : `${currentCwd}/${file}`;
        if (fileSystem[path] && fileSystem[path].type === 'file') {
          result = { type: 'output', text: fileSystem[path].content };
        } else {
          result = { type: 'error', text: `cat: ${file}: No such file` };
        }
        break;
      }

      case 'vim': {
        const file = args[0];
        if (!file) {
          result = { type: 'error', text: 'Usage: vim <file>' };
          break;
        }
        const path = currentCwd === '/' ? `/${file}` : `${currentCwd}/${file}`;
        if (fileSystem[path] && fileSystem[path].type === 'file') {
          updateTabById(currentTabId, () => ({ vimData: { title: file, content: fileSystem[path].content } }));
          return;
        } else if (fileSystem[path] && fileSystem[path].type === 'dir') {
          result = { type: 'error', text: `vim: ${file}: Is a directory` };
        } else {
          updateTabById(currentTabId, () => ({ vimData: { title: file, content: '' } })); // New file
          return;
        }
        break;
      }

      case 'pwd':
        result = { type: 'output', text: currentCwd };
        break;

      case 'clear':
        updateTabById(currentTabId, () => ({ history: [] }));
        return;

      case 'ask': {
        const query = args.join(' ');
        if (!query) {
           result = { type: 'error', text: 'Usage: ask "your question"' };
           break;
        }
        updateTabById(currentTabId, tab => ({ history: [...tab.history, { type: 'output', text: '🤖 Consulting neural network...' }] }));
        const { askAI } = await import('./ai/aiService');
        const reply = await askAI(query);
        updateTabById(currentTabId, tab => {
          const filtered = tab.history.filter(h => h.text !== '🤖 Consulting neural network...');
          return { history: [...filtered, { type: 'success', text: `🤖 AI: ${reply}` }] };
        });
        return;
      }

      case 'neofetch':
        result = { type: 'output', text: NEOFETCH };
        break;

      case 'open': {
        const appId = args[0]?.toLowerCase();
        if (['about', 'skills', 'projects', 'contact'].includes(appId)) {
          openWindow(appId);
          result = { type: 'success', text: `Opening ${appId} application...` };
        } else {
          result = { type: 'error', text: `Unknown application: ${appId}` };
        }
        break;
      }

      default:
        result = { type: 'error', text: `Command not found: ${command}` };
    }

    if (result) {
      updateTabById(currentTabId, tab => ({
        history: [...tab.history, result]
      }));
    }
  }, [openWindow, updateTabById, fileSystem, tabs]);

  const handleInput = useCallback((val) => {
    updateActiveTab(() => ({ input: val }));
  }, [updateActiveTab]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      processCommand(activeTab.input, activeTab.id);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeTab.cmdHistory.length === 0) return;
      const idx = activeTab.historyIndex === -1 ? activeTab.cmdHistory.length - 1 : Math.max(0, activeTab.historyIndex - 1);
      updateActiveTab(() => ({ historyIndex: idx, input: activeTab.cmdHistory[idx] }));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeTab.historyIndex === -1) return;
      const idx = activeTab.historyIndex + 1;
      if (idx >= activeTab.cmdHistory.length) {
        updateActiveTab(() => ({ historyIndex: -1, input: '' }));
      } else {
        updateActiveTab(() => ({ historyIndex: idx, input: activeTab.cmdHistory[idx] }));
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const result = handleAutocomplete(activeTab.input, fileSystem, activeTab.cwd);
      if (result.matched) {
        updateActiveTab(() => ({ input: result.replacedInput }));
      } else if (result.suggestions.length > 0) {
        // Output the suggestions like a real terminal
        updateActiveTab(tab => ({
          history: [...tab.history, { type: 'command', text: tab.input, cwd: tab.cwd }, { type: 'output', text: result.suggestions.join('  ') }]
        }));
      }
    }
  }, [activeTab, processCommand, updateActiveTab, fileSystem]);

  const exitVim = useCallback(() => {
    updateActiveTab(() => ({ vimData: null }));
  }, [updateActiveTab]);

  return {
    tabs,
    activeTabId,
    activeTab,
    setActiveTabId,
    addTab,
    closeTab,
    handleInput,
    handleKeyDown,
    exitVim
  };
};
