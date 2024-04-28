import React from "react"
import CounterClass from "./CounterClass"

export default class AppClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Sahil",
      age: 24,
    }
  }

  render() {
    // Example of useState in class component
    /* const handleclick = () => {
      this.setState({ name: "Sally" })
      this.setState((currentState) => {
        return { age: currentState.age + 1 }
      })
      this.setState((currentState) => {
        return { age: currentState.age + 1 }
      })
    }

    return (
      <h1 onClick={handleclick}>
        Hi, {this.state.name} {this.state.age}
      </h1>
    ) */

    //Exercise of useState in class component
    return <CounterClass />
  }
}
