import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logoColor.svg"
              width="100%"
              height="50"
              className="d-inline-block align-top"
              alt="Wigou"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.instagram.com/wigou.com.ar/">
                Instagram
              </Nav.Link>
              <Nav.Link href="#link">Wathsapp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
