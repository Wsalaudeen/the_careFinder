import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Map from "../../Data/Map";
import { BiDownload, BiShareAlt, BiFilter } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { hospitalDetails } from "../../Data/HospitalDetails";
import HospitalDetail from "./HospitalDetail";
import "./HospitalList.css";
import Pagination from "./Pagination";

export default function Hospitalist() {
  const [hospitalListPerPage] = useState(3);
  const [page, setPage] = useState(1);
  const indexOfLastHospital = page * hospitalListPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalListPerPage;
  const presentHospitals = hospitalDetails.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );
  return (
    <>
      <NavBar />
      <Map />
      <div className="hospital-list-container">
        <div className="hospital-list-number">
          <p>
            <span>20</span>&nbsp; facilities found
          </p>
        </div>
        <div className="hospital-list-icons">
          <BiFilter className="hospital-list-filter" />
          <BiShareAlt className="hospital-list-share" />
          <BiDownload className="hospital-list-download" />
        </div>
      </div>
      <ul className="hospital-list-detail">
        {presentHospitals.map((hospital) => (
          <HospitalDetail hospitalsData={hospital} key={hospital.id} />
        ))}
      </ul>
      <Pagination
        disabledPrev={page === 1}
        disabledNext={indexOfLastHospital === hospitalDetails.length}
        page={page}
        setPage={setPage}
        indexOfLastHospital={indexOfLastHospital}
      />
      <span>
        <NavLink to="/" className="homepage">
          &larr;
        </NavLink>
      </span>
      <Footer />
    </>
  );
}
