import { Link } from 'react-router-dom';
import logo from '../../assets/Logo Alexandre Ruggeri.png';
import NavLinks from '../Navigation/NavLinks';
import './Header.scss';

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          src={logo}
          alt="Logo d'Alexandre Ruggeri"
          className="logo-ruggeri"
        />
      </Link>
      <NavLinks />
    </header>
  );
}

export default Header;
