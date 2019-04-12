import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { counter,addGun,removeGun } from './index.redux'; 
const store = createStore(counter)
function render() {
  ReactDom.render(<App store={store} addGUN={addGun} removeGun={removeGun} />,document.getElementById('root'))
}
render()
store.subscribe(render)