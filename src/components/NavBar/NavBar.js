import { useEffect, useState } from "react";
import Logo from "./navbar_bar.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [pageState, setPageState] = useState("Login");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Login");
      }
    });
  }, [auth]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav data-testid="navbar1" className="navbar">
      <div className="navbar-container">
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
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <NavLink to="/profile">
              <button className="btn active-btn">{pageState}</button>
            </NavLink>
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
