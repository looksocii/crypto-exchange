import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Row, Col} from 'react-bootstrap';
import CryptoCard from '../components/CryptoCard';

export default function Market() {
  const [cryptoPrices, setCryptoPrices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,near,litecoin,cardano&vs_currencies=usd&include_24hr_change=true'
      );
      const data = await response.json();
      setCryptoPrices(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Head>
        <title>Crypto Prices</title>
        <meta name="description" content="Real-time Crypto Prices" />
      </Head>
      <Row className="mt-5">
        <Col>
          <h1>Markets Overview</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {Object.entries(cryptoPrices).map(([key, value]) => (
          <CryptoCard key={key} name={key} value={value} />
        ))}
      </Row>
    </Container>
  );
}
