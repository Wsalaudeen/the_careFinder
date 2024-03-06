import usersimage from "./users-guide-image.png";
import "./UsersGuide.css";

function UsersGuide() {
  return (
    <section className="users-guide">
      <div className="users-steps-guide">
        <h2>The best method of finding quality hospitals in your region</h2>
        <p className="users-paragraph">
          Our process have been optimized so that you can do this in 3 simple
          and straightforward steps
        </p>
        <div className="users-steps-wrapper">
          <div className="users-step">
            <div className="users-step-circle">1</div>
            <p> Log on to our websitte and locate the search button</p>
          </div>
          <span className="line">
            <svg height="40" width="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "#e7e7e7", strokeWidth: 2 }}
              />
            </svg>
          </span>
          <div className="users-step">
            <div className="users-step-circle">2</div>
            <p>
              Type in your location, Zipcode or Postal code and click the Search
              button
            </p>
          </div>
          <span className="line">
            <svg height="40" width="10" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "#e7e7e7", strokeWidth: 2 }}
              />
            </svg>
          </span>
          <div className="users-step">
            <div className="users-step-circle">3</div>
            <p>
              Wait for results to load and browse through. You can also click on
              location icons to select a location on the Map.
            </p>
          </div>
        </div>
        <div className="users-button">
          <button className="btn form-btn">Try it now &rarr;</button>
        </div>
      </div>
      <div className="users-guide-image">
        <div className="users-image">
          <img
            src={usersimage}
            alt="a doctor doing  his job"
            className="users-img"
          />
        </div>
      </div>
    </section>
  );
}

export default UsersGuide;
