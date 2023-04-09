import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function BuyCryptoForm() {
  const [coinAmount, setCoinAmount] = useState('');
  const [coinType, setCoinType] = useState('');
  const [usdAmount, setUsdAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Buy Crypto</h2>
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

        <Form.Group controlId="coinType">
          <Form.Label>Type of Coin</Form.Label>
          <Form.Control
            as="select"
            value={coinType}
            onChange={(event) => setCoinType(event.target.value)}
          >
            <option value="">Select a coin</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="BNB">Binance Coin (BNB)</option>
            <option value="SOL">Solana (SOL)</option>
            <option value="NEAR">Near Protocol (NEAR)</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="usdAmount">
          <Form.Label>Total USD Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={usdAmount}
            onChange={(event) => setUsdAmount(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default BuyCryptoForm;