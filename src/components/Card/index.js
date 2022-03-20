import React, { useState } from "react";
import "./index.style.css";
import ModalCroos from "../Modal/ModalCroos";
import ModalFinishing from "../Modal/ModalFinishing";
import ModalPackagin from "./../Modal/ModalPackaging";

function Cards() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <h2 className="CardTitle"> Nos ajustamos a la medida de tu negocio</h2>
      <p className="CardP">
        En wigou contamos con una amplia cantidad de socios calificados en el
        área de logística ecommerce, convirtiéndonos en una empresa joven,
        sólida y con la experiencia necesaria para encarar tus necesidades{" "}
      </p>

      <div className="CardContainer">
        <div className="CardContainer__card">
          <a onClick={() => setShow(true)}>
            <img
              className="imgCard"
              variant="top"
              src="./crossDocking.png"
              alt="croosdocking"
            />
          </a>
        </div>
        <div className="CardContainer__card">
          <a onClick={() => setShow3(true)}>
            <img
              className="imgCard"
              variant="top"
              src="./packaging.png"
              alt="packaging"
            />
          </a>
        </div>

        <div className="CardContainer__card">
          <a onClick={() => setShow2(true)}>
            <img
              className="imgCard"
              variant="top"
              src="./finishing.png"
              alt="finishing"
            />
          </a>
        </div>

        <ModalCroos estado={show} cambiarEstado={setShow} />
        <ModalFinishing estado={show2} cambiarEstado={setShow2} />
        <ModalPackagin estado={show3} cambiarEstado={setShow3} />
      </div>
    </>
  );
}

export default Cards;
