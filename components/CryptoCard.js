import { Col, Card } from 'react-bootstrap';

function CryptoCard({ name, value }) {
  const percentChange = value.usd_24h_change ?? 0;
  const isPositiveChange = percentChange >= 0;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const price = formatter.format(value.usd.toFixed(2));

  return (
    <Col md={3} className="my-3">
      <Card className={isPositiveChange ? 'shadow text-success' : 'shadow text-danger'}>
        <Card.Body>
          <Card.Title>{name.toUpperCase()}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {price} ({isPositiveChange ? '+' : ''}{percentChange.toFixed(2)}%)
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CryptoCard;