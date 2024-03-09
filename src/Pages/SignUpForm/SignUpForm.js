import "./SignUpForm.css";
import logo from "../../Images/navbar_bar.png";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SignUpForm() {
  return (
    <section>
      <div className="sign-up-logo">
        <img src={logo} alt="careFinder" className="sign-up-image" />
      </div>
      <div className="sign-up-form">
        <h1> Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
      </div>
      <div className="sign-up-input"></div>
    </section>
  );
}
