import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Убедитесь, что вы импортируете свои стили

function MyNavbar() {
  return (
    <Navbar className="custom-navbar bg-white" expand="lg">
      <Navbar.Brand as={Link} to="/">Личный блог</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/notes">Заметки</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Галерея</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Любимое</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
