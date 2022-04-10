import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer, { getChessData } from './chessLeaders/chess';

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getChessData());
export default store;
