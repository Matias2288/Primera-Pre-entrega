import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return(     
     <Navbar bg="primary" mt-2 data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="/" className='Home' as={NavLink}>Almacen Carlitos</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/category/alimentos" className='Alimentos' as={NavLink}>Alimentos</Nav.Link>
        <Nav.Link to="/category/bebidas" className='Bebidas' as={NavLink}>Bebidas</Nav.Link>
        <Nav.Link to="/category/limpieza" className='Limpieza' as={NavLink}>Productos de limpieza</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
  
    );
}