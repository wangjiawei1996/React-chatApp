import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { counter,addGun,removeGun,addGunAsync } from './index.redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, composeEnhancers(
  applyMiddleware(thunk)
))
function render() {
  ReactDom.render(<App store={store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun}  />,document.getElementById('root'))
}
render()
store.subscribe(render)