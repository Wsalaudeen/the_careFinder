import { FcGoogle } from "react-icons/fc";
import "./Oauth.css";
import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const navigate = useNavigate();
  async function handleGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //  check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("could not authorize with Google");
    }
  }
  return (
    <button onClick={handleGoogleClick} className="oauth" type="button">
      <FcGoogle className="google" /> Continue With Google
    </button>
  );
}
