import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
