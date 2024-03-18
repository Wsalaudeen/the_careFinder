import "./SignUpForm.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Oauth from "../../components/Oauth/Oauth";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleOnClick() {
    setShowPassword((prevState) => !prevState);
  }
  return (
    <section>
      <div className="sign-up-form">
        <h1> Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
        <div className="sign-up-input">
          <form>
            <input
              type="text"
              id="name"
              placeholder="&#937; Full Name"
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              id="email"
              placeholder="&#9993; Email"
              value={email}
              onChange={onChange}
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="&#42;&#42;&#42; Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <span className="show-password-icons">
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="password-icon"
                    onClick={handleOnClick}
                  />
                ) : (
                  <AiFillEye
                    className="password-icon"
                    onClick={handleOnClick}
                  />
                )}
              </span>
            </div>
            <div className="account">
              <p className="account-login">
                Have an account?{" "}
                <Link to="/log-in" className="login-css">
                  Login
                </Link>
              </p>
              <p className="account-forgot">
                <Link to="/forgot-password " className="forgot-css">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button className="sign-up-btn">Sign-Up</button>
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
