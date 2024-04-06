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
import { CSVLink } from "react-csv";

export default function Hospitalist({ searchResult }) {
  const [loading, setloading] = useState(true);
  const [hospitalListPerPage] = useState(3);
  const [page, setPage] = useState(1);
  const indexOfLastHospital = page * hospitalListPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalListPerPage;
  const presentHospitals = searchResult.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const headers = [
    { label: "Hospital Name", key: "name" },
    { label: "Hospital Intro", key: "hospitalIntro" },
    { label: "Hospital Address", key: "results.address" },
  ];

  const csvReport = {
    data: searchResult,
    headers: headers,
    filename: "Hospitals_Search_Report.csv",
  };

  const handleDownloadHospitalsData = () => {
    // Creating a CSV file containing all hospitals information
    const csvData = searchResult.map((hospital) => ({
      hospitalName: hospital.name,
      hospitalIntro: hospital.hospitalIntro,
      coordinates: hospital.geocodes.main,
    }));

    // Generate CSV file and trigger download
    const csvContent = [
      headers.map((header) => header.label).join(","),
      ...csvData.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", csvReport.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  setTimeout(() => {
    setloading(false);
  }, 5000);
  return (
    <>
      <NavBar />
      <Map />
      <div className="hospital-list-container">
        <div className="hospital-list-number">
          <p>
            <span>{searchResult.length}</span>&nbsp; facilities found
          </p>
        </div>
        <div className="hospital-list-icons">
          <BiFilter className="hospital-list-filter" />
          <BiShareAlt className="hospital-list-share" />
          <CSVLink {...csvReport}>
            <BiDownload
              className="hospital-list-download"
              onClick={handleDownloadHospitalsData}
            />
            ;
          </CSVLink>
        </div>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <ul className="hospital-list-detail">
            {presentHospitals.map((hospital) => (
              <HospitalDetail hospitalsData={hospital} key={hospital.fsq_id} />
            ))}
          </ul>
          <Pagination
            disabledPrev={page === 1}
            disabledNext={indexOfLastHospital === searchResult.length}
            page={page}
            setPage={setPage}
            indexOfLastHospital={indexOfLastHospital}
            searchResult={searchResult}
          />
          <span>
            <NavLink to="/" className="homepage">
              &larr;
            </NavLink>
          </span>
          <Footer />
        </div>
      )}
      ;
    </>
  );
}
