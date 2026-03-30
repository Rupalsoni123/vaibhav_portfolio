import React, { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const boardRef = useRef(null);

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      
      const isSnakePart = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!isSnakePart) break;
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection(DIRECTIONS.ArrowRight);
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
    boardRef.current?.focus();
  };

  const checkCollision = (head) => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
  };

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const currentSpeed = Math.max(50, INITIAL_SPEED - (score * 2));
    
    const moveSnake = () => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        head.x += direction.x;
        head.y += direction.y;

        if (checkCollision(head)) {
          setGameOver(true);
          setIsPlaying(false);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
            setScore(s => s + 10);
            setFood(generateFood());
        } else {
            newSnake.pop();
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, currentSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, gameOver, direction, food, score, generateFood]);

  const handleKeyDown = (e) => {
    if (DIRECTIONS[e.key]) {
      e.preventDefault();
      
      const newDir = DIRECTIONS[e.key];
      // Prevent reversing
      if (
        (newDir.x !== 0 && newDir.x === -direction.x) ||
        (newDir.y !== 0 && newDir.y === -direction.y)
      ) {
        return;
      }
      setDirection(newDir);
    }
  };

  useEffect(() => {
    if (isPlaying) {
        boardRef.current?.focus();
    }
  }, [isPlaying]);

  return (
    <div 
        className="os-snake flex flex-col items-center justify-center h-full bg-gray-950 outline-none" 
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={boardRef}
    >
      <div className="w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-4 text-green-400 font-mono">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>🐍</span> SNAKE
          </h2>
          <div className="text-xl">SCORE: {score}</div>
        </div>

        <div 
            className="grid bg-gray-900 border-2 border-green-500/50 rounded shadow-[0_0_15px_rgba(34,197,94,0.3)] mx-auto relative overflow-hidden"
            style={{ 
                gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                aspectRatio: '1/1',
            }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
            const x = idx % GRID_SIZE;
            const y = Math.floor(idx / GRID_SIZE);
            
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            const bgClass = isHead ? 'bg-green-400 z-10 rounded-sm shadow-[0_0_10px_#4ade80]' 
                   : isSnake ? 'bg-green-600/80 rounded-sm' 
                   : isFood ? 'bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse' 
                   : 'bg-transparent';

            return (
              <div 
                key={idx} 
                className={bgClass}
                style={{ width: '100%', paddingBottom: '100%' }} // Square cells
              />
            );
          })}

          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-20">
                <button 
                  onClick={resetGame}
                  className="px-6 py-2 border-2 border-green-500 text-green-400 font-mono font-bold rounded hover:bg-green-500 hover:text-black transition-colors"
                >
                  START GAME
                </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 bg-red-950/80 flex flex-col items-center justify-center backdrop-blur-sm z-20 font-mono">
                <div className="text-4xl text-red-500 font-bold mb-2">GAME OVER</div>
                <div className="text-xl text-green-400 mb-6">FINAL SCORE: {score}</div>
                <button 
                  onClick={resetGame}
                  className="px-6 py-2 border-2 border-green-500 text-green-400 font-bold rounded hover:bg-green-500 hover:text-black transition-colors"
                >
                  TRY AGAIN
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Snake;
