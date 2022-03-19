import React from "react";
import "./index.style.css";
function Cards() {
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
          <img
            className="imgCard"
            variant="top"
            src="./post3.png"
            alt="croosdocking"
          />
        </div>
        <div className="CardContainer__card">
          <div></div>
          <img
            className="imgCard"
            variant="top"
            src="./post5.png"
            alt="packagin"
          />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Cards;
