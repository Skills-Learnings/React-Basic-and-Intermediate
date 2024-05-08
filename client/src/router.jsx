import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  useRouteError,
} from "react-router-dom"
import Todos from "./Pages/Todos"
import NewTodo from "./Pages/NewTodo"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index={true}
        element={<Todos />}
        loader={async ({ request: { signal, url } }) => {
          const searchParams = new URL(url).searchParams
          const query = searchParams.get("query") || ""
          return {
            searchParams: { query },
            todos: await fetch(`http://localhost:3000/todos?q=${query}`, {
              signal,
            }).then((res) => res.json()),
          }
        }}
      />
      <Route
        path="new"
        element={<NewTodo />}
        action={async ({ request }) => {
          const formData = await request.formData()
          const title = formData.get("title")

          if (title === "") {
            return "Title is required"
          }
          const todo = await fetch("http://localhost:3000/todos", {
            method: "POST",
            signal: request.signal,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, completed: false }),
          }).then((res) => res.json())

          return redirect("/")
        }}
      />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />={" "}
    </>
  )
)
