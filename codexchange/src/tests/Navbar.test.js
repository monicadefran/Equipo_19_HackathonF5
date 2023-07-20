import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import NavScrollExample from '../Components/Navbar';

test('renders Navbar component', () => {
  render(
    <BrowserRouter>
      <NavScrollExample />
    </BrowserRouter>
  );

  const inicioLink = screen.getByText('Inicio');
  const publicarLink = screen.getByText('Publicar');
  const contactoLink = screen.queryByText('Contacto');

  expect(inicioLink).toBeInTheDocument();
  expect(publicarLink).toBeInTheDocument();
  expect(contactoLink).toBeInTheDocument();

  fireEvent.click(inicioLink);
  expect(window.location.pathname).toBe('/');

  fireEvent.click(publicarLink);
  expect(window.location.pathname).toBe('/Createads');

  expect(contactoLink).toHaveAttribute('href', 'mailto:contacto@tudominio.com');
});

