import React, { Component } from 'react';

const App = () => (<Counter> </Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  plusbutn = () => {
    console.log(this.state.count)
    this.setState({ count: this.state.count +1 })
  }
  
  minusbutn = () => {
    console.log(this.state.count)
    this.setState({count: this.state.count -1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          count: {this.state.count}
        </div>
        <button onClick={this.plusbutn}>+1</button>
        <button onClick={this.minusbutn}>-1</button>
      </React.Fragment>
      ) 
  }
}

// const User = (props) => {
//   return <div>Hi, I am {props.name}!,and {props.age} years old! </div>
// }




export default App;
