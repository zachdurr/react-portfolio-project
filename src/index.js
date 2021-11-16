import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import manageTweet from './reducers/manageTweet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageTweet);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);
