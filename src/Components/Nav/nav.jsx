import React from "react";
import "./Nav.css";
import { FiCloud } from "react-icons/fi";

const nav = () => {
  return (
    <div className="navar">
      <span></span>
      <h3> <FiCloud size={40} color="lightgreen" /> Cansado de Descargar tus videos en paginas de Dudosa Procedencia</h3>
    </div>
  );
};

export default nav;
