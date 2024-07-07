import { Link } from "react-router-dom";
import footLogo from "./assets/littleLemon.png";

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={footLogo}></img>
      <div className="doormat-nav">
        <h3 className="footer-tittle">Doormat Navigation</h3>
        <li className="nav-foot-list">
          <Link to="/About" className="nav-foot-item">
            About
          </Link>
        </li>
        <li className="nav-foot-list">
          <Link to="/" className="nav-foot-item">
            Home
          </Link>
        </li>
        <li className="nav-foot-list">
          <Link to="/Menu" className="nav-foot-item">
            Menu
          </Link>
        </li>
        <li className="nav-foot-list">
          <Link to="/BookingPage" className="nav-foot-item">
            BookingPage
          </Link>
        </li>
      </div>
      <div className="contact">
        <h3 className="footer-tittle">Contact</h3>
        <p className="contact-item">Adress : Chicago St. 234 / No : 76A</p>
        <p className="contact-item">Phone Number : 882 000 34 94</p>
        <p className="contact-item">E-mail : littlelemon@gmail</p>
      </div>
      <div className="social-media">
        <h3 className="footer-tittle">Social Media Links</h3>
        <p className="social-item">Instagram</p>
        <p className="social-item">Facebook</p>
        <p className="social-item">Youtube</p>
      </div>
    </footer>
  );
}

export default Footer;
