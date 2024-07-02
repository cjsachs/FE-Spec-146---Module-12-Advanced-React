import { createContext } from "react";

const UserContext = createContext({
    user: {
        username: '',
        password: '',
        isLoggedIn: false
    },
    setUser: () => {}
})

export default UserContext