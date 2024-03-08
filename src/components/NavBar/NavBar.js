import { useState } from "react";
import Logo from "./navbar_bar.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./NavBar.css";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="carefinder_logo" />
        </div>

        <div
          className="menu-icon"
          onClick={handleShowNavbar}
          aria-label="Hamburger menu"
          role="Toggle menu"
        >
          <Hamburger />
        </div>
        <div className={`navbar-elements  ${showNavbar ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact us">Contact Us</NavLink>
            </li>
            <button className="btn active-btn">Login</button>
            <NavLink to="/sign-up">
              <button className="btn active-btn form-btn">Sign Up</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
