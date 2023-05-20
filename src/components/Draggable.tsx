import React, { useState, MouseEvent, ReactElement } from 'react';

interface DraggableComponentProps {
  onPauseVideo: () => void;
  playButton: ReactElement;
  children: React.ReactNode;
}

const DraggableComponent = ({ children, onPauseVideo, playButton }: DraggableComponentProps) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
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

  return (
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
      {playButton}
      {children}
    </div>
  );
};

export default DraggableComponent;
