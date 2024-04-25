import React from "react"
import TodoList from "./TodoList"
import Name from "./Name"
import TodoListClass from "./TodoListClass"
import NameClass from "./NameClass"
import TodoListItem from "./TodoListItem"

function App() {
  // Example of using JSX syntax as shown in the course video.
  /* return (
    <div className="large" id="largeDiv">
      <label htmlFor="name">Number </label>
      <input id="inputId" type="number" defaultValue={3} />
    </div>
  ) */
  // Exercise for using JSX syntax
  /* return (
    <div className="large" id="largeDiv">
      <label htmlFor="name">Number </label>
      <input id="inputId" type="number" defaultValue={3} />
    </div>
  ) */
  // Example of rendering and creating custom function components as shown in the course video.
  /* return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  ) */
  // Exercise for rendering and creating custom function components
  /* return (
    <div>
      <Name />
    </div>
  ) */
  // Example of rendering and creating custom class components as shown in the course video.
  /* return (
    <div>
      <h1>Todo List</h1>
      <TodoListClass />
    </div>
  ) */
  // Exercise for rendering and creating custom class components
  /* return <NameClass /> */
  // Example of using props in components as shown in the course video.
  /* return (
    <div>
      <Name isProgrammer>
        <span>Custom Name</span>
      </Name>
    </div>
  ) */
  // Exercise for using props in components.
  return (
    <div>
      <TodoListItem isComplete>Item 1</TodoListItem>
      <TodoListItem>Item 2</TodoListItem>
    </div>
  )
}

export default App
