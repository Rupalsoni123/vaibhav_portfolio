import React, { useRef, useCallback } from 'react';
import { useOS } from './OSContext';

const Window = ({ window: win, isActive, children }) => {
  const { 
    closeWindow, 
    minimizeWindow, 
    toggleMaximize, 
    focusWindow, 
    setSnapPreview, 
    handleSnapWindow 
  } = useOS();
  const dragRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    if (!e.target.closest('.os-window__titlebar')) return;
    if (win.isMinimized || win.isMaximized) return;
    
    e.preventDefault();
    focusWindow(win.id);

    const startX = e.clientX - win.position.x;
    const startY = e.clientY - win.position.y;
    let currentSnap = null;

    const onMove = (moveE) => {
      const newX = moveE.clientX - startX;
      const newY = moveE.clientY - startY;

      // Handle Snapping Previews
      if (moveE.clientY < 40) {
        currentSnap = 'TOP';
        setSnapPreview({ type: 'TOP' });
      } else if (moveE.clientX < 40) {
        currentSnap = 'LEFT';
        setSnapPreview({ type: 'LEFT' });
      } else if (moveE.clientX > window.innerWidth - 40) {
        currentSnap = 'RIGHT';
        setSnapPreview({ type: 'RIGHT' });
      } else {
        currentSnap = null;
        setSnapPreview(null);
      }

      // We don't use updateWindowPosition here to avoid state overhead if we can do direct DOM, 
      // but for React and our Z-index system, we'll stick to OS context.
      // Actually, we'll update position in the ref for smooth drag, then sync on up would be better,
      // but the user wants "REAL OS FEEL", so immediate state is fine if optimized.
      if (dragRef.current) {
        dragRef.current.style.left = `${newX}px`;
        dragRef.current.style.top = `${newY}px`;
      }
    };

    const onUp = (upE) => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      
      const finalX = upE.clientX - startX;
      const finalY = upE.clientY - startY;

      if (currentSnap) {
        handleSnapWindow(win.id, currentSnap);
      } else {
        // Just Update Position
        // Sync final position back to React state
        win.position = { x: finalX, y: finalY }; 
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [win, focusWindow, setSnapPreview, handleSnapWindow]);

  const windowClasses = [
    'os-window',
    isActive ? 'os-window--active' : 'os-window--inactive',
    win.isMinimized ? 'os-window--minimized' : '',
    win.isMaximized ? 'os-window--maximized' : ''
  ].join(' ');

  return (
    <div
      ref={dragRef}
      className={windowClasses}
      style={{
        left: win.isMaximized ? 0 : win.position.x,
        top: win.isMaximized ? 0 : win.position.y,
        width: win.isMaximized ? '100vw' : win.size.width,
        height: win.isMaximized ? 'calc(100vh - 32px)' : win.size.height,
        zIndex: win.zIndex,
      }}
      onMouseDown={() => focusWindow(win.id)}
    >
      {/* Title bar */}
      <div 
        className="os-window__titlebar" 
        onMouseDown={handleMouseDown}
        onDoubleClick={() => toggleMaximize(win.id)}
      >
        <div className="os-window__controls">
          <button
            className="os-window__btn os-window__btn--close cursor-pointer"
            onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }}
          />
          <button
            className="os-window__btn os-window__btn--minimize cursor-pointer"
            onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id); }}
          />
          <button
            className="os-window__btn os-window__btn--maximize cursor-pointer"
            onClick={(e) => { e.stopPropagation(); toggleMaximize(win.id); }}
          />
        </div>
        <div className="os-window__title">
          {win.title}
        </div>
      </div>

      {/* Content */}
      <div className="os-window__body custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default Window;
