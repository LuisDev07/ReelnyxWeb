import React, { useState } from "react";
import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Toastmesaje from "../Toast/Toast";
import logo from '../../assets/Reelnyx.png'; 

const Hero = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="hero">
      <div className="contenedor">
        <div className="logo-contenedor">
          <img
            src={logo}
            alt="Reelnyx Logo"
            className="logo-img"
          />
        </div>
        <div className="descripcion">
          <h1 className="titulo">
            <span>Reelnyx</span> te da la Bienvenida
          </h1>
          <p className="descripcion-texto">
            Aplicacion de Escritorio (windows) para la{" "}
            <span>
              {" "}
              descarga <FaCloudDownloadAlt size={30} />
            </span>{" "}
            de contenido multimedia de diversas plataformas, con una interfaz
            intuitiva y fácil de usar. <br /> <br />
            Te permite{" "}
            <span>
              {" "}
              descargar <FaCloudDownloadAlt size={30} />
            </span>{" "}
            tus videos favoritos en alta calidad de manera rápida y sencilla.
          </p>
          <a className="boton" onClick={() => setShowToast(true)}>
            <FaGithub size={30} />
            Github
          </a>
          <Toastmesaje
            message="No Disponible por el momento, estamos trabajando en ello"
            show={showToast}
            onClose={() => setShowToast(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
