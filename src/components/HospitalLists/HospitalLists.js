import signup from "./sign-up.png";
import account from "./account.png";
import hospital from "./hospital.png";
import "./HospitalLists.css";

function HospitalLists() {
  return (
    <article className="hospital-wrapper">
      <div className="hospital-container">
        <div className="hospital-about">
          <h1>Got a Hospital you want to list?</h1>
          <p>
            We could assist you in placing your hospital to get shown when
            searched for in 3 simple steps
          </p>
        </div>
        <div className="hospital-features">
          <div className="feature">
            <img src={signup} alt="stethoscope" className="feature-image" />
            <h3>Sign-Up with us</h3>
            <p>
              We could assist you in placing your hospital to get shown when
              searched for in 3 simple steps
            </p>
          </div>
          <div className="feature">
            <img
              src={account}
              alt="doctor-patient interaction"
              className="feature-image"
            />
            <h3>Create an account</h3>
            <p>
              Find all relevant sections, to populate the fields and get your
              hospital listed on our platform
            </p>
          </div>
          <div className="feature">
            <img
              src={hospital}
              alt="hospital hallway"
              className="feature-image"
            />
            <h3>List your hospital</h3>
            <p>
              Follow the prompts and fill all relevant sections, and get your
              hospital listed as soon as we approve
            </p>
          </div>
        </div>
        <div className="feature-button">
          <button className="btn form-btn">Get started now &rarr;</button>
          <p>
            <span>&#128337;</span>
            10 minutes to complete
          </p>
        </div>
      </div>
    </article>
  );
}

export default HospitalLists;
