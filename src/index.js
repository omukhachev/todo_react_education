import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './pages/Todo';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from "./store";
import './index.css';

!localStorage.getItem('state') && localStorage.setItem('state', JSON.stringify(
  {
    list: {
      data: [],
      loading: true,
    },
    filter: {
      currentFilter: 0,
    },
  }
))

const initialState = JSON.parse(localStorage.getItem('state'));

const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById('root')
);