import "./App.css";

import google from "./Images/Google.png";
import facebook from "./Images/Facebook.png";
import youtube from "./Images/YouTube.png";
import pinterest from "./Images/Pinterest.png";
import twitch from "./Images/Twitch.png";
import webflow from "./Images/Webflow - Copy.png";
import usersimage from "./Images/users-guide-image.png";
import signup from "./Images/sign-up.png";
import account from "./Images/account.png";
import hospital from "./Images/hospital.png";
import "./MainPage.css";
import "./SocialIcons.css";
import "./UsersGuide.css";
import "./HospitalList.css";
import "./UserReview.css";
import "./footer.css";

const InitialFriends = [
  {
    id: 933372,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },

  {
    id: 938372,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 933772,
    userName: "Sarah",
    userImage:
      "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 499476,
    userName: "Anthony",
    userImage:
      "https://media.istockphoto.com/id/1432257450/photo/a-smaller-group-of-new-programmers-learn-coding-programming-languages-and-computer-science.jpg?s=612x612&w=0&k=20&c=8tpt1mRL6HyORnh3IH7o3gd9JpwC6IXOqMtORPusIKc=",
    userComment:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <MainPage />
      <SocialIcons />
      <UsersGuide />
      <HospitalLists />
      <Users />
      <Footer />
    </div>
  );
}

function MainPage() {
  return (
    <main className="main-page">
      <div className="map-field">
        <div className="map-figure">
          <iframe
            class="map-frame"
            src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=Lagos,%20Nigeria+(CareFinder)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="520"
            height="480"
            role="google map"
          ></iframe>
        </div>
      </div>
      <div className="search-field">
        <h1>Find Hospital Close To Your Residence</h1>
        <p className="search-field-paragraph">
          Are you in need of getting to know the hospital closer to you? fill
          the form below.
        </p>
        <form className="search-form">
          <div className=" search-form-container">
            <label>Enter your location, a zip code, city or state</label>
            <div className="search-input">
              <input
                className="search"
                type="text"
                placeholder=" Your location..."
              />
              <button className="btn form-btn">Search</button>
            </div>
            <p>-or</p>
            <a href="/">Use my location</a>
          </div>
        </form>
      </div>
    </main>
  );
}

function SocialIcons() {
  return (
    <section className="social-media-icons" role="social media icons">
      <div className="social-icons">
        <img src={google} alt="google" />
      </div>
      <div className="social-icons">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="social-icons">
        <img src={youtube} alt="youtube" />
      </div>
      <div className="social-icons">
        <img src={pinterest} alt="pinterest" />
      </div>
      <div className="social-icons">
        <img src={twitch} alt="twitch" />
      </div>
      <div className="social-icons">
        <img src={webflow} alt="webflow" />
      </div>
    </section>
  );
}

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

function Users() {
  const Reviewers = InitialFriends;

  return (
    <section className="users-wrapper">
      <div className="users-header">
        <h1>What our users say</h1>
        <span>
          <svg
            height="40"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            className="bluestroke"
          >
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              style={{ stroke: "#206DF6", strokeWidth: 15 }}
              className="bluestroke"
            />
          </svg>
        </span>
      </div>
      <p className="users-list-paragraph">
        See some of our website's frequent users and their coments about our
        services
      </p>
      <ul className="users-list">
        {Reviewers.map((reviewer) => (
          <Reviewer reviewer={reviewer} key={reviewer.userName} />
        ))}
      </ul>
    </section>
  );
}

function Reviewer({ reviewer }) {
  return (
    <div className="reviewer-wrapper">
      <div className="reviewer-image">
        <img
          src={reviewer.userImage}
          alt={reviewer.userName}
          className="userImage"
        />
      </div>
      <div className="reviewer-content-wrapper">
        <p className="reviewer-content">{reviewer.userComment}</p>
        <h3>{reviewer.userName}</h3>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        {/* <img src={Logo} alt="CareFinder Logo" /> */}
      </div>
      <div className="footer-extras">
        <div className="footer-extra">
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Support</li>
            <li>Getting started</li>
            <li>Help Centre</li>
            <li>Server status</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Follow us</li>
            <li className="socials">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="social-logo"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </span>
              Facebook
            </li>
            <li className="socials">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="social-logo"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </span>
              Instagram
            </li>
            <li className="socials">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="social-logo"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </span>
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
