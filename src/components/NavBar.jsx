import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(     
     <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="/" as={NavLink}>Almacen Carlitos</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/category/alimentos" as={NavLink}>Alimentos</Nav.Link>
        <Nav.Link to="/category/bebidas" as={NavLink}>Bebidas</Nav.Link>
        <Nav.Link to="/category/limpieza" as={NavLink}>Productos de limpieza</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
  
    );
}