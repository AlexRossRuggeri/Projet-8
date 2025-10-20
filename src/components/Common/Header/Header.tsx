import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo_Alexandre_Ruggeri.svg';
import NavLinks from '../Navigation/NavLinks';

function Header() {
  return (
    <header role="banner" className="site-header">
      <div className="header-container">
        <div className="large-nav-menu">
          <div className="logo-container">
            <Link to="/">
              <img
                src={logo}
                alt="Logo d'Alexandre Ruggeri"
                className="header__logo"
              />
            </Link>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
