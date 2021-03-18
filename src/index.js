import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './pages/Todo/todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./store";
import Middleware from './store/middleware';
import './index.css';

const localStorageState = localStorage.getItem('state');

const initialState = localStorageState ? JSON.parse(localStorageState) : {
  list: {
    data: [],
    laoding: false
  },
  filter: {
    currentFilter: 0
  },
};

const store = createStore(
  rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  Middleware(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById('root')
);

export default store;