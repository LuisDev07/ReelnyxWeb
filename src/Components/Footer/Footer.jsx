import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

         <img
            src="/src/assets/Reelnyx.png"
            alt="Reelnyx Logo"
            className="logo-footer"
          />

        <p>© {new Date().getFullYear()} Reelnyx. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;