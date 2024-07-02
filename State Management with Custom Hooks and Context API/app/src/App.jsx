import { useState } from "react"
import UserContext from "./context/UserContext"
import HomePage from "./views/HomePage"
import LoginPage from "./views/LoginPage"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </UserContext.Provider>
  )
}
export default App