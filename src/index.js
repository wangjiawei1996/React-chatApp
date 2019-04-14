import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { counter } from './index.redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, composeEnhancers(
  applyMiddleware(thunk)
))
ReactDom.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)
