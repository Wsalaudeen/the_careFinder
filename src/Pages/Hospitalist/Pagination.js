import "./Pagination.css";
import { hospitalDetails } from "../../Data/HospitalDetails";

const Pagination = ({
  disabledPrev,
  disabledNext,
  page,
  setPage,
  indexOfLastHospital,
  searchResult,
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
        Prev
      </button>
      <span>{page}</span>
      <button
        disabled={indexOfLastHospital === searchResult.length}
        aria-disabled={disabledNext}
        onClick={() => pagination(page + 1)}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
