import React from 'react';
import './Footer.css';
import logo from '../../assets/Reelnyx.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

         <img
            src={logo}
            alt="Reelnyx Logo"
            className="logo-footer"
          />

        <p>© {new Date().getFullYear()} Reelnyx. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;