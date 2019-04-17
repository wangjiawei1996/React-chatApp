import React from 'react'
import {Link, Route} from 'react-router-dom'
import App from './App'

function Erying() {
  return <h2>二营</h2>
}
function Sanying() {
  return <h2>三营</h2>
}
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>一营</Link>
          </li>
          <li>
            <Link to='/dashboard/erying'>二营</Link>
          </li>
          <li>
            <Link to='/dashboard/sanying'>三营</Link>
          </li>
        </ul>
        <Route path='/dashboard/' component={App}></Route>
        <Route path='/dashboard/' component={Erying}></Route>
        <Route path='/dashboard/' component={Sanying}></Route>
      </div>
    )
  }
}
export default Dashboard
