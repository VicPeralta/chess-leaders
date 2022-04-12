import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header rendering', () => {
  render(<Header />);
  const chessTitle = screen.getByText(/chess.com/i);
  expect(chessTitle).toBeInTheDocument();
});
