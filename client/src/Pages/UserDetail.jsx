import { useLoaderData } from "react-router-dom"
import { getUser } from "../api/users"
import { getPosts } from "../api/posts"
import Card from "../components/Card"
import { getTodos } from "../api/todos"
import TodoItem from "../components/TodoItem"

function UserDetail() {
  const { user, posts, todos } = useLoaderData()
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite},{" "}
        {user.address.city},{user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.length > 0 &&
          posts.map((post) => <Card key={post.id} {...post} />)}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </>
  )
}

async function loader({ params, request: { signal } }) {
  const user = await getUser(params.userId, { signal })
  const posts = getPosts({ params: { userId: user.id }, signal })
  const todos = getTodos({ params: { userId: user.id }, signal })
  return { user, posts: await posts, todos: await todos }
}

export const userDetailRoute = {
  loader,
  element: <UserDetail />,
}
