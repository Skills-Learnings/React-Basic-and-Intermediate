import { useEffect, useState } from "react"

export function HandlingFormInputUsingState() {
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Render")
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (name === "") return
    alert(`Name: ${name}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button>Alert Name</button>
      </form>
    </>
  )
}
