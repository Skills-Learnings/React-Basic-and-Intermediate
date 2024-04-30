import { useEffect, useRef, useState } from "react"
import { FunctionComponent } from "./assets/FunctionComponent"
import { UseMemoExample } from "./UseMemoExample"
import { UseCallbackExample } from "./UseCallbackExample"
import { CustomHookExample } from "./CustomHookExample"

function App() {
  // Example of conditional rendering
  /* return (
    <div>
    <FunctionComponent favoriteNumber={4} />
    </div>
  ) */
  // End of conditional rendering example
  // Example of rendering lists
  /* const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ])

  function addItem() {
    setItems((currentItems) => {
      return [{ id: crypto.randomUUID(), name: "New Items" }, ...currentItems]
    })
  }

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <input type="text" />
            </div>
          )
        })}
      </pre>
    </div>
  ) */
  // End of Rendering list example
  // Example of useRef hooks for storing values that doesn't cause component to re-render
  /* const [name, setName] = useState("")
  const nameRef = useRef("ABC")
  console.log(nameRef.current)

  useEffect(() => {
    console.log("Re-render")
  })

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button onClick={() => (nameRef.current = Math.random())}>
        Change Ref
      </button>
      <button onClick={() => console.log(nameRef.current)}>Print Ref</button>
    </>
  ) */
  // End of useRef example
  // Example of useRef hooks for refering a html element
  /* const [name, setName] = useState("")
  const nameRef = useRef()

  useEffect(() => {
    console.log(nameRef.current.value)
  }, [name])

  useEffect(() => {
    nameRef.current.focus()
  }, [])
  return (
    <>
      <label>
        Name:
        <input
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </>
  ) */
  // End of useRef example
  // Example of useMemo hook
  /* return <UseMemoExample /> */
  // End of useMemo hook  example
  // Example of useCallback hook
  /* return <UseCallbackExample /> */
  // End of useBack hook  example
  // Example of Custom hook
  return <CustomHookExample />
  // End of useBack hook  example
}

export default App
