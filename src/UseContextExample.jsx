import { createContext, useEffect, useState } from "react"
import { UseContextChild } from "./UseContextChild"

export const ThemeContext = createContext()

export function UseContextExample() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme() {
    setIsDarkMode((d) => !d)
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white"
    document.body.style.color = isDarkMode ? "white" : "#333"
  }, [isDarkMode])

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <UseContextChild />
        <p>
          Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Provident
          id aliquam ea nesciunt qui ipsum. Magni iusto repellendus ut unde?
        </p>
      </ThemeContext.Provider>
    </>
  )
}
