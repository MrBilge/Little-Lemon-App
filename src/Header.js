import logo from "./assets/Logo.png";
import Navbar from "./Navbar";
function Header(props) {
  const { mobile, setMobile, handleMobile } = props;

  return (
    <header className={`Header${mobile ? "active" : ""}`}>
      <img className="little-logo" src={logo}></img>
      <Navbar />
    </header>
  );
}

export default Header;
