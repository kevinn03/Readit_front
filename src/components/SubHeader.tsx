import React from 'react';
import './SubHeader.css';
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
const SubHeader = () => {
  return (
    <div className="Subheader">
      <Navbar className="subheader-nav" bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Yo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SubHeader;
