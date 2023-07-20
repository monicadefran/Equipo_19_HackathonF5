import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import NavScrollExample from '../Components/Navbar';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const URI = 'http://localhost:8000/coders';



const Createdads = () => {

    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [habilidades, setHabilidades] = useState('')
    const [necesidades, setNecesidades] = useState('')
    const [likedIn, setLikedIn] = useState('')
    const [gitHub, setGitHub] = useState('')
    
    
    const navigate = useNavigate();
  
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Nombre: nombre, Ciudad:ciudad, Habilidades:habilidades, Necesidades:necesidades, LikedIn:likedIn, GitHub:gitHub })
        navigate('/');
        toast.success('¡Usuario agregado exitosamente!');
    }

  
  
    return (
      <div>
        <NavScrollExample />
          <Container>
            <Form onSubmit={store}>
              <Form.Group className="mb-3" controlId="formBasiname">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="name" 
                placeholder="Introduce tu Nombre" 
                value={nombre} 
                onChange={ (e)=> setNombre(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiccity">
              <Form.Label>Ciudad</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Introduce tu Ciudad"
                value={ciudad} 
                onChange={ (e)=> setCiudad(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicskills">
              <Form.Label>Habilidades</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Introduce tus habilidades"
                value={habilidades} 
                onChange={ (e)=> setHabilidades(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicnecess">
              <Form.Label>Necesidades</Form.Label>
                <Form.Control 
                type="array" 
                placeholder="Introduce tus Necesidades de Código"
                value={necesidades} 
                onChange={ (e)=> setNecesidades(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLikedIn">
              <Form.Label>LikedIn</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Introduce tu LikedIn" 
                value={likedIn} 
                onChange={ (e)=> setLikedIn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicgithub">
              <Form.Label>GitHub</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Introduce tu GitHub " 
                value={gitHub} 
                onChange={ (e)=> setGitHub(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                 Enviar
                </Button>
            </Form>
            </Container>
            <Footer/>
          </div>
  
          );
          
        }

export default Createdads
    