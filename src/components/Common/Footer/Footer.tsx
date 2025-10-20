import logo from '../../../assets/Logo_Alexandre_Ruggeri.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <img src={logo} alt="Logo d'Alexandre Ruggeri" className="footer__logo" />
      <p className="footer__text">
        &copy; {currentYear} Alexandre Ruggeri. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
