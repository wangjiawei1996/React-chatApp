import React from 'react'
import ReactDom from 'react-dom'
import Auth from './Auth'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
import Dashboard from './Dashboard'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import { counter } from './index.redux';
import reducers from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers , composeEnhancers(
  applyMiddleware(thunk)
))
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
