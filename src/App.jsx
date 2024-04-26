import { useState } from "react"
import Counter from "./Counter"

function App() {
  // Exmple of useState
  /* const [name, setName] = useState("Sahil")
  const [age, setAge] = useState(23)

  function handleClick() {
    setName("Sally")
    // in setState() we can't get the updated value from age variable so to get the current value we need to pass function in the setState
    // This is the process when we need update the state value based on the current value.
    setAge((currentAge) => {
      console.log("before update first time", currentAge)
      return currentAge + 1
    })
    setAge((currentAge) => {
      console.log("before update second time", currentAge)
      return currentAge + 1
    })
  }

  return (
    <h1 onClick={handleClick}>
      Hi {name} {age}
    </h1>
  ) */
  // Exercise
  /* return <Counter /> */

  // Example of input event listeners
  const [name, setName] = useState("Sahil")

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  )
}

export default App
