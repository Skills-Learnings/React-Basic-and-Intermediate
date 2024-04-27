import React from "react"

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: 0,
    }
  }

  render() {
    const decreseAge = () => {
      this.setState({ age: this.state.age - 1 })
    }

    const increaseAge = () => {
      this.setState({ age: this.state.age + 1 })
    }

    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={decreseAge}>-</button>
        {this.state.age}
        <button onClick={increaseAge}>+</button>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old
        </p>
      </div>
    )
  }
}
