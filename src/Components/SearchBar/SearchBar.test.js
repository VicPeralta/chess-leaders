import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';
import store from '../../Redux/configureStore';

jest.mock('../../Redux/chessLeaders/chess.js');
describe('SearchBar Component test', () => {
  const dummy = () => { };
  const element = (
    <Provider store={store}>
      <HashRouter>
        <SearchBar
          searchHandler={dummy}
          backText="Home"
          backPath="/"
          searchText="Here"
        />
      </HashRouter>
    </Provider>
  );
  test('Rendering SearchBar', () => {
    render(element);
    const bar = screen.getByTestId('searchBar-element');
    expect(bar).toBeInTheDocument();
  });
  test('SearchBar snapshot', () => {
    const bar = renderer.create(element);
    expect(bar).toMatchSnapshot();
  });
});
