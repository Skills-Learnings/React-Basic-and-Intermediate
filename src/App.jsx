import "./assets/user.css"
import userDetails from "./assets/user.json"
import UserCard from "./UserCard"
import UserCardClass from "./UserCardClass"

function App() {
  return (
    <div>
      <UserCard
        name={userDetails.name}
        phoneNumber={userDetails.phoneNumber}
        age={userDetails.age}
        address={userDetails.address}
      />
      <br />
      <UserCardClass
        name={userDetails.name}
        phoneNumber={userDetails.phoneNumber}
        age={userDetails.age}
        address={userDetails.address}
      />
    </div>
  )
}

export default App
