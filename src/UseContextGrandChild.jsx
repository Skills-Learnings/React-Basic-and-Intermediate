import { useContext } from "react"
import { ThemeContext } from "./UseContextExample"

export function UseContextGrandChild() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: isDarkMode ? "white" : "#333",
        color: isDarkMode ? "#333" : "white",
        border: "none",
        padding: ".5em",
        borderRadius: ".25em",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  )
}
