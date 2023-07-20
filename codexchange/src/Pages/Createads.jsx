import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import NavScrollExample from '../Components/Navbar';

export default function createdads() {
  return (
    <div>
      <NavScrollExample />
      <Form>
        <Form.Group className="mb-3" controlId="formBasiname">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Introduce tu Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicposition">
          <Form.Label>Posicion</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu Posición" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiccity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu Ciudad" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicskills">
          <Form.Label>Habilidades</Form.Label>
          <Form.Control type="array" placeholder="Introduce tus habilidades" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicnecess">
          <Form.Label>Necesidades</Form.Label>
          <Form.Control type="array" placeholder="Introduce tus Necesidades de Código" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLikedIn">
          <Form.Label>LikedIn</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu LikedIn" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicgithub">
          <Form.Label>GitHub</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu GitHub " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <Footer/>
    </div>
  );
}
