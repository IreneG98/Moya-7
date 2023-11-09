import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="">Moya 7</Link>
      </h1>
      <nav>
        <ul id="menu">
          <li>
            <Link to="">Inicio</Link>
          </li>
          <li>
            <Link to="/apartamentos">Apartamentos</Link>
          </li>
          <li>
            <Link to="/memoria-de-calidades">Memoria de Calidades</Link>
          </li>
          <li>
            <Link to="/infografias">Infograías</Link>
          </li>
          <li>
            <Link to="/localizacion">Localización</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
