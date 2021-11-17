import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import manageTweet from './reducers/manageTweet';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(manageTweet, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);
