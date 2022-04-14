import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../../Redux/configureStore';
import LeaderBoard from './LeaderBoard';

jest.mock('../../Redux/chessLeaders/chess.js');
describe('LeaderBoard component test', () => {
  const element = (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/leaderboard/0']}>
        <Routes>
          <Route path="/leaderboard" element={<LeaderBoard />}>
            <Route path=":index" element={<LeaderBoard />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  test('Render LeaderBoard', () => {
    render(element);
    const card = screen.getByText(/Special category/);
    expect(card).toBeInTheDocument();
  });
  test('LeaderBoard snapshot', () => {
    const leader = renderer.create(element);
    expect(leader).toMatchSnapshot();
  });
});
