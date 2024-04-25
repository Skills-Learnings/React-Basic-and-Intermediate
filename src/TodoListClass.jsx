/* Example of creating and rendering custom class based components as shown in the course video. */

import React from "react"

class TodoListClass extends React.Component {
  render() {
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    )
  }
}

export default TodoListClass
