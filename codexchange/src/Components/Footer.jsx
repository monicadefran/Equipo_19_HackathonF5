import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
   return (
     <footer className="bg-dark text-light mt-5">
       <Container fluid className="w-75">
         <Row>
           <Col  className="text-center">
             <p>Footer information</p>
           </Col>
         </Row>
       </Container>
     </footer>
   );
 };
 
 export default Footer;
 