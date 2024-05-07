import { useParams } from "react-router"
import teamMembers from "../teamMembers.json"
import { useLoaderData } from "react-router-dom"

// Dynamic routes example
/* export function TeamMember({ name }) {
  const { memberId } = useParams()
  const member = teamMembers.find((member) => member.id === memberId)
  return (
    <>
      <h1>Team Member - {member.name}</h1>
    </>
  )
} */

// Loaders route example
export function TeamMember({ name }) {
  const member = useLoaderData()
  return (
    <>
      <h1>Team Member - {member.name}</h1>
    </>
  )
}
