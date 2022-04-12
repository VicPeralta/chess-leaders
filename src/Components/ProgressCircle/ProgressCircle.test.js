import { render, screen } from '@testing-library/react';
import ProgressCircle from './ProgressCircle';

test('Rendering ProgressCircle', () => {
  render(<ProgressCircle />);
  const circle = screen.getByTestId('circle-element');
  expect(circle).toBeInTheDocument();
});
