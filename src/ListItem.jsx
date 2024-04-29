export function ListItem({ id, name, completed, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          data-list-item-checkbox
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-delete onClick={(e) => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}
