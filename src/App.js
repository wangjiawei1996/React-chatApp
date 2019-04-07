import React from 'react'

class App extends React.Component{
  
  render() {
    const boss = "李云龙"
    return (
      <div>
        <h1>独立团，团长是{boss}</h1>
        <Firstclub big="张大彪"></Firstclub>
        <Solider big="孙德胜"></Solider>
      </div>
    )
  }
}
function Solider(props) {
  return <h3>骑兵连冲啊，老大{props.big}</h3>
}
class Firstclub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      soliders: ['虎子', '柱子', '水生']
    }
  }
  render() {
    return (
      <div>
        <h2>一营营长是{this.props.big}</h2>
        <ul>
          {this.state.soliders.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App