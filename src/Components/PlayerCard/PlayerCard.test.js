import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../../Redux/configureStore';
import PlayerCard from './PlayerCard';

jest.mock('../../Redux/chessLeaders/chess.js');
describe('PlayerCard component test', () => {
  const element = (
    <MemoryRouter initialEntries={['/playerCard/VicPeralta/0']}>
      <Provider store={store}>
        <Routes>
          <Route path="/playerCard" element={<PlayerCard />}>
            <Route path=":username/:index" element={<PlayerCard />} />
          </Route>
        </Routes>
      </Provider>
    </MemoryRouter>
  );
  test('Render PlayerCard', () => {
    render(element);
    const playerName = screen.getByText(/Peralta, Victor/);
    expect(playerName).toBeInTheDocument();
  });

  test('PlayerCard snapshot', () => {
    const player = renderer.create(element);
    expect(player).toMatchSnapshot();
  });
});
