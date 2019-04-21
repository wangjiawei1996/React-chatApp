import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

function Erying() {
  return <h2>二营</h2>
}
function Sanying() {
  return <h2>三营</h2>
}
class Dashboard extends React.Component {
  render() {
    const redireToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <h1>独立团</h1>
        { this.props.isAuth? <button onClick={this.props.logout}>注销</button> : null }
        <ul>
          <li>
            <Link to='dashboard/'>一营</Link>
          </li>
          <li>
            <Link to='dashboard/erying'>二营</Link>
          </li>
          <li>
            <Link to='dashboard/sanying'>三营</Link>
          </li>
        </ul>
        <Route path = '/dashboard/' exact component={App}></Route>
        <Route path = '/dashboard/erying' component={Erying}></Route>
        <Route path = '/dashboard/sanying' component={Sanying}></Route>
      </div>
    )
    return this.props.isAuth ? app: redireToLogin
  }
}
export default connect(state=>state.auth, {logout})(Dashboard)
