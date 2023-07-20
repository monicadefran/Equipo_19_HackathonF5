import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../Css/Navbar.css';
import nav from '../assets/nav.png';
import logo from '../assets/logo.png';

function NavScrollExample() {
  const contactEmail = 'contacto@tudominio.com'; 
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} height="40" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Createads">Publicar</Nav.Link>
              <Nav.Link href={`mailto:${contactEmail}`}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ position: 'relative' }}>
        <img src={nav} height="100%" className="d-block align-top mx-auto" alt="Nav" />
        <div className='textimage'>
          Potencia tu proyecto con el banco de tiempo de desarrolladores:
          intercambia habilidades, construye sinergias y haz realidad tus ideas con expertos tech voluntarios.
        </div>
      </div>
    </>
  );
}

export default NavScrollExample;
