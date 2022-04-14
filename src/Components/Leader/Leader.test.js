import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../Redux/configureStore';
import Leader from './Leader';

jest.mock('../../Redux/chessLeaders/chess.js');
describe('Leader component test', () => {
  const element = (
    <Provider store={store}>
      <HashRouter>
        <Leader index={1} rank={1} username="Victor" />
      </HashRouter>
    </Provider>
  );
  test('Leader snapshot', () => {
    const leader = renderer.create(element);
    expect(leader).toMatchSnapshot();
  });
  test('Render Leader', () => {
    render(element);
    const leader = screen.getByText(/Victor/i);
    expect(leader).toBeInTheDocument();
  });
});
