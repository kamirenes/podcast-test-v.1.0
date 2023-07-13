import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import initLocalization from './utils/i18next';
import { Config } from './config/config';

const { I18N } = Config;

initLocalization(localStorage.getItem('lang') || I18N.DEFAULT_LANGUAGE);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);