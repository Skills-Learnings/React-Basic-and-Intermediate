import { Link, useLoaderData } from "react-router-dom"
import teamMembers from "./teamMembers.json"

// Dynamic routes example
/* export function TeamNav() {
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id}>Team - {member.name}</Link>
          </li>
        ))}
        <li>
          <Link to="new">New Team</Link>
        </li>
        {/* <li>
          <Link to="..">.. Route</Link>
        </li>
        <li>
          <Link to=".." relative="path">
            .. Path
          </Link>
        </li>
      </ul>
    </nav>
  )
} */

// Loaders route example
export function TeamNav() {
  const teamMembers = useLoaderData()
  return (
    <nav>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={member.id.toString()}>Team - {member.name}</Link>
          </li>
        ))}
        <li>
          <Link to="new">New Team Member</Link>
        </li>
        {/* <li>
          <Link to="..">.. Route</Link>
        </li>
        <li>
          <Link to=".." relative="path">
            .. Path
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
