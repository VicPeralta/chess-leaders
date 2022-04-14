import reducer, {
  getChessDataBegin,
  getChessDataFailure,
  getChessDataSuccess,
  getPlayerDataBegin,
  getPlayerDataFailure,
  getPlayerDataSuccess,
} from './chess';

describe('Chess reducer test', () => {
  const INITIAL_STATE = {
    chessData: [],
    playerData: [],
    fetching: false,
  };
  const chessData = [
    {
      id: 0,
      name: 'Special category',
      data: [
        {
          avatar: '',
          name: 'Peralta, Victor',
          username: 'VicPeralta',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
        {
          avatar: '',
          name: 'Kasparov, Gary',
          username: 'kasparov',
          title: 'GM',
          location: 'Russia',
          rank: 2,
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
          name: 'Perala, Victor',
          username: 'VicPeralta',
          title: 'GM',
          location: 'Mexico',
          rank: 1,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
        {
          avatar: '',
          name: 'Kasparov, Gary',
          username: 'kasparov',
          title: 'GM',
          location: 'Russia',
          rank: 2,
          win_count: 0,
          loss_count: 0,
          draw_count: 0,
        },
      ],
      average: 0.5,
    },
  ];
  test('getChessDataBegin', () => {
    const newState = reducer(INITIAL_STATE, getChessDataBegin());
    expect(newState.fetching).toBeTruthy();
  });
  test('getChessDataFailure', () => {
    const newState = reducer(INITIAL_STATE, getChessDataFailure());
    expect(newState.fetching).toBeFalsy();
  });
  test('getChessDataSuccess', () => {
    const newState = reducer(INITIAL_STATE, getChessDataSuccess(chessData));
    expect(newState.fetching).toBeFalsy();
    expect(newState.chessData.length).toBe(2);
  });
  test('getPlayerDataBegin', () => {
    const newState = reducer(INITIAL_STATE, getPlayerDataBegin());
    expect(newState.fetching).toBeTruthy();
  });
  test('getPlayerDataFailure', () => {
    const newState = reducer(INITIAL_STATE, getPlayerDataFailure());
    expect(newState.fetching).toBeFalsy();
  });
  test('getPlayerDataSuccess', () => {
    const playerData = {
      name: 'Victor Peralta',
      username: 'VicPeralta',
      title: 'GM',
      location: 'Mexico',
    };
    const newState = reducer(INITIAL_STATE, getPlayerDataSuccess(playerData));
    expect(newState.fetching).toBeFalsy();
    expect(newState.playerData.name).toBe('Victor Peralta');
  });
});
