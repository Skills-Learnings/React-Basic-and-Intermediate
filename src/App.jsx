import { useState } from "react"
import "./assets/styles.css"
import { ListItem } from "./ListItem"

function App() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState("")

  const addItem = () => {
    if (inputValue === "") return

    setItems((currentItems) => {
      return [
        ...currentItems,
        { name: inputValue, completed: false, id: crypto.randomUUID() },
      ]
    })
    setInputValue("")
  }

  function toggleTodo(itemId, completed) {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === itemId) return { ...item, completed: completed }

        return item
      })
    })
  }

  function deleteTodo(itemId) {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== itemId)
    })
  }

  return (
    <>
      <ul id="list">
        {items.map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Todo</button>
      </div>
    </>
  )
}

export default App
