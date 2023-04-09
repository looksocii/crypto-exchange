import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <Container>
      <Row className="text-center mt-5">
        <Col></Col>
        <Col>
          <h1>Register</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-4">
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </Form.Group>

            <div className="d-grid">
              <Button className="mt-4" variant="dark" size="lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
