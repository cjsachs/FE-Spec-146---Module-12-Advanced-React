import { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useContext(UserContext)

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginUser.email in localStorage) {
        // get user from storage
      const storedUser = localStorage.getItem(loginUser.email)
      // converst user string to a JSON object
      const userSession = JSON.parse(storedUser)
      // set UserContext
      setUser(userSession)
      navigate('/')
    } else {
      // user does not exist
      setError('User does not exist!')
    }
  };

  return (
    <Container>
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={loginUser.email}
            onChange={(event) =>
              setLoginUser({ ...loginUser, email: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginUser.password}
            onChange={(event) =>
              setLoginUser({ ...loginUser, password: event.target.value })
            }
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default Login;
