import React, { useState, MouseEvent, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface DraggableComponentProps {
  onPauseVideo?: () => void;
  children: React.ReactNode;
}

const DraggableComponent = ({ children, onPauseVideo }: DraggableComponentProps) => {
  const [position, setPosition] = useLocalStorage<{ x: number; y: number }>('position', { x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position?.x,
      y: event.clientY - position?.y,
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (onPauseVideo) onPauseVideo();
    setPosition({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      // Reset the position if it goes off-screen on window resize
      const { innerWidth, innerHeight } = window;
      setPosition((prevPosition) => ({
        x: Math.min(prevPosition.x, innerWidth),
        y: Math.min(prevPosition.y, innerHeight),
      }));
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setPosition]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        data-testid="draggable-component"
      >
        {children}
      </div>
    </>
  );
};

export default DraggableComponent;
