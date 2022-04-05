import React from "react";
import "./index.style.css";
function Footer() {
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
  const telefono = "5491133685266";

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
      <div className="footerContainer">
        <div className="footerContainer__left">
          <img
            className="logoFooter"
            src="./logoBlanco.svg"
            height="50"
            width="300"
            alt="wigou"
          />
          <div className="ParrafoAnimado">
            <ul className="ParrafoAnimado_ul">
              <li>VENDES</li>
              <li>RETIRAMOS</li>
              <li>ENTREGAMOS</li>
            </ul>
          </div>
        </div>
        <div className="footerContainer__right">
          <div className="ParrafoContactos">
            <ul className="ParrafoContactos__ul">
              <li className="liHead">CONTACTOS</li>
              <li className="li">
                <a
                  className="link"
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  santi@wigou.com.ar
                </a>
              </li>
              <li className="li">
                <a
                  className="link"
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nacho@wigou.com.ar
                </a>
              </li>
              <li className="liHeadmov">TELEFONOS</li>
              <li className="limov">11-3368-5266</li>
              <li className="limov">11 2253-0838</li>
            </ul>
          </div>
          <div className="ParrafoContactos">
            <ul className="ParrafoServicios_ul">
              <li className="liHead">SERVICIOS</li>
              <li className="li">Cross Docking</li>
              <li className="li">Packaging</li>
              <li className="li">Finishing</li>
            </ul>
          </div>
          <div className="ParrafoContactos">
            <ul className="ParrafoServicios_ul">
              <li className="liHead">TELEFONOS</li>
              <li className="li">11-3368-5266</li>
              <li className="li">11 2253-0838</li>
            </ul>
          </div>

          <div className="Redes">
            <ul className="Redes__ul">
              <li className="lire">
                <a
                  className="link"
                  href="https://www.instagram.com/wigou.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="40px"
                    variant="top"
                    src="./instagram.png"
                    alt="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li className="liWps">
                <a onClick={(e) => addEventListener(e)}>
                  <img
                    width="42px"
                    variant="top"
                    src="./whatsapp.png"
                    alt="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </li>
              <li className="lire">
                <a
                  className="link"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="40px"
                    variant="top"
                    src="./facebook.png"
                    alt="facebook"
                  />
                </a>
              </li>
              <li className="lire">
                <a
                  className="link"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    width="40px"
                    variant="top"
                    src="./linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="FooterEnd">
        WIGOU © 2022- Hosting by Diego Estela | Website by Diego Estela
      </p>
    </>
  );
}

export default Footer;
