import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Jean"; // Remplacez par votre prénom ou laissez vide pour tester

const App = () => {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h3>Bonjour {firstName ? firstName : "!"}</h3>
        {firstName && <img src="https://example.com/welcome-image.jpg" alt="Welcome" style={{ width: '100px' }} />} {/* Remplacez par une image valide */}
      </div>
    </Container>
  );
};

export default App;
