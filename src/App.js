import "./App.css";
import Logo from "./Images/navbar.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import google from "./Images/Google.png";
import facebook from "./Images/Facebook.png";
import youtube from "./Images/YouTube.png";
import pinterest from "./Images/Pinterest.png";
import twitch from "./Images/Twitch.png";
import webflow from "./Images/Webflow - Copy.png";
import usersimage from "./Images/users-guide-image.png";
import "./NavBar.css";
import "./MainPage.css";
import "./SocialIcons.css";
import "./UsersGuide.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <SocialIcons />
      {/* <UsersGuide /> */}
    </div>
  );
}

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
            <button className="btn active-btn form-btn">Sign Up</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function MainPage() {
  return (
    <main className="main-page">
      <div className="map-field">
        <div className="map-figure">
          <iframe
            class="map-frame"
            src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=Lagos,%20Nigeria+(CareFinder)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="520"
            height="480"
            role="google map"
          ></iframe>
        </div>
      </div>
      <div className="search-field">
        <h1>Find Hospital Close To Your Residence</h1>
        <p className="search-field-paragraph">
          Are you in need of getting to know the hospital closer to you? fill
          the form below.
        </p>
        <form className="search-form">
          <div className=" search-form-container">
            <label>Enter your location, a zip code, city or state</label>
            <div className="search-input">
              <input
                className="search"
                type="text"
                placeholder=" Your location..."
              />
              <button className="btn form-btn">Search</button>
            </div>
            <p>-or</p>
            <a href="/">Use my location</a>
          </div>
        </form>
      </div>
    </main>
  );
}

function SocialIcons() {
  return (
    <section className="social-media-icons" role="social media icons">
      <div className="social-icons">
        <img src={google} alt="google" />
      </div>
      <div className="social-icons">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="social-icons">
        <img src={youtube} alt="youtube" />
      </div>
      <div className="social-icons">
        <img src={pinterest} alt="pinterest" />
      </div>
      <div className="social-icons">
        <img src={twitch} alt="twitch" />
      </div>
      <div className="social-icons">
        <img src={webflow} alt="webflow" />
      </div>
    </section>
  );
}

// function UsersGuide() {
//   return (
//     <section className="users-guide">
//       <div className="users-steps-guide">
//         <h2>The best method of finding quality hospitals in region</h2>
//         <p>
//           Our process have been optimized so that you can do this in 3 simple
//           and straightforward steps
//         </p>
//       </div>
//       <div className="users-guide-image">
//         <div className="users-image">
//           <img src={usersimage} alt="a doctor doing  his job" />
//         </div>
//       </div>
//     </section>
//   );
// }
