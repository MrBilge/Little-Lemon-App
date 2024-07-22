import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [mobileMod, setMobileMod] = useState(false);

  function handleMobile() {
    setMobileMod(!mobileMod);
  }

  return (
    <>
      <nav className="navbar-desktop">
        <ul id="nav-list">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/BookingPage" className="nav-item">
              BookingPage
            </Link>
          </li>
          <li>
            <Link to="/CustomersSay" className="nav-item">
              CustomersSay
            </Link>
          </li>
          <li>
            <Link to="/Menu" className="nav-item">
              Menu
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <nav onClick={handleMobile} className="navbar-mobile">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </nav>
      {mobileMod && (
        <div className="dropdown-menu">
          <ul className="dropdown-list">
            <div className="list-container">
              <li>
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </li>
              <hr></hr>
            </div>
            <div className="list-container">
              <li>
                <Link className="nav-item" to="/About">
                  About
                </Link>
              </li>
            </div>
            <hr></hr>
            <div className="list-container">
              <li>
                <Link className="nav-item" to="/CustomersSay">
                  CustomersSay
                </Link>
              </li>
            </div>
            <hr></hr>
            <div className="list-container">
              <li>
                <Link className="nav-item" to="/Specials">
                  Specials
                </Link>
              </li>
            </div>
            <hr></hr>
            <div className="list-container">
              <li>
                <Link className="nav-item" to="/Login">
                  Login
                </Link>
              </li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
