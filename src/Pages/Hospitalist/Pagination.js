import "./Pagination.css";
import { hospitalDetails } from "../../Data/HospitalDetails";

const Pagination = ({
  disabledPrev,
  disabledNext,
  page,
  setPage,
  indexOfLastHospital,
}) => {
  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <div className="pagination-button-container">
      <button
        disabled={page === 1}
        aria-disabled={disabledPrev}
        onClick={() => pagination(page - 1)}
        className="pagination-button"
      >
        1
      </button>
      <span>{page}</span>
      <button
        disabled={indexOfLastHospital === hospitalDetails.length}
        aria-disabled={disabledNext}
        onClick={() => pagination(page + 1)}
        className="pagination-button"
      >
        2
      </button>
    </div>
  );
};

export default Pagination;
