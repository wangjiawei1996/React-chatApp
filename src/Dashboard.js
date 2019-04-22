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
    const match = this.props.match
    const redireToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <h1>独立团</h1>
        { this.props.isAuth? <button onClick={this.props.logout}>注销</button> : null }
        <ul>
          <li>
            <Link to={`${match.url}/`}>一营</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>二营</Link>
          </li>
          <li>
            <Link to={`${match.url}/sanying`}>三营</Link>
          </li>
        </ul>
        <Route path = {`${match.url}/`} exact component={App}></Route>
        <Route path = {`${match.url}/erying`} component={Erying}></Route>
        <Route path = {`${match.url}/sanying`} component={Sanying}></Route>
      </div>
    )
    return this.props.isAuth ? app: redireToLogin
  }
}
export default connect(state=>state.auth, {logout})(Dashboard)
