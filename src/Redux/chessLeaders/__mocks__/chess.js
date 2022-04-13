const GETCHESSDATABEGIN = 'chessLeaders/chess/GETCHESSDATABEGIN';
const GETCHESSDATASUCCESS = 'chessLeaders/chess/GETCHESSDATASUCCESS';
const GETCHESSDATAFAILURE = 'chessLeaders/chess/GETCHESSDATAFAILURE';
const GETPLAYERDATABEGIN = 'chessLeaders/chess/GETPLAYERDATABEGIN';
const GETPLAYERDATASUCCESS = 'chessLeaders/chess/GETPLAYERDATASUCCESS';
const GETPLAYERDATAFAILURE = 'chessLeaders/chess/GETPLAYERDATAFAILURE';
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
const playerData = {
  name: 'Victor Peralta',
  username: 'VicPeralta',
  title: 'GM',
  location: 'Mexico',
};
export function getChessDataBegin() {
  return {
    type: GETCHESSDATABEGIN,
  };
}

export function getPlayerDataBegin() {
  return {
    type: GETPLAYERDATABEGIN,
  };
}

export function getPlayerDataFailure() {
  return {
    type: GETPLAYERDATAFAILURE,
  };
}

export function getPlayerDataSuccess(data) {
  return {
    type: GETPLAYERDATASUCCESS,
    payload: data,
  };
}

export function getChessDataFailure() {
  return {
    type: GETCHESSDATAFAILURE,
  };
}

export function getChessDataSuccess(data) {
  return {
    type: GETCHESSDATASUCCESS,
    payload: data,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETCHESSDATABEGIN:
    case GETPLAYERDATABEGIN:
      return {
        ...state,
        fetching: true,
      };
    case GETPLAYERDATAFAILURE:
    case GETCHESSDATAFAILURE:
      return {
        ...state,
        fetching: false,
      };
    case GETCHESSDATASUCCESS:
      return {
        ...state,
        chessData: action.payload,
        fetching: false,
      };
    case GETPLAYERDATASUCCESS:
      return {
        ...state,
        playerData: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}

export function getPlayerData() {
  return (dispatch) => {
    dispatch(getPlayerDataBegin());
    dispatch(getPlayerDataSuccess(playerData));
  };
}

export function getChessData() {
  return (dispatch) => {
    dispatch(getChessDataBegin());
    dispatch(getChessDataSuccess(chessData));
  };
}
