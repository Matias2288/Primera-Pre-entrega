import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(     
     <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Almacen Carlitos</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Alimentos</Nav.Link>
        <Nav.Link href="#features">Bebidas</Nav.Link>
        <Nav.Link href="#pricing">Productos de limpieza</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
  
    );
}