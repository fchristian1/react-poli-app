import RandomButton from "./components/RandomButton"
import DisplayProfile from "./components/DisplayProfile"
import { useState } from "react"

function App() {
  const [profile, setProfile] = useState({})

  return (
    <div>
      <RandomButton setProfile={setProfile} />
      <DisplayProfile profile={profile} />
    </div>
  )
}

export default App
