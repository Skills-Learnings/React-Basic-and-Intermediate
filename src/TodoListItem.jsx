// Exercise for rendering and creating custom components with props

function TodoListItem({ children, isComplete }) {
  return (
    <label htmlFor={children}>
      <input type="checkbox" defaultChecked={isComplete} />
      {children}
    </label>
  )
}

export default TodoListItem
