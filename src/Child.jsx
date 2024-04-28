// This component contains the exercise and example code of useEffect hook
import { useEffect, useState } from "react"

export function Child() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  //useEffect example
  /* useEffect(() => {
    console.log("Name or age was changed", name, age)
  }, [name, age]) */

  //useEffect Exercise
  useEffect(() => {
    console.log("Age has changed", age)
  }, [age])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </div>
  )
}
