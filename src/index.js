import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import reducers from './reducer'
import './config'
import './index.css'
import 'antd-mobile/dist/antd-mobile.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers , composeEnhancers(
  applyMiddleware(thunk)
))
// function Boss() {
//   return <h2>Boss页面</h2>
// }
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/bossinfo' component = {BossInfo}></Route>
        <Route path='/login' component = {Login}></Route>
        <Route path='/register' component = {Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
