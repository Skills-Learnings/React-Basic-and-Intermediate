// Example of custom hook can be used by any component.
import { useState } from "react"

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  function toggle() {
    setValue((currentValue) => !currentValue)
  }

  return [value, toggle]
}
