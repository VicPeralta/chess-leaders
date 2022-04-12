import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../Redux/configureStore';
import CategoryList from './CategoryList';
import { getChessDataSuccess } from '../../Redux/chessLeaders/chess';

describe('CategoryList Component Test', () => {
  test('Rendering CategoryList Success', () => {
    const element = (
      <Provider store={store}>
        <HashRouter>
          <CategoryList />
        </HashRouter>
      </Provider>
    );
    const chessData = [
      {
        id: 0, name: 'daily', data: Array(10), average: 2538.5,
      },
      {
        id: 1, name: 'daily960', data: Array(10), average: 2538.5,
      },
    ];
    store.dispatch(getChessDataSuccess(chessData));
    const list = renderer.create(element);
    expect(list).toMatchSnapshot();
  });

  test('Rendering CategoryList Fetching', () => {
    const element = (
      <Provider store={store}>
        <HashRouter>
          <CategoryList />
        </HashRouter>
      </Provider>
    );
    const list = renderer.create(element);
    expect(list).toMatchSnapshot();
  });
});
