import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { addProduct } from '../api/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  const [show, setShow] = useState(true);

  // mutating our client with useMutation (useMutation = Updating, Creating, or Deleting data from database)
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // mutates and calls addProduct
    mutate(product);
  };

  return (
    <Container>
      {isError && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error.message}</p>
        </Alert>
      )}
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={product.title}
            onChange={(event) =>
              setProduct({ ...product, title: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            value={product.price}
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={product.description}
            onChange={(event) =>
              setProduct({ ...product, description: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            value={product.image}
            onChange={(event) =>
              setProduct({ ...product, image: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={product.category}
            onChange={(event) =>
              setProduct({ ...product, category: event.target.value })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {isLoading ? 'Adding Product...' : 'Add Product'}
        </Button>
      </Form>
    </Container>
  );
};
export default AddProduct;
