import { Form, Link, useLoaderData, useNavigation } from "react-router-dom"
import TodoItem from "../components/TodoItem"
import { useEffect, useRef } from "react"

export default function Todos() {
  const {
    searchParams: { query },
    todos,
  } = useLoaderData()
  const queryRef = useRef()
  const { state } = useNavigation()

  useEffect(() => {
    queryRef.current.value = query
  }, [query])
  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>
      {state === "loading" ? (
        "Loading"
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  )
}
