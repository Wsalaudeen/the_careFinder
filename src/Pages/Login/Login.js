import "./Login.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Oauth from "../../components/Oauth/Oauth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  function handleOnChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleOnClick() {
    setShowPassword((prevState) => !prevState);
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login was succesful!!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }
  return (
    <section>
      <div className="sign-up-form">
        <h1>Login Here</h1>
        <div className="sign-up-input">
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              id="email"
              placeholder="&#9993; Email"
              value={email}
              onChange={handleOnChange}
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="&#42;&#42;&#42; Password"
                id="password"
                value={password}
                onChange={handleOnChange}
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
                Don't you have an account?{" "}
                <Link to="/sign-up" className="login-css">
                  Register
                </Link>
              </p>
              <p className="account-forgot">
                <Link to="/forgot-password " className="forgot-css">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button className="sign-up-btn">login</button>
            <p>Or login with </p>
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
