import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../../Redux/configureStore';
import PlayerCard from './PlayerCard';
import { getChessDataSuccess, getPlayerDataSuccess } from '../../Redux/chessLeaders/chess';

describe('PlayerCard component test', () => {
  const element = (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/playerCard/victor/1']}>
        <Routes>
          <Route path="/playerCard" element={<PlayerCard />}>
            <Route path=":username/:index" element={<PlayerCard />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const chessData = [
    {
      id: 0,
      name: 'daily',
      data: [
        {
          avatar: '',
          name: 'Victor',
          username: 'victor',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
        {
          avatar: '',
          name: 'Victor',
          username: 'victor',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
      ],
      average: 2538.5,
    },
    {
      id: 1,
      name: 'daily',
      data: [
        {
          avatar: '',
          name: 'Victor',
          username: 'victor',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
        {
          avatar: '',
          name: 'Victor',
          username: 'victor',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
      ],
      average: 2538.5,
    },
  ];
  const playerData = {
    name: 'Victor Peralta',
    username: 'victor',
    title: 'GM',
    location: 'Mexico',
  };
  test('PlayerCard snapshot', () => {
    store.dispatch(getChessDataSuccess(chessData));
    store.dispatch(getPlayerDataSuccess(playerData));
    const leader = renderer.create(element);
    expect(leader).toMatchSnapshot();
  });
});
