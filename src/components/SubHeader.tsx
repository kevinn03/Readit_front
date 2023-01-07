import React from 'react';
import './SubHeader.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
const SubHeader = () => {
  const displayAbout = (): void => {
    const aboutEle = document.querySelector('#about');
    aboutEle?.classList.toggle('d-none');
  };

  return (
    <div className="Subheader" id="header-box">
      <Navbar className="subheader-nav" bg="light" expand="md" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">Top</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#world-news">World News</Nav.Link>
              <Nav.Link href="#cdn-news">CDN News</Nav.Link>
              <Nav.Link href="#popular">Popular</Nav.Link>
              <Nav.Link href="#sports">Sports</Nav.Link>
              <Nav.Link href="#politics">Politics</Nav.Link>
              <Nav.Link href="#real-estate">Real Estate</Nav.Link>
              <Nav.Link href="#entertainment">Entertainment</Nav.Link>
              <Nav.Link href="">
                <span className="about" onClick={displayAbout}>
                  About
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SubHeader;
