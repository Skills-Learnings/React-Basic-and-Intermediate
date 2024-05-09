import React from "react"
import { Form } from "react-router-dom"

export default function PostForm({
  users,
  errors = {},
  isSubmitted,
  defaultValues = {},
}) {
  return (
    <Form method="post" className="form">
      <div className="form-row">
        <div
          className={`form-group ${
            errors != undefined && errors.title != null ? "error" : ""
          }`}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defaultValues.title}
          />
          {errors != undefined && errors.title && (
            <div className="error-message">Required</div>
          )}
        </div>
        <div
          className={`form-group ${
            errors != undefined && errors.userid != null ? "error" : ""
          }}`}
        >
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" defaultValue={defaultValues.userId}>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              )
            })}
          </select>
          {errors != undefined && errors.userid && (
            <div className="error-message">Required</div>
          )}
        </div>
      </div>
      <div className="form-row">
        <div
          className={`form-group ${
            errors != undefined && errors.body != null ? "error" : ""
          }`}
        >
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={defaultValues.body}
          ></textarea>
          {errors != undefined && errors.body != null && (
            <div className="error-message">Required</div>
          )}
        </div>
      </div>
      <div className="form-row form-btn-row">
        <a className="btn btn-outline" href="/posts">
          Cancel
        </a>
        <button disabled={isSubmitted} className="btn">
          {isSubmitted ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  )
}
