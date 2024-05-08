import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"
import axios from "axios"
import { getPosts } from "../api/posts"

function Posts() {
  const posts = useLoaderData()
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}

function loader({ request: { signal } }) {
  return getPosts({ signal })
}

export const postListRoute = {
  loader,
  element: <Posts />,
}
