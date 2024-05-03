import { createContext, useEffect, useReducer, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./ToDoList"
import { FilterForm } from "./FilterForm"

const LOCAL_STORAGE_KEY = "TODOS"

const TODO_ACTIONS = {
  ADD: "ADD",
  EDIT: "EDIT",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
}

export const TodoContext = createContext()

function todosReducer(todos, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [
        ...todos,
        {
          name: action.payload.toDoName,
          completed: false,
          id: crypto.randomUUID(),
        },
      ]
    case TODO_ACTIONS.TOGGLE:
      return todos.map((todo) => {
        const completed = action.payload.completed
        if (todo.id === action.payload.todoId) return { ...todo, completed }

        return todo
      })
    case TODO_ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.todoId)
    case TODO_ACTIONS.EDIT:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name }
        }

        return todo
      })

    default:
      return todos
  }
}

function App() {
  const [nameInput, setNameInput] = useState("")
  const [hideCheck, setHideCheck] = useState(false)

  const [todos, dispatchTodos] = useReducer(todosReducer, [], (todo) => {
    const values = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (values === null) {
      return todo
    } else {
      return JSON.parse(values)
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const filteredTodos = todos.filter((todo) => {
    if (hideCheck && todo.completed) return false
    return todo.name.includes(nameInput)
  })

  function addNewTodo(todoName) {
    dispatchTodos({
      type: TODO_ACTIONS.ADD,
      payload: { toDoName: todoName },
    })
  }

  function toggleTodo(todoId, completed) {
    dispatchTodos({
      type: TODO_ACTIONS.TOGGLE,
      payload: {
        todoId: todoId,
        completed: completed,
      },
    })
  }

  function deleteTodo(todoId) {
    dispatchTodos({
      type: TODO_ACTIONS.DELETE,
      payload: {
        todoId: todoId,
      },
    })
  }

  function editTodo(id, name) {
    dispatchTodos({
      type: TODO_ACTIONS.EDIT,
      payload: {
        id: id,
        name: name,
      },
    })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
      }}
    >
      <FilterForm
        nameInput={nameInput}
        setNameInput={setNameInput}
        hideCheck={hideCheck}
        setHideCheck={setHideCheck}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  )
}

export default App
