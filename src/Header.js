import Nav from "./Nav";
import logo from "./assets/Logo.png";
function Header() {
  return (
    <header className="Header">
      <img src={logo} style={{maxWidth:'250px'}}></img>
      <Nav />
    </header>
  );
}

export default Header;
