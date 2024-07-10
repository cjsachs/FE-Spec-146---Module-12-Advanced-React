import { useContext } from "react"
import { UserContext } from "../UserContext/UserContext"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        // clear data from local storage
        localStorage.removeItem(user.email)
        // reset context user
        setUser({
            email: '',
            password: ''
        })
        // navigate to login page
        navigate('/login')
    }
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>Currently logged in as: {user.email}</p>
        <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button>
    </div>
  )
}
export default Home