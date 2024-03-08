import "./MainPage.css";
import NavBar from "../NavBar/NavBar";
import SocialIcons from "../SocialIcons/SocialIcons";
import UsersGuide from "../UsersGuide/UsersGuide";
import HospitalLists from "../HospitalLists/HospitalLists";
import Users from "../Users/Users";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <>
      <NavBar />
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
      <SocialIcons />
      <UsersGuide />
      <HospitalLists />
      <Users />
      <Footer />
    </>
  );
}
