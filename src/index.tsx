import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.jsx';
import './index.css';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers/root-reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const enhancer = compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, enhancer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);