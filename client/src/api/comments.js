import { baseApi } from "./base"

export function getPostComments(postId, options) {
  return baseApi
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data)
}
