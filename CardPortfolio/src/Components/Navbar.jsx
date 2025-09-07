import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className="navbar-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="navbar-link">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="navbar-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="navbar-link">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
