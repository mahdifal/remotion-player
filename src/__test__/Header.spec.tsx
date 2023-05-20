import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders the header component with the correct text', () => {
    const { getByText } = render(<Header />);
    const headerText = getByText('Video Player with Editable Text');
    expect(headerText).toBeInTheDocument();
  });

  test('renders the header component with the correct styles', () => {
    const { getByTestId } = render(<Header />);
    const headerCol = getByTestId('header-col');
    expect(headerCol).toHaveClass('d-flex justify-content-center align-items-center bg-info rounded-2');
  });
});
