import React, { useState, useEffect, useCallback, useRef } from 'react';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 24;

const SHAPES = [
  // I
  { shape: [[1, 1, 1, 1]], color: 'bg-cyan-500' },
  // J
  { shape: [[1, 0, 0], [1, 1, 1]], color: 'bg-blue-500' },
  // L
  { shape: [[0, 0, 1], [1, 1, 1]], color: 'bg-orange-500' },
  // O
  { shape: [[1, 1], [1, 1]], color: 'bg-yellow-400' },
  // S
  { shape: [[0, 1, 1], [1, 1, 0]], color: 'bg-green-500' },
  // T
  { shape: [[0, 1, 0], [1, 1, 1]], color: 'bg-purple-500' },
  // Z
  { shape: [[1, 1, 0], [0, 1, 1]], color: 'bg-red-500' }
];

const createEmptyGrid = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const checkCollision = (grid, piece, pos) => {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c]) {
        const nr = pos.y + r;
        const nc = pos.x + c;
        if (nr >= ROWS || nc < 0 || nc >= COLS || (nr >= 0 && grid[nr][nc])) {
          return true;
        }
      }
    }
  }
  return false;
};

const Tetris = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [currentPiece, setCurrentPiece] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const boardRef = useRef(null);

  const spawnPiece = useCallback(() => {
    const randomIdx = Math.floor(Math.random() * SHAPES.length);
    const piece = SHAPES[randomIdx];
    const newPos = { x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2), y: 0 };
    
    if (checkCollision(grid, piece.shape, newPos)) {
      setGameOver(true);
      setIsPlaying(false);
    } else {
      setCurrentPiece(piece);
      setPos(newPos);
    }
  }, [grid]);

  const mergePiece = useCallback(() => {
    if (!currentPiece) return;
    
    const newGrid = grid.map(row => [...row]);
    currentPiece.shape.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          const nr = pos.y + r;
          const nc = pos.x + c;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
              newGrid[nr][nc] = currentPiece.color;
          }
        }
      });
    });

    // clear lines
    let clearedLines = 0;
    const filteredGrid = newGrid.filter(row => row.some(cell => cell === 0));
    clearedLines = ROWS - filteredGrid.length;
    
    const emptyLines = Array.from({ length: clearedLines }, () => Array(COLS).fill(0));
    const finalGrid = [...emptyLines, ...filteredGrid];
    
    setGrid(finalGrid);
    if (clearedLines > 0) {
        setScore(s => s + (clearedLines * 100));
    }
    
    spawnPiece();
  }, [currentPiece, grid, pos, spawnPiece]);

  const moveDown = useCallback(() => {
    if (!currentPiece || gameOver || !isPlaying) return;
    
    const newPos = { ...pos, y: pos.y + 1 };
    if (!checkCollision(grid, currentPiece.shape, newPos)) {
      setPos(newPos);
    } else {
      mergePiece();
    }
  }, [currentPiece, gameOver, isPlaying, grid, pos, mergePiece]);

  // Game Loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const speed = Math.max(100, 800 - (Math.floor(score / 500) * 100));
    const interval = setInterval(moveDown, speed);
    return () => clearInterval(interval);
  }, [isPlaying, gameOver, moveDown, score]);

  const handleKeyDown = (e) => {
    if (!isPlaying || gameOver || !currentPiece) return;
    e.preventDefault();

    if (e.key === 'ArrowLeft') {
      const newPos = { ...pos, x: pos.x - 1 };
      if (!checkCollision(grid, currentPiece.shape, newPos)) setPos(newPos);
    } else if (e.key === 'ArrowRight') {
      const newPos = { ...pos, x: pos.x + 1 };
      if (!checkCollision(grid, currentPiece.shape, newPos)) setPos(newPos);
    } else if (e.key === 'ArrowDown') {
      moveDown();
    } else if (e.key === 'ArrowUp') {
      // Rotate
      const rotated = currentPiece.shape[0].map((_, i) => 
        currentPiece.shape.map(row => row[i]).reverse()
      );
      if (!checkCollision(grid, rotated, pos)) {
        setCurrentPiece({ ...currentPiece, shape: rotated });
      }
    }
  };

  const startGame = () => {
    setGrid(createEmptyGrid());
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    spawnPiece();
    boardRef.current?.focus();
  };

  // Render Display Grid (Merged + Current Piece)
  const displayGrid = grid.map(row => [...row]);
  if (currentPiece && isPlaying) {
    currentPiece.shape.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          const nr = pos.y + r;
          const nc = pos.x + c;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
            displayGrid[nr][nc] = currentPiece.color;
          }
        }
      });
    });
  }

  return (
    <div 
        className="os-tetris flex items-center justify-center h-full bg-gray-950 font-mono outline-none p-4"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={boardRef}
    >
      <div className="flex gap-8 items-start">
        {/* Board */}
        <div 
            className="bg-gray-900 border-2 border-indigo-500/50 p-1 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            style={{ 
                display: 'grid', 
                gridTemplateRows: `repeat(${ROWS}, ${BLOCK_SIZE}px)`,
                gridTemplateColumns: `repeat(${COLS}, ${BLOCK_SIZE}px)`,
                gap: '1px'
            }}
        >
          {displayGrid.flatMap((row, r) => 
            row.map((cell, c) => (
              <div 
                key={`${r}-${c}`}
                className={`${cell || 'bg-gray-800'} rounded-sm`}
                style={{
                   width: BLOCK_SIZE,
                   height: BLOCK_SIZE,
                   boxShadow: cell ? 'inset 0 0 10px rgba(0,0,0,0.5)' : 'none'
                }}
              />
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 text-indigo-400">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🧩</span> TETRIS
            </h2>
            <div className="h-0.5 w-full bg-indigo-500/50 mb-4"></div>
            <div className="text-xl">SCORE</div>
            <div className="text-3xl font-bold text-white mb-2">{score}</div>
          </div>

          <div className="text-sm text-gray-400">
            <div className="mb-2 uppercase font-bold text-indigo-500">Controls:</div>
            <div>← → : Move</div>
            <div>↑ : Rotate</div>
            <div>↓ : Drop Faster</div>
          </div>

          <button 
            onClick={startGame}
            className="mt-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded transition-colors uppercase w-full"
          >
            {gameOver ? 'Try Again' : isPlaying ? 'Restart' : 'Start Play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tetris;
