import "./App.css";
import Logo from "./Images/navbar.png";
import { NavLink } from "react-router-dom";
// import Hamburger from "hamburger-react";
import { useState } from "react";

export default function App() {
  return (
    <div className="NavBar">
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <header className="container">
      <div className="Logo">
        <img src={Logo} alt="carefinder_logo" />
      </div>
      <nav className="NavBar">
        <div>
          <ul className="NavBar_list">
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : { color: "#0000ff" }
                }
                className="link"
                to="/"
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : { color: "#0000ff" }
                }
                className="link"
                to="/"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : { color: "#0000ff" }
                }
                className="link"
                to="/"
              >
                Contact Us
              </NavLink>
            </li>
            <button className="btn">Login</button>
            <button className="btn">Sign up</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}
