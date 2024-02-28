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
import signup from "./Images/sign-up.png";
import account from "./Images/account.png";
import hospital from "./Images/hospital.png";
import "./NavBar.css";
import "./MainPage.css";
import "./SocialIcons.css";
import "./UsersGuide.css";
import "./HospitalList.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <SocialIcons />
      <UsersGuide />
      <HospitalLists />
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

function UsersGuide() {
  return (
    <section className="users-guide">
      <div className="users-steps-guide">
        <h2>The best method of finding quality hospitals in your region</h2>
        <p className="users-paragraph">
          Our process have been optimized so that you can do this in 3 simple
          and straightforward steps
        </p>
        <div className="users-steps-wrapper">
          <div className="users-step">
            <div className="users-step-circle">1</div>
            <p> Log on to our websitte and locate the search button</p>
          </div>
          <span className="line">
            <svg height="40" width="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "#e7e7e7", strokeWidth: 2 }}
              />
            </svg>
          </span>
          <div className="users-step">
            <div className="users-step-circle">2</div>
            <p>
              Type in your location, Zipcode or Postal code and click the Search
              button
            </p>
          </div>
          <span className="line">
            <svg height="40" width="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "#e7e7e7", strokeWidth: 2 }}
              />
            </svg>
          </span>
          <div className="users-step">
            <div className="users-step-circle">3</div>
            <p>
              Wait for results to load and browse through. You can also click on
              location icons to select a location on the Map.
            </p>
          </div>
        </div>
        <div className="users-button">
          <button className="btn form-btn">Try it now &rarr;</button>
        </div>
      </div>
      <div className="users-guide-image">
        <div className="users-image">
          <img
            src={usersimage}
            alt="a doctor doing  his job"
            className="users-img"
          />
        </div>
      </div>
    </section>
  );
}

function HospitalLists() {
  return (
    <article className="hospital-wrapper">
      <div className="hospital-container">
        <div className="hospital-about">
          <h1>Got a Hospital you want to list?</h1>
          <p>
            We could assist you in placing your hospital to get shown when
            searched for in 3 simple steps
          </p>
        </div>
        <div className="hospital-features">
          <div className="feature">
            <img src={signup} alt="stethoscope" className="feature-image" />
            <h3>Sign-Up with us</h3>
            <p>
              We could assist you in placing your hospital to get shown when
              searched for in 3 simple steps
            </p>
          </div>
          <div className="feature">
            <img
              src={account}
              alt="doctor-patient interaction"
              className="feature-image"
            />
            <h3>Create an account</h3>
            <p>
              Find all relevant sections, to populate the fields and get your
              hospital listed on our platform
            </p>
          </div>
          <div className="feature">
            <img
              src={hospital}
              alt="hospital hallway"
              className="feature-image"
            />
            <h3>List your hospital</h3>
            <p>
              Follow the prompts and fill all relevant sections, and get your
              hospital listed as soon as we approve
            </p>
          </div>
        </div>
        <div className="feature-button">
          <button className="btn form-btn">Get started now &rarr;</button>
          <p>
            <span>&#128337;</span>
            10 minutes to complete
          </p>
        </div>
        {/* <span className="counter"></span> */}
      </div>
    </article>
  );
}
