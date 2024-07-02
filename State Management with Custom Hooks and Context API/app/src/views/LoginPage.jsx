import { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import useCartCount from '../hooks/useCartCount';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const cartCount = useCartCount()

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({
      username: username,
      password: password,
      isLoggedIn: true
    })
    navigate('/')
  }

  return (
    <Container>
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h2>Using our custom hook again: {cartCount}</h2>
    </Container>
  );
};
export default LoginPage;
