import google from "./Facebook.png";
import facebook from "./Google.png";
import youtube from "./YouTube.png";
import pinterest from "./Pinterest.png";
import twitch from "./Twitch.png";
import webflow from "./Webflow - Copy.png";
import "./SocialIcons.css";

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

export default SocialIcons;
