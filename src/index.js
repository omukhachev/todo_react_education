import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './pages/Todo';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from "./store";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './index.css';

!localStorage.getItem('state') && localStorage.setItem('state', JSON.stringify(
  {
    list: {
      data: [],
      loading: true,
      loadingItems: [],
    },
    filter: {
      currentFilter: 0,
    },
    user: {
      token: null,
      response: null,
      error: null,
      loading: false,
    }
  }
))

const initialState = JSON.parse(localStorage.getItem('state'));

const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>      
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/todo" component={ToDo} />     
    </Router>
  </Provider>,
  document.getElementById('root')
);