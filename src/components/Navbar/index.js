import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navBar.style.css";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const shadow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", shadow);

  return (
    <>
      <Navbar
        className={navbar ? "navActive" : "navInactive"}
        bg="light"
        expand="lg"
        fixed="top"
      >
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
                <span className="LinkNav"> Instagram</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <span className="LinkNav"> Nosotros</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
