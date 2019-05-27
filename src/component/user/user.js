import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace } from 'antd-mobile'
import { Brief } from 'antd-mobile/lib/list/ListItem';
class User extends React.Component {
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
          <Item>注销</Item>
        </List>
      </div>
    ):null
  }
 }
export default connect(state => state.user)(User);