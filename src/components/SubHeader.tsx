import React from 'react';
import './SubHeader.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
const SubHeader = () => {
  return (
    <div className="Subheader">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default SubHeader;
