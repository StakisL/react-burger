import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.jsx';
import { Provider } from 'react-redux'
import './index.css';
import { createStore } from 'redux';
import { rootReducer } from './services/reducers/root-reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);