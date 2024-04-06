import { NavLink } from "react-router-dom";
// import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import hospitalImage from "../../Images/mitchellai_com.jpg";

export default function HospitalDetail({ hospitalsData }) {
  return (
    <>
      <div className="hospital-detail-container">
        <div className="hospital-detail-image">
          <img
            src={hospitalImage}
            alt="Hospital Image"
            className="hospital-image"
          />
        </div>
        <div className="hospital-details">
          <h3 className="hospital-detail-name">{hospitalsData.name}</h3>
          <p className="hospital-detail-info">
            {hospitalsData.location.formatted_address}
          </p>
          <p className="hospital-detail-info">
            {hospitalsData.location.region}
          </p>
          <p className="hospital-detail-info">
            {hospitalsData.location.country}
          </p>
          <p className="hospital-detail-proximity">
            <span className="hospital-detail-span">🏃</span>
            {hospitalsData.distance}km
          </p>
          {/* <span className="hospital-detail-socials">
            {hospitalsData.hospitalSocials.instagram && (
              <a
                href={hospitalsData.hospitalSocials.instagram}
                className="social-icons"
              >
                <FaInstagram />
              </a>
            )}
            {hospitalsData.hospitalSocials.email && (
              <a
                href={hospitalsData.hospitalSocials.email}
                className="social-icons"
              >
                <FaEnvelope />
              </a>
            )}
            {hospitalsData.hospitalSocials.linkedin && (
              <a
                href={hospitalsData.hospitalSocials.linkedin}
                className="social-icons"
              >
                <FaLinkedin />
              </a>
            )}
          </span> */}
        </div>
      </div>
    </>
  );
}
