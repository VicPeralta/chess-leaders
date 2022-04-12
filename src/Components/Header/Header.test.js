import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header component test', () => {
  test('Header rendering', () => {
    render(<Header />);
    const chessTitle = screen.getByText(/chess.com/i);
    expect(chessTitle).toBeInTheDocument();
  });

  test('Header snapshot', () => {
    const header = renderer.create(<Header />);
    expect(header).toMatchSnapshot();
  });
});
