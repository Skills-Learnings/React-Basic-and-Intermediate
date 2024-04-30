import { useCallback, useEffect, useState } from "react"

export function UseCallbackExample() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const printName = useCallback(() => {
    console.log(`Name: ${name}`)
  }, [name])

  useEffect(() => {
    console.log("In Effect")
    printName()
  }, [printName])

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
      </label>
    </>
  )
}
