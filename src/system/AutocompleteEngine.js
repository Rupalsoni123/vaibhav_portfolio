const COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'contact',
  'clear',
  'whoami',
  'open',
  'date',
  'neofetch',
  'echo',
  'sudo',
  'ls',
  'cd',
  'pwd',
  'cat',
  'vim',
  'ask'
];

const APPS = [
  'about',
  'skills',
  'projects',
  'contact'
];

/**
 * Handle autocomplete logic for terminal input
 * @param {string} input - Current terminal input
 * @param {Object} fileSystem - Virtual file system
 * @param {string} cwd - Current working directory
 * @returns {Object} - { matched: boolean, replacedInput: string, suggestions: string[] }
 */
export const handleAutocomplete = (input, fileSystem = {}, cwd = '/') => {
  const trimmed = input.trimStart();
  if (!trimmed) return { matched: false, replacedInput: input, suggestions: [] };

  const parts = trimmed.split(' ');
  const command = parts[0].toLowerCase();

  // Autocomplete command
  if (parts.length === 1) {
    const matches = COMMANDS.filter(cmd => cmd.startsWith(command));
    
    if (matches.length === 1) {
      return { matched: true, replacedInput: matches[0] + ' ', suggestions: [] };
    }
    
    if (matches.length > 1) {
      return { matched: false, replacedInput: input, suggestions: matches };
    }
  }
  
  // Autocomplete arguments for 'open'
  if (parts.length === 2 && command === 'open') {
    const appArg = parts[1].toLowerCase();
    const matches = APPS.filter(app => app.startsWith(appArg));
    
    if (matches.length === 1) {
      return { matched: true, replacedInput: `open ${matches[0]} `, suggestions: [] };
    }
    
    if (matches.length > 1) {
      return { matched: false, replacedInput: input, suggestions: matches };
    }
  }

  // Autocomplete for filesystem commands
  if (parts.length === 2 && ['cd', 'ls', 'cat', 'vim'].includes(command)) {
    const term = parts[1];
    
    let searchDir = cwd;
    let searchPrefix = term;

    if (term.includes('/')) {
       const lastSlashIndex = term.lastIndexOf('/');
       const pathPart = term.substring(0, lastSlashIndex);
       searchPrefix = term.substring(lastSlashIndex + 1);

       if (term.startsWith('/')) {
         searchDir = pathPart || '/';
       } else {
         searchDir = cwd === '/' ? `/${pathPart}` : `${cwd}/${pathPart}`;
       }
    }

    const dirObj = fileSystem[searchDir];
    if (dirObj && dirObj.type === 'dir' && dirObj.children) {
       const matches = dirObj.children.filter(child => child.startsWith(searchPrefix));
       
       if (matches.length === 1) {
         let newArg = matches[0];
         if (term.includes('/')) {
            const lastSlashIndex = term.lastIndexOf('/');
            newArg = term.substring(0, lastSlashIndex + 1) + matches[0];
         }
         
         const isDir = fileSystem[searchDir === '/' ? `/${matches[0]}` : `${searchDir}/${matches[0]}`]?.type === 'dir';
         return { matched: true, replacedInput: `${command} ${newArg}${isDir ? '/' : ' '}`, suggestions: [] };
       }
       if (matches.length > 1) {
         return { matched: false, replacedInput: input, suggestions: matches };
       }
    }
  }

  return { matched: false, replacedInput: input, suggestions: [] };
};
