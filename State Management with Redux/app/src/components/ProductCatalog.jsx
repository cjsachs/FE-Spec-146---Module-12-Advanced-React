import { Container, Card, Button } from 'react-bootstrap';
import products from '../data/products';
import { addItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCatalog = () => {
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(addItem({id}))
    }

  return (
    <Container>
      <div>
        {products.map((product, idx) => (
          <Card key={idx} style={{ width: '18rem', marginTop: '10px' }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
              <Button variant="warning" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default ProductCatalog;
