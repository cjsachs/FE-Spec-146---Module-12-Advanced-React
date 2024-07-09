import { useQuery } from '@tanstack/react-query';
import { Alert, Button, Card, Container, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { fetchProducts } from '../api/api';

const ProductsCatalog = () => {
  const [show, setShow] = useState(true);
  // useQuery = fetching/reading data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    );
  }

  return (
    <Container>
      {data.map((product, idx) => (
        <Card key={idx} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default ProductsCatalog;
