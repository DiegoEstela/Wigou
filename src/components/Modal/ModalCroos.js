import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ModalCroos.style.css";

function ModalCroos({ estado, cambiarEstado }) {
  return (
    <>
      <Modal
        show={estado}
        onHide={() => {
          cambiarEstado(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="ModalTitle">CROOS DOCKING</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          VENDES, RETIRAMOS, ENTREGAMOS
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="ModalBtnSalir"
            variant="light"
            onClick={() => {
              cambiarEstado(false);
            }}
          >
            Salir
          </Button>
          <Button
            className="ModalBtnSaber"
            variant="light"
            onClick={() => {
              cambiarEstado(false);
            }}
          >
            <a
              className="link"
              href="https://www.instagram.com/wigou.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Más Info
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCroos;
