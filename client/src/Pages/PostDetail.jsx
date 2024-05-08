import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getPost } from "../api/posts"
import { getPostComments } from "../api/comments"
import { getUser } from "../api/users"

function PostDetail() {
  const { comments, post, user } = useLoaderData()
  console.log(user)
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      {
        <span className="page-subtitle">
          By: <Link to={`/users/${user.id}`}>{user.name}</Link>
        </span>
      }
      <div>
        quia et suscipit suscipit recusandae consequuntur expedita et cum
        reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
        rem eveniet architecto
      </div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.length > 0 &&
          comments.map((comment) => (
            <div key={comment.id} className="card">
              <div className="card-body">
                <div className="text-sm mb-1">{comment.email}</div>
                {comment.body}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

async function loader({ params, request: { signal } }) {
  const comments = getPostComments(params.postId, { signal })
  const post = await getPost(params.postId, { signal })
  const user = getUser(post.userId, { signal })
  return { comments: await comments, post, user: await user }
}

export const postDetailRoute = {
  loader,
  element: <PostDetail />,
}
