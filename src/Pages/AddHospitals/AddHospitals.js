import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FaPen } from "react-icons/fa";
import "./AddHospitals.css";
function AddHospitals() {
  return (
    <>
      <NavBar />
      <div className="addhospitals-container">
        <p className="addhospitals-paragraph">Home/List Hospitals</p>
        <header className="addhospitals-header">
          <h2>List Hospital</h2>
          <p className="addhospitals-header-paragraph">
            Use the markdown to fill required sections before submitting as soon
            as we approve <br></br> your hospital would appear in search result
          </p>
        </header>
        <div className="addhospitals-wrapper">
          <main className="addhospitals-header-wrapper">
            <p className="addhospitals-edit">
              Edit text &nbsp;{" "}
              <span className="addhospitals-span">
                <FaPen />
              </span>
            </p>
            <span className="addhospitals-button">
              <button className="button draft-btn">Save as draft</button>
              <button className="button public-btn">Post to public</button>
            </span>
          </main>
          <div className="addhospitals-details">
            <form className="addhospitals-form">
              <label className="name">Name of hospital</label>
              <input
                type="text"
                placeholder="type here..."
                className="addhospitals-input"
              />
              <label className="number">Phone Number</label>
              <input
                type="number"
                placeholder="type here..."
                className="addhospitals-input"
              />

              <label className="email">Company Email</label>
              <input
                type="email"
                placeholder="type here..."
                className="addhospitals-input"
              />
              <label className="textarea">Write a short bio:</label>
              <textarea
                rows="4"
                cols="30"
                type="text"
                placeholder=" Write a short bio for your facility here.."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddHospitals;
