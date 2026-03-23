
import "./interfaz.css";
import interfazimg from '../../assets/interfaz.png'; 
const interfaz = () => {
  return (
    <div className="interfaz">
      <div className="description-interfaz">
        <h2>
         
          ¿Qué te permite realizar la aplicación?
        </h2>

        <p>
          La aplicación te permite descargar tus videos favoritos de diversas
          plataformas, con una interfaz intuitiva y fácil de usar.
        </p>

        <div className="bloques">
          <div className="ventajas">
            <h3>Ventajas</h3>
            <ul>
              <li>Descargar videos en alta calidad de forma rápida.</li>
              <li>Interfaz intuitiva y fácil de usar.</li>
              <li>Compatible con múltiples plataformas.</li>
            </ul>
          </div>

          <div className="desventajas">
            <h3>Desventajas</h3>
            <ul>
              <li>Limitaciones con contenido protegido.</li>
              <li>Posibles retrasos en actualizaciones.</li>
              <li>No disponible en todos los sistemas.</li>
              <li>No descarga listas de reproducción.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="img-interfaz">
        <img
          src={interfazimg}
          alt="Reelnyx interfaz"
          className="interfaz-img"
        />
      </div>
    </div>
  );
};

export default interfaz;
