import { Form, Link, useActionData, useNavigation } from "react-router-dom"

export default function NewTodo() {
  const errorMessage = useActionData()
  const { state } = useNavigation()
  const isSubmiting = state === "submitting"

  return (
    <div className="container">
      <h1 className="page-title">New todo</h1>
      <Form className="form" method="post">
        <div>{errorMessage}</div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-btn-row form-row">
          <Link to=".." className="btn btn-outline">
            Back
          </Link>
          <button disabled={isSubmiting} className="btn">
            {isSubmiting ? "Loading" : "Create"}
          </button>
        </div>
      </Form>
    </div>
  )
}
