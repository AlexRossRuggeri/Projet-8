import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navigation">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <menu className={isOpen ? 'open' : ''}>
        <Link to="/a-propos" onClick={() => setIsOpen(false)}>
          A propos
        </Link>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Projets
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </menu>
    </nav>
  );
}

export default NavLinks;
