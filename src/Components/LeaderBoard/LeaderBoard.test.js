import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../../Redux/configureStore';
import LeaderBoard from './LeaderBoard';
import { getChessDataSuccess } from '../../Redux/chessLeaders/chess';

describe('LeaderBoard component test', () => {
  const element = (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/leaderboard/1']}>
        <Routes>
          <Route path="/leaderboard" element={<LeaderBoard />}>
            <Route path=":index" element={<LeaderBoard />} />
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
          rank: 2,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
      ],
      average: 2538.5,
    },
  ];
  test('LeaderBoard snapshot', () => {
    store.dispatch(getChessDataSuccess(chessData));
    const leader = renderer.create(element);
    expect(leader).toMatchSnapshot();
  });
});
