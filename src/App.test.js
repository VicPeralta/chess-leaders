import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from './Redux/configureStore';
import App from './App';

test('renders learn react link', () => {
  const element = (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
  render(element);
  const linkElement = screen.getByTestId('app-element');
  expect(linkElement).toBeInTheDocument();
});
