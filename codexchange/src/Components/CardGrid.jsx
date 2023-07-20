import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'holderjs';
import Contact from './Contact';

import { Container, Form } from 'react-bootstrap'; // Importa Form desde react-bootstrap

function GridExample() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProperty, setSearchProperty] = useState('Ciudad'); // Propiedad de búsqueda actual

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const apiUrl =
      'http://localhost:8000/coders'

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

  const filteredData = data.filter((coder) =>
    coder[searchProperty].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
   
      <Container style={{ marginTop: '2rem' }}>
        {/* Aquí está la barra de búsqueda */}
        <Form style={{ marginBottom: '2rem' }}> 
          <Form.Group controlId="searchTerm">
            <Form.Control
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearch}
              className="form-control-sm" // Opcional: si quieres que la barra de búsqueda sea más pequeña
            />
          </Form.Group>
        </Form>

        <Row xs={1} md={2} className="g-4">
          {filteredData.map((coder) => (
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
                    {coder.Habilidades.join(', ')}
                  </Card.Text>
                  <Button variant="primary" href={coder.LinkedIn}>
                    LinkedIn
                  </Button>
                  <Button variant="secondary" href={coder.GitHub}>
                    GitHub
                  </Button>
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
