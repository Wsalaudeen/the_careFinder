import { useState } from "react";
import "./Profile.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import NavBar from "../../components/NavBar/NavBar";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function handleLogout() {
    auth.signOut();
    navigate("/");
  }
  // function handleEdit() {
  //   setChangeDetail((prevState) => !prevState);
  // }

  function handleOnChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function handleOnSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("profile details updated");
    } catch (error) {
      toast.error("could not update the profile details");
    }
  }

  return (
    <>
      <NavBar />
      <section className="profile">
        <h1 className="profile-heading">My Profile</h1>
        <div className="profile-input-wrapper">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={handleOnChange}
              className={`profile-input ${changeDetail && "profile-red"}`}
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
                <span
                  onClick={() => {
                    changeDetail && handleOnSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="profile-span"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p className="profile-out" onClick={handleLogout}>
                Log Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
