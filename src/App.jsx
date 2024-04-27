import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

function App() {
  const [values, setValues] = useState(INITIAL_VALUE)
  const [inputValue, setInputValue] = useState("")

  const removeFirstElement = () => {
    setValues((currentValues) => {
      return currentValues.slice(1)
    })
  }

  const removeSpecificLetter = (letter) => {
    setValues((currentValues) => {
      return currentValues.filter((value) => value !== letter)
    })
  }

  const addLetterToStart = (letter) => {
    setValues((currentValues) => {
      return [letter, ...currentValues]
    })
  }

  const addLetterToEnd = (letter) => {
    setValues((currentValues) => {
      return [...currentValues, letter]
    })
  }

  const clear = () => {
    setValues([])
  }

  const reset = () => {
    setValues(INITIAL_VALUE)
  }

  const updateAToH = () => {
    setValues((currentValues) => {
      return currentValues.map((element) => {
        if (element === "A") return "H"
        return element
      })
    })
  }

  return (
    <div>
      <h1>Values: {values.join(", ")}</h1>
      <button onClick={removeFirstElement}>Remove First Letter</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add letter at start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add letter at end</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Update A to H</button>
      <br />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addLetterToStart(inputValue)}>
        Add value to array
      </button>
      <br />
    </div>
  )
}

export default App
