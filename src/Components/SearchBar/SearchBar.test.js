import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import store from '../../Redux/configureStore';

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
