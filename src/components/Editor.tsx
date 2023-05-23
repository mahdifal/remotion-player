import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useLocalStorage from '../hooks/useLocalStorage';
import { cleanHTML } from '../utils/HTMLUtils';

interface Props {
  onPauseVideo: () => void;
  onPlayVideo: () => void;
}

const Editor = ({ onPauseVideo, onPlayVideo }: Props) => {
  const [editableText, setEditableText] = useLocalStorage<string>('editable_editor', '<p>This Text is Editabel</p>');

  const [editMode, setEditMode] = useState(false);

  const handlePause = () => {
    setEditMode(!editMode);
    onPauseVideo();
  };

  const handlePlay = () => {
    setEditMode(!editMode);
    onPlayVideo();
  };

  return !editMode ? (
    <div className="editor-box text-editable" data-testid="ckeditor">
      <div dangerouslySetInnerHTML={cleanHTML(editableText)} onClick={handlePause} />
    </div>
  ) : (
    <div className="editor-box" data-testid="ckeditor">
      <CKEditor
        editor={ClassicEditor}
        data={editableText}
        onChange={(_event, editor: ClassicEditor) => {
          const data = editor.getData();
          setEditableText(data);
        }}
        onFocus={() => {
          onPauseVideo();
        }}
        config={{
          toolbar: {
            items: ['heading', '|', 'bold', 'italic', 'underline', 'link', '|', 'undo', 'redo'],
            shouldNotGroupWhenFull: true,
          },
        }}
      />
      <button className="play-button play-button-positon" onClick={handlePlay} />
    </div>
  );
};

export default Editor;
