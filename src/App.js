import React from 'react'

class App extends React.Component{
  
  render() {
    const boss = "李云龙"
    return (
      <div>
        <h1>独立团，团长是{boss}</h1>
        <Firstclub></Firstclub>
      </div>
    )
  }
}
class Firstclub extends React.Component {
  render() {
    const boss = '张大彪'
    return <h2>一营营长是{boss}</h2>
  }
}

export default App