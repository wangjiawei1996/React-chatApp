import React from 'react'
import { addGUN } from './index.redux'
class App extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const store = this.props.store
    const num = store.getState()

    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={() => {store.dispatch(addGUN())}}>申请机枪</button>
      </div>
    )
  }
}
export default App