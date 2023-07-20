import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nav from '../assets/nav.png';
import logo from '../assets/logo.png'; 
import '../Css/Navbar.css'; 
import { Link } from "react-router-dom";

function NavScrollExample() {
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
              <Nav.Link href="#action2">Contacto</Nav.Link>
              <NavDropdown title="Que necesitas" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/CardGrid#buscar">Buscar</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/Createads">Publicar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Ver todos los coders</NavDropdown.Item>
              </NavDropdown>
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
