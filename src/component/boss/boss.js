import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/character.redux'
import UserCard from '../usercard/usercard';

class Boss extends React.Component {
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    return <UserCard userlist={this.props.userlist}></UserCard>
  }
}
export default connect(state => state.chatuser, {getUserList})(Boss);