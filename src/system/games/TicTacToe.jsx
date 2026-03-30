import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (!squares.includes(null)) return { winner: 'Draw', line: [] };
    return null;
  };

  const result = calculateWinner(board);
  const winner = result?.winner;
  const winningLine = result?.line || [];

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="os-xo w-full h-full flex flex-col items-center justify-center p-6 bg-gray-900 text-white font-mono">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <span className="text-blue-400">Tic</span>
        <span className="text-pink-500">Tac</span>
        <span className="text-green-400">Toe</span>
      </h2>

      <div className="text-xl mb-6">
        {winner === 'Draw' 
          ? "It's a Draw!" 
          : winner 
            ? `Winner: ${winner}` 
            : `Next player: ${isXNext ? 'X' : 'O'}`}
      </div>

      <div className="grid grid-cols-3 gap-2 bg-gray-700 p-2 rounded-xl shadow-2xl shadow-blue-500/20">
        {board.map((cell, index) => {
          const isWinningCell = winningLine.includes(index);
          return (
            <button
              key={index}
              className={`w-24 h-24 text-5xl flex items-center justify-center rounded-lg transition-all transform
                ${cell === null && !winner ? 'hover:bg-gray-600 active:scale-95' : ''}
                ${isWinningCell ? 'bg-green-600/50 scale-105 shadow-lg shadow-green-500/50' : 'bg-gray-800'}
                ${cell === 'X' ? 'text-blue-400' : 'text-pink-500'}
              `}
              onClick={() => handleClick(index)}
              disabled={cell !== null || !!winner}
            >
              {cell}
            </button>
          );
        })}
      </div>

      <button 
        className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-transform active:scale-95 flex items-center gap-2"
        onClick={resetGame}
      >
        <span>🔄</span> Play Again
      </button>
    </div>
  );
};

export default TicTacToe;
