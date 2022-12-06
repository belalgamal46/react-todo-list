import './Navbar.css';

const Navbar = () => (
  <nav className="navbar-container">
    <ul>
      <li>
        <button className="navbar-close-btn" type="button">
          X
        </button>
      </li>
      <li>Home</li>
      <li>About</li>
    </ul>
  </nav>
);

export default Navbar;
