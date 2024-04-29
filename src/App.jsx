import { useState } from "react"
import { FunctionComponent } from "./assets/FunctionComponent"

function App() {
  // Example of conditional rendering
  /* return (
    <div>
    <FunctionComponent favoriteNumber={4} />
    </div>
  ) */

  // Example of rendering lists
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ])

  function addItem() {
    setItems((currentItems) => {
      return [{ id: crypto.randomUUID(), name: "New Items" }, ...currentItems]
    })
  }

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <input type="text" />
            </div>
          )
        })}
      </pre>
    </div>
  )
}

export default App
