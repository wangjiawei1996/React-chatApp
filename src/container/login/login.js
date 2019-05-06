import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: '',
      name: ''
    }
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
            <InputItem
              onChange={v => this.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <Button onClick = {this.handleLogin} type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default connect(state=>state.user, {login})(Login)