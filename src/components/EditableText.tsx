import DraggableComponent from './Draggable';
import Editor from './Editor';
import { VidepProps } from './Video';

export const EditableText = ({ playVideo, pauseVideo }: VidepProps) => {
  return (
    <DraggableComponent onPauseVideo={pauseVideo}>
      <Editor onPauseVideo={pauseVideo} onPlayVideo={playVideo} />
    </DraggableComponent>
  );
};
