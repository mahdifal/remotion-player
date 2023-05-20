import DraggableComponent from './Draggable';
import Editor from './Editor';
import { VidepProps } from './Video';

export const EditableText = ({ playVideo, pauseVideo }: VidepProps) => {
  return (
    <DraggableComponent onPauseVideo={pauseVideo} playButton={<button className="button" onClick={playVideo}></button>}>
      <Editor onPauseVideo={pauseVideo} />
    </DraggableComponent>
  );
};
