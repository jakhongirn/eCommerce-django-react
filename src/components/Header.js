import React from "react";
import {Navbar, Nav, Container, Row} from 'react-bootstrap';

function Header() {
  return (
      <header>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
          <Navbar.Brand href="#home">SundayShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><i className="fas fa-user"></i> Login</Nav.Link>
              <Nav.Link href="#link"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

  );
}

export default Header;
