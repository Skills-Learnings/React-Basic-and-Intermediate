import { useState } from "react"
import { useToggle } from "./hooks/useToggle"

export function CustomHookExample() {
  const nameInput = useInputValue("")
  const [isDarkMode, toggleDarkMode] = useToggle(false)
  // const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Name:
        <br />
        <input {...nameInput} />
      </label>
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}

// Example of custom hook can be used in this component only
function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  }
}
