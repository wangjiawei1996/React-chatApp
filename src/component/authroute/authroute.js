import React from 'react';
import axios from 'axios'
class AuthRoute extends React.Component {
  componentDidMount() {
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
        }
      })
  }
  render() {
    return <p>判断跳转的地方</p>
  }
}
export default AuthRoute