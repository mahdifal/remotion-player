import { render, fireEvent } from '@testing-library/react';
import DraggableComponent from '../components/Draggable';
import { vi } from 'vitest';

describe('DraggableComponent', () => {
  test('renders the draggable component with children and play button', () => {
    const mockOnPauseVideo = vi.fn();
    const playButton = <button>Play</button>;
    const children = <div>Content</div>;

    const { getByText, getByTestId } = render(
      <DraggableComponent onPauseVideo={mockOnPauseVideo} playButton={playButton}>
        {children}
      </DraggableComponent>,
    );

    const draggableComponent = getByTestId('draggable-component');
    const playButtonElement = getByText('Play');
    const childrenElement = getByText('Content');

    expect(draggableComponent).toBeInTheDocument();
    expect(playButtonElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  test('triggers the onMouseDown, onMouseMove, and onMouseUp events correctly', () => {
    const mockOnPauseVideo = vi.fn();
    const playButton = <button>Play</button>;
    const children = <div>Content</div>;

    const { getByTestId } = render(
      <DraggableComponent onPauseVideo={mockOnPauseVideo} playButton={playButton}>
        {children}
      </DraggableComponent>,
    );

    const draggableComponent = getByTestId('draggable-component');

    fireEvent.mouseDown(draggableComponent);
    expect(draggableComponent.style.cursor).toBe('grabbing');

    fireEvent.mouseMove(draggableComponent);
    expect(mockOnPauseVideo).toHaveBeenCalled();

    fireEvent.mouseUp(draggableComponent);
    expect(draggableComponent.style.cursor).toBe('grab');
  });
});
