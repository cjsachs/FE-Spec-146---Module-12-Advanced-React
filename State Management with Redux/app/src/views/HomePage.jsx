import { Button, Container } from "react-bootstrap"
import ProductCatalog from "../components/ProductCatalog"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const HomePage = () => {
  const cartCount = useSelector((state) => state.cart.totalItems)
  return (
    <Container>
        <p>Current Cart Count: {cartCount}</p>
        <ProductCatalog/>
        <Link to={'/shoppingCart'}>
          <Button>Go to Cart</Button>
        </Link>
    </Container>
  )
}
export default HomePage