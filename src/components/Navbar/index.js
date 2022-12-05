import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <button className="navbar-close-btn">X</button>
        </li>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
