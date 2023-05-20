import { render } from '@testing-library/react';
import { Title } from '../components/Title';

describe('Title', () => {
  test('renders the title component with the correct text', () => {
    const titleText = 'Sample Title';
    const { getByText } = render(<Title titleText={titleText} />);
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the title component with the correct styles', () => {
    const titleText = 'Sample Title';
    const { getByText } = render(<Title titleText={titleText} />);
    const titleElement = getByText(titleText);
    expect(titleElement).toHaveStyle(`
      font-family: SF Pro Text, Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 60px;
      text-align: center;
      position: absolute;
      top: 180px;
      width: 100%;
    `);
  });
});
