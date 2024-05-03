import { useContext, useRef, useState } from "react"
import { TodoContext } from "./App"

export function TodoItem({ id, name, completed }) {
  const [isEditing, setIsEditing] = useState(false)
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext)

  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    if (nameRef.current.value === "") return

    editTodo(id, nameRef.current.value)
    setIsEditing(false)
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" defaultValue={name} ref={nameRef} />
          <button type="submit" data-button-edit="true">
            Save
          </button>
        </form>
      ) : (
        <>
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button onClick={() => setIsEditing(true)} data-button-edit>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  )
}
