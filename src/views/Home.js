import React from "react";
import NavBar from "../components/Navbar";
import ServicesCard from "../components/ServicesCard";
import Separador from "../components/Separador/Separador";
import Cards from "../components/Card";
import Footer from "../components/Footer";
import "./Home.style.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="h2Container">
        <h2 className="Title">Tu logística nunca fue tan sencilla</h2>
      </div>
      <ServicesCard />
      <Separador />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
