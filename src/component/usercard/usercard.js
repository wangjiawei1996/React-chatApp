import React from 'react'
import PropTypes from 'prop-types';
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
class UserCard extends React.Component {
  static propTypes = {
    userlist: PropTypes.array.isRequired
  }
  handleChick(v){
    this.props.history.push(`/chat/${v._id}`)
  }
  render() {
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
      <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v => (
          v.avatar?(
            <Card
              style={{zIndex:1}}
              key={v._id}
              onClick={()=>this.handleChick(v)}
            >
            <Header
              title = {v.user}
              thumb = {require(`../img/${v.avatar}.png`)}
              extra = {<span>{v.title}</span>}
            ></Header>
            <Body>
              {v.type==='boss'?<div>公司:{v.company}</div>:null}
              {v.desc.split(" ").map(d => (
                <div key={d}>{d}</div>
              ))}
              {v.type==='boss'?<div>薪资:{v.money}</div>:null}
            </Body>
          </Card>): null
        ))}
      </WingBlank>
    )
  }
}
export default withRouter(UserCard)