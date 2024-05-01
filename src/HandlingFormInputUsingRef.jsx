import { useEffect, useRef, useState } from "react"

export function HandlingFormInputUsingRef() {
  const nameRef = useRef()
  //const [name, setName] = useState("")

  useEffect(() => {
    console.log("Render")
  })

  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value
    if (name === "") return
    alert(`Name: ${name}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <br />
        <input type="text" id="name" ref={nameRef} />
        {/* <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <br />
        <br />
        <button>Alert Name</button>
      </form>
    </>
  )
}
