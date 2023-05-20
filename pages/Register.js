import { useState } from "react";
import { useRouter } from 'next/router';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == confirmPassword){
      try {
        const response = await axios.post('http://localhost:4000/api/register', {
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName
        })
        router.push('/Login');
      } catch (error) {
        setError(error.message);
      }
    }
    else{
      setPassword("");
      setConfirmPassword("");
      setError("Password & Confirm Password do not match.");
    }
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
              <Form.Control type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} required />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} required />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            </Form.Group>

            <div className="d-grid">
              <Button className="mt-4" variant="dark" size="lg" type="submit">
                Submit
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

export default RegisterPage;
