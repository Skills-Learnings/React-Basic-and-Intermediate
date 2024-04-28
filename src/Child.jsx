import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Hi")

    /* 1. Whenever a component unmounts this return function runs
    2. since we have passed empty array as dependencies this useEffect will run only when the components mounts
    3. when the component unmounts return function will run */
    return () => {
      console.log("Bye")
    }
  }, [])

  useEffect(() => {
    console.log("Render")
  })

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`)
  }, [name, age])

  useEffect(() => {
    document.title = name

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [name])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
