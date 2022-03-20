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

  function isMobile() {
    if (sessionStorage.desktop) return false;
    else if (localStorage.mobile) return true;
    var mobile = [
      "iphone",
      "ipad",
      "android",
      "blackberry",
      "nokia",
      "opera mini",
      "windows mobile",
      "windows phone",
      "iemobile",
    ];
    for (var i in mobile)
      if (
        navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0
      )
        return true;
    return false;
  }

  const urlDesktop = "https://web.whatsapp.com/";
  const urlMobile = "whatsapp://";
  const telefono = "5491171086323";

  function addEventListener(e) {
    e.preventDefault();

    setTimeout(() => {
      let mensaje = "send?phone=" + telefono;
      if (isMobile()) {
        window.open(urlMobile + mensaje, "_blank");
      } else {
        window.open(urlDesktop + mensaje, "_blank");
      }
    }, 1000);
  }

  return (
    <>
      <Navbar
        className={navbar ? "navActive" : "navInactive"}
        bg="light"
        expand="lg"
        fixed="top"
      >
        <Container className="p-0">
          <Navbar.Brand>
            <img
              src="/logoColor.svg"
              width="100%"
              height="50"
              className="d-inline-block align-top ps-2"
              alt="Wigou"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="https://www.instagram.com/wigou.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="LinkNav"> Nosotros</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <a onClick={(e) => addEventListener(e)}>
                  <span className="LinkNav"> Hablanos</span>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
