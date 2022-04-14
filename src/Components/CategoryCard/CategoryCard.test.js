import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../Redux/configureStore';
import CategoryCard from './CategoryCard';

jest.mock('../../Redux/chessLeaders/chess.js');
describe('CategoryCard Componente test', () => {
  const element = (
    <Provider store={store}>
      <HashRouter>
        <CategoryCard id={1} name="Blitz" average={2000} />
      </HashRouter>
    </Provider>
  );
  test('Render CategoryCard', () => {
    render(element);
    const card = screen.getByText(/Blitz/i);
    expect(card).toBeInTheDocument();
  });
  test('CategoryCard snapshot', () => {
    const card = renderer.create(element);
    expect(card).toMatchSnapshot();
  });
});
