import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Wallet = () => {
  const [user, setUser] = useState({});
  const [wallet, setWallet] = useState({});
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // axios.get('/api/wallet').then((res) => {
    //   setUser(res.data.user);
    //   setWallet(res.data.wallet);
    //   setAssets(res.data.assets);
    // });
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Wallet</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow">
            <Card.Body className="m-2">
              <Card.Title>Balance</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total balance</Card.Subtitle>
              <h2 className="text-success">{wallet.balance} $39,499.72</h2>
              <Card.Subtitle className="mb-2 text-muted">+2,300 (+0.2%)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow">
            <Card.Body className="m-2">
              <Card.Title>Crypto Assets</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">List of your crypto assets</Card.Subtitle>
              <table className="table mt-2">
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Balance</th>
                    <th>Price (USD)</th>
                    <th>Value (USD)</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Bitcoin</td>
                      <td>1.2</td>
                      <td>28,999.89</td>
                      <td>34,799.86</td>
                    </tr>
                    <tr>
                      <td>Ethereum</td>
                      <td>2.5</td>
                      <td>1,859.89</td>
                      <td>4,699.86</td>
                    </tr>
                  {assets.map((asset) => (
                    <tr key={asset.id}>
                      <td>{asset.currency}</td>
                      <td>{asset.balance}</td>
                      <td>{asset.price}</td>
                      <td>{(asset.balance * asset.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Card.Subtitle className="mt-5 text-muted">Copyright © 2023 Crypto Exchange</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;
