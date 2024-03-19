import "./Forgot.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Oauth from "../../components/Oauth/Oauth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function Forgot() {
  const [email, setEmail] = useState("");
  function handleOnChange(e) {
    setEmail(e.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent!");
    } catch (error) {
      toast.error("could not send reset password");
    }
  }

  return (
    <section>
      <div className="sign-up-form">
        <h1>Forgot Password??</h1>
        <div className="sign-up-input">
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              id="email"
              placeholder="&#9993; Email"
              value={email}
              onChange={handleOnChange}
            />
            <div className="account">
              <p className="account-login">
                Don't have an account?{" "}
                <Link to="/sign-up" className="login-css">
                  Register
                </Link>
              </p>
              <p className="account-forgot">
                <Link to="/log-in " className="forgot-css">
                  Login Instead
                </Link>
              </p>
            </div>
            <button type="submit" className="sign-up-btn">
              Send Reset Password
            </button>
            <p>Or sign up with </p>
            <Oauth />
          </form>
        </div>
        <span className="to-homepage">
          <NavLink to="/" className="homepage">
            &larr;
          </NavLink>
        </span>
      </div>
    </section>
  );
}
