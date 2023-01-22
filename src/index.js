import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './style/global';

// redux
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <GlobalStyles />
    <App />
  </Provider>
);
