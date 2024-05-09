import React from "react"
import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { createPost } from "../api/posts"
import { getUsers } from "../api/users"
import PostForm from "../components/PostForm"

function NewPost() {
  const { state } = useNavigation()
  const { users } = useLoaderData()
  const errors = useActionData()

  console.log(users)
  const isSubmitted = state === "submitting" || state === "loading"

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} errors={errors} isSubmitted={isSubmitted} />
    </>
  )
}

async function loader({ request }) {
  const users = await getUsers({ signal: request.signal })

  return { users }
}

async function action({ request }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")

  const errors = formValidator({ title, body, userId })

  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

function formValidator({ title, body, userId }) {
  const errors = {}

  if (title === "") {
    errors.title = "Required"
  }

  if (body === "") {
    errors.body = "Required"
  }

  if (userId === "") {
    errors.userid = "Required"
  }

  return errors
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
}
