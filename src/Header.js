import Nav from "./Nav";
import logo from "./assets/Logo.png";
function Header() {
  return (
    <header className="Header">
      <img className="little-logo" src={logo}></img>
      <Nav />
    </header>
  );
}

export default Header;
