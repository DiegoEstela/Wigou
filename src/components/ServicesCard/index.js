import React from "react";
import "./ServicesCard.style.css";

import { Button } from "react-bootstrap";
function ServicesCard() {
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
    <div className="ContainerServices">
      <div className="CroosDocking">
        <div className="CroosDocking__left">
          <h2 className="CroosDocking__Title">Cross Docking</h2>
          <p className="CroosDocking__Text">
            En wigou nos ocupamos de tus clientes dándoles asistencia desde
            nuestro customer sobre su envío, tiempos de entrega y los
            acompañamos hasta que les llegue la compra.
          </p>

          <Button
            className="CroosDocking__Button btn btn-light"
            onClick={(e) => addEventListener(e)}
          >
            Comunicate con nosotros
          </Button>
        </div>
        <div className="CroosDocking__right">
          <img
            className="CroosDocking__img"
            src="./foto2.png"
            alt="WigouFoto"
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ServicesCard;
