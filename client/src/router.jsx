import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
} from "react-router-dom"
import Layout from "./Layout"
import { postListRoute } from "./Pages/Posts"
import { userListRoute } from "./Pages/Users"
import { todosListRoute } from "./Pages/Todos"
import { postDetailRoute } from "./Pages/PostDetail"
import { userDetailRoute } from "./Pages/UserDetail"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route errorElement={<ErrorElement />}>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts">
          <Route index={true} {...postListRoute} />
          <Route path=":postId" {...postDetailRoute} />
        </Route>
        <Route path="/users">
          <Route index={true} {...userListRoute} />
          <Route path=":userId" {...userDetailRoute} />
        </Route>
        <Route path="/todos" {...todosListRoute} />
      </Route>
    </Route>
  )
)

function ErrorElement() {
  const error = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>

      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
