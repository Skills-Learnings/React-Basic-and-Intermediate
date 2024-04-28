import React from "react"

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    const handleClick = () => {
      this.setState({ counter: this.state.counter + 1 })
    }

    return <div onClick={handleClick}>{this.state.counter}</div>
  }
}
