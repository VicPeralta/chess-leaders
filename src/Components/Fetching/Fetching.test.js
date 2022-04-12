import { render, screen } from '@testing-library/react';
import Fetching from './Fetching';

test('Fetching rendering', () => {
  render(<Fetching />);
  const text = screen.getByText(/Retrieving data/i);
  expect(text).toBeInTheDocument();
});
