import "./HospitalMainPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/navbar_bar.png";

export default function HospitalMainPage() {
  return (
    <section>
      <NavBar />
      <div className="hospital-main-page-container">
        <div className="hospital-main-page-image-container">
          {/* <img src={Logo} alt="hospital name" /> */}
        </div>
        <div className="hospital-main-page-details">
          <h3>RiverView Hospital</h3>
          <p>
            Our processes have been optimized so you can do this in 3 simple and
            straightforward steps.
          </p>
        </div>
      </div>
      <span className="homepage">
        <NavLink to="/" className="homepage">
          &larr;
        </NavLink>
      </span>
      <Footer />
    </section>
  );
}
