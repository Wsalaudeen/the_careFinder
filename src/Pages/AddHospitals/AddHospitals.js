import { FaPen } from "react-icons/fa";
import "./AddHospitals.css";
import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

function AddHospitals() {
  const [markdowntext, setMarkdowntext] = useState("");
  return (
    <>
      <div className="addhospitals-container">
        {/* <h1 className="addhospitals-container-header">Markdown</h1> */}
        {/* <p className="addhospitals-paragraph">Home/List Hospitals</p> */}
        <header className="addhospitals-header">
          <h1>List Hospital</h1>
          {/* <p className="addhospitals-header-paragraph">
            Use the markdown to fill required sections before submitting as soon
            as we approve <br></br> your hospital would appear in search result
          </p> */}
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
              <button className="button draft">Save as draft</button>
              <button className="button public">Post to public</button>
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
                className="textarea"
                id="markdown"
                name="markdown"
                rows="10"
                cols="30"
                type="text"
                value={markdowntext}
                onChange={(e) => setMarkdowntext(e.target.value)}
                placeholder="How to use Markdown
          Heading 1	#
          Heading 2	##
          Heading 3	###
          Italics	*italics*
          Bold	**Bold**
          Strike	~~insert text~~
          Block quote	>
          Links	[link name](link.com)
          Unordered list	* List item * List item
          Code Block	`insert code here`"
              ></textarea>

              <div
                className="markdown-result"
                dangerouslySetInnerHTML={{ __html: md.render(markdowntext) }}
              ></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddHospitals;
