import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
  onPauseVideo: () => void;
  onPlayVideo: () => void;
}

const Editor = ({ onPauseVideo, onPlayVideo }: Props) => {
  const [editableText, setEditableText] = useLocalStorage<string>('editable editor', '<p>This text is editable</p>');

  return (
    <div style={{ width: '400px', height: '100px' }}>
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
    </div>
  );
};

export default Editor;
