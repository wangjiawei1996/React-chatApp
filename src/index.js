import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { counter,addGun,removeGun,addGunAsync } from './index.redux'; 
const store = createStore(counter, applyMiddleware(thunk))
function render() {
  ReactDom.render(<App store={store} addGunAsync={addGunAsync} addGun={addGun} removeGun={removeGun}  />,document.getElementById('root'))
}
render()
store.subscribe(render)