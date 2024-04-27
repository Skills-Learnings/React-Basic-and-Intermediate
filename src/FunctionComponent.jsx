import { useState } from "react"

export function FunctionComponent() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const decreseAge = () => {
    setAge((currentAge) => {
      return currentAge - 1
    })
  }

  const increaseAge = () => {
    setAge((currentAge) => {
      return currentAge + 1
    })
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={decreseAge}>-</button>
      {age}
      <button onClick={increaseAge}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </div>
  )
}
