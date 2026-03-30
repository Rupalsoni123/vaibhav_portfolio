import React from 'react';
import { useOS } from '../OSContext';

const GAMES = [
  { id: 'tetris', name: 'Tetris', icon: '🧩', desc: 'Classic block puzzle' },
  { id: 'xo', name: 'Tic Tac Toe', icon: '❌', desc: 'Player vs Player' },
  { id: 'snake', name: 'Snake', icon: '🐍', desc: 'Retro snake game' }
];

const GameLauncher = () => {
  const { openWindow } = useOS();

  return (
    <div className="os-game-launcher p-6 flex flex-col items-center h-full bg-[#1c1c1e]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {GAMES.map(game => (
          <button 
            key={game.id}
            className="os-game-card bg-[#2d2d2d] p-5 rounded-lg border border-white/5 hover:border-indigo-500/50 hover:bg-[#353535] transition-all cursor-pointer flex flex-col items-center text-center group"
            onClick={() => openWindow(game.id)}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {game.icon}
            </div>
            <h3 className="text-sm font-bold text-gray-200 mb-1">{game.name}</h3>
            <p className="text-[11px] text-gray-500 font-medium mb-3">{game.desc}</p>
            <div className="px-3 py-1 bg-white/5 group-hover:bg-indigo-600/20 text-xs font-semibold text-gray-400 group-hover:text-indigo-400 rounded-md border border-white/5 group-hover:border-indigo-500/30 transition-all">
              Launch
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameLauncher;
