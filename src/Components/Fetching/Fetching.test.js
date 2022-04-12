import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Fetching from './Fetching';

describe('Fetching Component testing', () => {
  test('Fetching rendering', () => {
    render(<Fetching />);
    const text = screen.getByText(/Retrieving data/i);
    expect(text).toBeInTheDocument();
  });
  test('Fetching Snapshot', () => {
    const fetching = renderer.create(<Fetching />);
    expect(fetching).toMatchSnapshot();
  });
});
