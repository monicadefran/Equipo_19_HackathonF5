
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'holderjs';
import { Container } from 'react-bootstrap';
import Contact from './Contact';


function GridExample() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProperty, setSearchProperty] = useState('Nombre'); // Propiedad de búsqueda actual

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl = 'https://hackaton-fd4b0-default-rtdb.firebaseio.com/coders.json';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectProperty = (event) => {
    setSearchProperty(event.target.value);
  };

  const filteredData = data.filter(coder =>
    coder[searchProperty].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
   <Container style={{ marginTop: '2rem' }}>
      <Row xs={1} md={2} className="g-4">
        {filteredData.map(coder => (
          <Col key={coder.id}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{coder.Nombre}</Card.Title>
                <Card.Text>
                  {coder.Posicion}
                  <br />
                  {coder.Ciudad}
                  <br />
                  {coder.Habilidades.join(", ")}
                </Card.Text>
                <Button variant="primary" href={coder.LinkedIn}>
                  LinkedIn
                </Button>
                <Button variant="secondary" href={coder.GitHub}>
                  GitHub
                </Button>
                <Contact />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default GridExample;