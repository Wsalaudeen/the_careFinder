import { FcGoogle } from "react-icons/fc";
import "./Oauth.css";

export default function Oauth() {
  return (
    <button className="oauth">
      <FcGoogle className="google" /> Continue With Google
    </button>
  );
}
