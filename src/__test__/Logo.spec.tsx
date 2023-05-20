import { render } from '@testing-library/react';
import Logo from '../components/Logo';

describe('Logo', () => {
  test('renders the logo component with the correct image source', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('React logo');
    expect(logoImage).toHaveAttribute('src', '/src/assets/react.svg');
  });

  test('renders the logo component with the correct styles', () => {
    const { getByTestId } = render(<Logo />);
    const logoBox = getByTestId('logo-box');
    const logoImage = getByTestId('logo-image');
    expect(logoBox).toHaveStyle('text-align: center; width: 100%');
    expect(logoImage).toHaveStyle('width: 200px');
  });
});
