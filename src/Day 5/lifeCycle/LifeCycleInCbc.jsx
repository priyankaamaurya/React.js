import React, { Component } from 'react'

export default class LifeCycleInCbc extends Component {

    state = {
        count : 0
    }

    handleIncrement = ()=> {
        this.setState({count : this.state.count + 1})
    }

    handleDecrement = ()=> {
        this.setState({count : this.state.count - 1})
    }

    componentDidMount(){
        console.log("Mounting Phase")
    }

    componentDidUpdate(){
        console.log("Updation Phase")
    }

    componentWillUnmount(){
        console.log("Unmounting Phase")
    }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleIncrement}> Increment </button>
        <button onClick={this.handleDecrement}> Decrement </button>
      </div>
    )
  }
}
