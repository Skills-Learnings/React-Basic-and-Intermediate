import { useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }

  return <h2 onClick={handleClick}>{counter}</h2>
}

export default Counter
