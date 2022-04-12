import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../Redux/configureStore';
import CategoryCard from './CategoryCard';

describe('CategoryCard Componente test', () => {
  test('Render CategoryCard', () => {
    const element = (
      <Provider store={store}>
        <HashRouter>
          <CategoryCard id={1} name="Blitz" average={2000} />
        </HashRouter>
      </Provider>
    );
    render(element);
    const card = screen.getByText(/Blitz/i);
    expect(card).toBeInTheDocument();
  });
  test('CategoryCard snapshot', () => {
    const element = (
      <Provider store={store}>
        <HashRouter>
          <CategoryCard id={1} name="Blitz" average={2000} />
        </HashRouter>
      </Provider>
    );
    const card = renderer.create(element);
    expect(card).toMatchSnapshot();
  });
});
