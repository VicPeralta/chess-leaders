const GETCHESSDATABEGIN = 'chessLeaders/chess/GETCHESSDATABEGIN';
const GETCHESSDATASUCCESS = 'chessLeaders/chess/GETCHESSDATASUCCESS';
const GETCHESSDATAFAILURE = 'chessLeaders/chess/GETCHESSDATAFAILURE';
const GETPLAYERDATABEGIN = 'chessLeaders/chess/GETPLAYERDATABEGIN';
const GETPLAYERDATASUCCESS = 'chessLeaders/chess/GETPLAYERDATASUCCESS';
const GETPLAYERDATAFAILURE = 'chessLeaders/chess/GETPLAYERDATAFAILURE';
const CHESS_DATA_URL = 'https://api.chess.com/pub/leaderboards';
const PLAYER_DATA_URL = ' https://api.chess.com/pub/player/';
const INITIAL_STATE = {
  chessData: [],
  playerData: [],
  fetching: false,
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

function topTen(name, index, category) {
  const result = [];
  let average = 0;
  for (let index = 0; index < 10; index += 1) {
    result.push(category[index]);
    average += category[index].score;
  }
  average /= 10;
  return {
    id: index,
    name,
    data: result,
    average,
  };
}

export function getChessData() {
  return (dispatch) => {
    const url = `${CHESS_DATA_URL}`;
    dispatch(getChessDataBegin());
    fetch(url).then((response) => (
      response.json().then((json) => {
        const chessData = [];
        let index = 0;
        // eslint-disable-next-line no-restricted-syntax
        for (const category in json) {
          if (Object.hasOwnProperty.call(json, category)) {
            chessData.push(topTen(category, index, json[category]));
            index += 1;
          }
        }
        dispatch(getChessDataSuccess(chessData));
      }))).catch(() => dispatch(getChessDataFailure()));
  };
}

export function getPlayerData(player) {
  return (dispatch) => {
    const url = `${PLAYER_DATA_URL}${player}`;
    dispatch(getPlayerDataBegin());
    fetch(url).then((response) => (
      response.json().then((json) => {
        dispatch(getPlayerDataSuccess(json));
      })
    )).catch(() => dispatch(getPlayerDataFailure()));
  };
}
