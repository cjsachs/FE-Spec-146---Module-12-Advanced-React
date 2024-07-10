import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import { UserContext } from "./UserContext/UserContext"
import { useState } from "react"

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </UserContext.Provider>
  )
}
export default App
