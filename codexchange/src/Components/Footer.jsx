import React from 'react';
import { IconContext } from "react-icons";
import { Container, Row, Col } from 'react-bootstrap';
import "../Css/Footer.css";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaGoogle 
} from 'react-icons/fa';
const Footer = () => {
   return (
    <footer className="custom-footer text-white text-center py-3">
      <Container>
        <Row className="icons">
          <Col>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
              <div>
                <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="icon-button" />
                </a>
                <a href="https://twitter.com/tu_cuenta_de_twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="icon-button" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon-button" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon-button" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon-button" />
                </a>
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                  <FaGoogle className="icon-button" />
                </a>
              </div>
            </IconContext.Provider>
           </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} CodeXchange </p>
          </Col>
        </Row>
      </Container>
    </footer>
  ); 
};
 
 export default Footer;