import { NavLink } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function HospitalDetail({ hospitalsData }) {
  return (
    <>
      <div className="hospital-detail-container">
        <div className="hospital-detail-image">
          <img
            src={hospitalsData.hospitalImage}
            alt={hospitalsData.hospitalName}
            className="hospital-image"
          />
        </div>
        <div className="hospital-details">
          <h3 className="hospital-detail-name">{hospitalsData.hospitalName}</h3>
          <p className="hospital-detail-info">{hospitalsData.hospitalInfo}</p>
          <p className="hospital-detail-proximity">
            <span className="hospital-detail-span">🏃</span>
            {hospitalsData.hospitalProximity}
          </p>
          <span className="hospital-detail-socials">
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
          </span>
        </div>
      </div>
    </>
  );
}
