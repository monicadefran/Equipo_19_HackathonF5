import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Router } from 'react-router-dom';

import NavScrollExample from '../Components/Navbar';

test('renders Navbar component', () => {
  render(
    <BrowserRouter>
      <NavScrollExample />
    </BrowserRouter>
  );

  const inicioLink = screen.getByText('Inicio');
  const contactoLink = screen.getByText('Contacto');
  const buscarLink = screen.queryByText((content, element) => content.includes('Buscar') && element.tagName.toLowerCase() === 'a');
  const publicarLink = screen.queryByText('Publicar');
  const verTodosLink = screen.queryByText('Ver todos los coders');

  expect(inicioLink).toBeInTheDocument();
  expect(contactoLink).toBeInTheDocument();
  expect(buscarLink).toBeNull();
  expect(publicarLink).toBeNull();
  expect(verTodosLink).toBeNull();

  fireEvent.click(inicioLink);
  expect(window.location.pathname).toBe('/');

  fireEvent.click(contactoLink);
  expect(window.location.hash).toBe('#action2');
});
