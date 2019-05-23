import React from 'react'
import { connect } from 'react-redux'
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
import { getUserList } from '../../redux/character.redux'

class Boss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    const Header = Card.Header
    const Body = Card.Body
    return (
      <WingBlank>
      <WhiteSpace></WhiteSpace>
        {this.props.userlist.map(v => (
          v.avatar?(<Card key={v._id}>
            <Header
              title = {v.user}
              thumb = {require(`../img/${v.avatar}.png`)}
              extra = {<span>{v.title}</span>}
            ></Header>
            <Body>
              {v.desc.split(" ").map(v => (
                <div key={v}>{v}</div>
              ))}
            </Body>
          </Card>): null
        ))}
      </WingBlank>
    )
  }
}
export default connect(state => state.chatuser, {getUserList})(Boss);