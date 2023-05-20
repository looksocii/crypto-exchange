import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function BuyCryptoForm() {
  const [coinAmount, setCoinAmount] = useState('');
  const [coinType, setCoinType] = useState('');
  const [usdAmount, setUsdAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Container>
      <Row className="text-center mt-5">
        <Col></Col>
        <Col>
          <h1 className="text-center">Buy Crypto</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-4">
        <Col></Col>
        <Col>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="coinAmount">
              <Form.Label>Amount of Coins to Buy</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={coinAmount}
                onChange={(event) => setCoinAmount(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="coinType" className="mt-2">
              <Form.Label>Crypto Coin</Form.Label>
              <Form.Control
                as="select"
                value={coinType}
                onChange={(event) => setCoinType(event.target.value)}
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="NEAR">Near Protocol (NEAR)</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="usdAmount" className="mt-2">
              <Form.Label>Total USD Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="0.00"
                value={usdAmount}
                onChange={(event) => setUsdAmount(event.target.value)}
                disabled
              />
            </Form.Group>
            <div className="mt-4 d-grid gap-2">
              <Button variant="success" size="lg">
                BUY / LONG
              </Button>
              <Button variant="danger" size="lg">
                SELL / SHORT
              </Button>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default BuyCryptoForm;
