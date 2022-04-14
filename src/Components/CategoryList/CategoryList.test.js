import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../Redux/configureStore';
import CategoryList from './CategoryList';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import PlayerCard from '../PlayerCard/PlayerCard';

jest.mock('../../Redux/chessLeaders/chess.js');

describe('CategoryList Component Test', () => {
  const element = (
    <MemoryRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/leaderboard" element={<LeaderBoard />}>
            <Route path=":index" element={<LeaderBoard />} />
          </Route>
          <Route path="/playerCard" element={<PlayerCard />}>
            <Route path=":username/:index" element={<PlayerCard />} />
          </Route>
        </Routes>
      </Provider>
    </MemoryRouter>
  );
  test('Match Snapshot', () => {
    const list = renderer.create(element);
    expect(list).toMatchSnapshot();
  });
  test('Render correctly', () => {
    render(element);
    const list = screen.getByText(/Special category/);
    expect(list).toBeInTheDocument();
  });
  test('User interaction', () => {
    render(element);
    // The second link is the first card
    const card = screen.getAllByRole('link')[1];
    expect(card).toBeInTheDocument();
    // From the category list, navigates to leaderboard
    userEvent.click(card);
    // The list of players includes VicPeralta & kasparov
    expect(screen.getByText(/VicPeralta/)).toBeInTheDocument();
    expect(screen.getByText(/kasparov/)).toBeInTheDocument();
  });
});
