import HomePage from "./views/HomePage"
import ShoppingCart from "./views/ShoppingCart"
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shoppingCart" element={<ShoppingCart/>}/>
    </Routes>
  )
}
export default App