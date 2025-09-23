import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBarBt() {
  const { cart } = useContext(CartContext); 

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f6dcbf" }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
            <img alt='logo' src='../logo.png' style={{width:"14rem"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/categories/Galletas">Galletas</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/categories/Alfajores">Alfajores</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/categories/Budines">Budines</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {cart.length > 0  && <NavLink to='/cart' style={{textDecoration:'none', color:'black'}}><CartWidget/></NavLink>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBt;