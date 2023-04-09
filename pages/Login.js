import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
              <Form.Control type="text" placeholder="Enter Username" value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <div className="d-grid">
              <Button className="mt-4" variant="dark" size="lg" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
