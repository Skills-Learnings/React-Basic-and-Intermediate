import { useLoaderData } from "react-router-dom"
import TodoItem from "../components/TodoItem"
import { getTodos } from "../api/todos"

export default function Todos() {
  const todos = useLoaderData()
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

function loader({ request: { signal } }) {
  return getTodos({ signal })
}

export const todosListRoute = {
  loader,
  element: <Todos />,
}
