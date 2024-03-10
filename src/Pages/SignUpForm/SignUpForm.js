import "./SignUpForm.css";
import logo from "../../Images/navbar_bar.png";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export default function SignUpForm() {
  return (
    <section>
      {/* <NavBar /> */}
      <div className="sign-up-logo">
        <img src={logo} alt="careFinder" className="sign-up-image" />
      </div>
      <div className="sign-up-form">
        <h1> Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>

        <div className="sign-up-input">
          <input type="text" placeholder="&#937; Name" />
          <input type="email" placeholder="&#9993; Email" />
          <input type="text" placeholder="&#42;&#42;&#42; Password" />
        </div>
        <button className="sign-up-btn">Sign-Up</button>
        <p>Or sign up with </p>

        <span className="sign-up-social-icons">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
        <span className="to-homepage">
          <NavLink to="/" className="homepage">
            &larr;
          </NavLink>
        </span>
      </div>
    </section>
  );
}
