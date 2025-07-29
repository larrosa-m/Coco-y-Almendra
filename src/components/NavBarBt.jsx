import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBarBt() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#eae785" }}>
      <Container>
        <Navbar.Brand href="#home">
            <img alt='logo' src='../logo.png' style={{width:"11rem"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2"> Mas vendidos </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBt;