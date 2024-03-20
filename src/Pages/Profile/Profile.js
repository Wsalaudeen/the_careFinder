import { useState } from "react";
import "./Profile.css";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function handleLogout() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <section className="profile">
        <h1 className="profile-heading">My Profile</h1>
        <div className="profile-input-wrapper">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              className="profile-input"
            />
            <input
              type="email"
              id="email"
              value={email}
              className="profile-input"
            />
            <div className="profile-paragraph">
              <p>
                Do you want to change your name?{" "}
                <span className="profile-span">Edit</span>
              </p>
              <p className="profile-out" onClick={handleLogout}>
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
