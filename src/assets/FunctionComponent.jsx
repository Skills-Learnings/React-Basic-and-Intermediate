// Example of conditional rendering
import { useState } from "react"
import { DisplayString } from "./DisplayString"

export function FunctionComponent({ favoriteNumber }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>-</button>
      <br />
      <br />
      {/* Example of conditional rendering using && operator */}
      {/* {favoriteNumber != null && `My favorite number is ${favoriteNumber}`} */}
      {/* Example of conditional rendering using ternary operator */}
      {favoriteNumber > 5
        ? `My favorite number is large`
        : `My favorite number is small`}
      <DisplayString name={name} age={age} />
    </div>
  )
}
