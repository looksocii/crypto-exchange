import { useState } from "react";
import { useRouter } from 'next/router';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { setAuthToken } from '../utils/Authentication';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        username: username,
        password: password
      })

      // User Login
      setAuthToken(response.data.token);
      router.push('/UserWallet');

    } catch (error) {
      setPassword("");
      setError(error.response.data.error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Row className="text-center mt-5">
        <Col></Col>
        <Col>
          <h1>Login</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-4">
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required />
            </Form.Group>

            <div className="d-grid mt-4">
              <Button variant="dark" size="lg" type="submit">
                Login
              </Button>
            </div>
            {error && <div className="text-danger text-center mt-2">{error}</div>}
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
