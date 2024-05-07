import { useOutletContext } from "react-router"

export function Team() {
  const value = useOutletContext()

  return (
    <>
      <h1>Team - {value}</h1>
    </>
  )
}
