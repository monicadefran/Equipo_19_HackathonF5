import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notificationCount, setNotificationCount] = useState(0);

 
  const incrementCounter = () => {
    setNotificationCount(prevCount => prevCount + 1);
    handleClose();
  };

  return (
    <>
      <Button className='button' variant="primary" onClick={handleShow}>
        Contacto
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Escribe tu Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Introduce tu comentario</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={incrementCounter}>
            Enviar Notificacion
          </Button>
        </Modal.Footer>
      </Modal>

    
      <p>Emails Recibidos: {notificationCount}</p>
    </>
  );
}

export default Contact;
