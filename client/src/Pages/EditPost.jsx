import React from "react"
import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom"
import { createPost, getPost, updatePost } from "../api/posts"
import { getUsers } from "../api/users"
import PostForm from "../components/PostForm"

function EditPost() {
  const { state } = useNavigation()
  const { post, users } = useLoaderData()
  const errors = useActionData()

  const isSubmitted = state === "submitting" || state === "loading"

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm
        users={users}
        errors={errors}
        isSubmitted={isSubmitted}
        defaultValues={post}
      />
    </>
  )
}

async function loader({ params, request }) {
  const post = await getPost(params.postId, { signal: request.signal })
  const users = await getUsers({ signal: request.signal })

  return { post, users }
}

async function action({ request, params }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")

  const errors = formValidator({ title, body, userId })

  if (Object.keys(errors).length > 0) {
    return errors
  }

  const post = await updatePost(
    params.postId,
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

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
}
