import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import { Brief } from 'antd-mobile/lib/list/ListItem';
import browserCookie from 'browser-cookies'
class User extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout() {
    // browserCookie.erase('userid')
    // this.logout = this.logout.bind(this)
    const alert = Modal.alert
    alert('注销','确认退出登陆吗？', [
      { text: '取消', onPress: () => console.log('cancel') },
		    { text: '确认', onPress: () => {
		      browserCookie.erase('userid')
		      window.location.href = window.location.href
		    }}
    ])
  }
  render() {
    const props = this.props;
    const Item = List.Item
    return props.user?(
      <div>
        <Result
          img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width: 50}} alt="" />}
          title={this.props.user}
          message={props.type === 'boss'?props.company:null}
        />
        <List renderHeader = {() => '简介'}>
          <Item
            multipleLine
          >
            {props.title}
            {props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
            {props.money?<Brief>薪资:{props.money}</Brief>: null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item onClick={this.logout()}>注销</Item>
        </List>
      </div>
    ):null
  }
 }
export default connect(state => state.user)(User);