import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FaPen } from "react-icons/fa";
import "./MarkDown.css";
function MarkDown() {
  return (
    <>
      <NavBar />
      <div className="markdown-container">
        <header className="markdown-header">
          <h2>List Hospital</h2>
          <p>
            Use the markdown to fill required sections before submitting.As soon
            as we aapprove your hospital would appear in search result
          </p>
        </header>
        <div className="markdown-wrapper">
          <main>
            <p className="markdown-edit">
              Edit text
              <span>
                <FaPen />
              </span>
            </p>
            <span className="markdown-button">
              <button className="draft-btn">Save as draft</button>
              <button className="public-btn">Post to public</button>
            </span>
          </main>
          <div className="markdown-details">
            <form className="markdown-form">
              <div>
                <label className="name">Name of hospital</label>
                <input
                  type="text"
                  placeholder="Type Here..."
                  className="markdown-input"
                />
              </div>
              <div>
                <label className="number">Phone Number</label>
                <input
                  type="number"
                  placeholder="Type Here..."
                  className="markdown-input"
                />
              </div>
              <div>
                <label className="email">Company Email</label>
                <input
                  type="email"
                  placeholder="Type Here..."
                  className="markdown-input"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MarkDown;
