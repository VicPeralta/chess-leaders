import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';
import store from '../../Redux/configureStore';

describe('SearchBar Component test', () => {
  test('Rendering SearchBar', () => {
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
    render(element);
    const bar = screen.getByTestId('searchBar-element');
    expect(bar).toBeInTheDocument();
  });
  test('SearchBar snapshot', () => {
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
    const bar = renderer.create(element);
    expect(bar).toMatchSnapshot();
  });
});
