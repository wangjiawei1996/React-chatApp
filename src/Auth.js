import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'
class Auth extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuth? <Redirect to='/dashboard'/> : null}
        <h2>没有权限查看，登录后才可以看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}
export default connect(state=>state.auth, {login})(Auth)
