
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
  );
};

export default NavBar;