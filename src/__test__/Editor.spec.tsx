import { render } from '@testing-library/react';
import Editor from '../components/Editor';
import { vi } from 'vitest';

describe('Editor', () => {
  it('should render the CKEditor component', () => {
    const onPauseVideo = vi.fn();
    const { getByTestId } = render(<Editor onPauseVideo={onPauseVideo} />);
    const editorElement = getByTestId('ckeditor');
    expect(editorElement).toBeInTheDocument();
  });
});
