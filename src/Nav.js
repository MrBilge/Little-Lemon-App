function Nav() {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          gap: "3rem",
        }}
      >
        <li>
          <a href="#" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a className="nav-item">About</a>
        </li>
        <li>
          <a className="nav-item">Menu</a>
        </li>
        <li>
          <a className="nav-item">Reservation</a>
        </li>
        <li>
          <a className="nav-item">Order</a>
        </li>
        <li>
          <a className="nav-item">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
