import "./SearchBeneficiary.css";
import { FaSearch } from "react-icons/fa";

function SearchBeneficiary() {
  return (
    <div className="search-beneficiary">

      <div className="search-header">
        <h2>Search Beneficiary</h2>
      </div>

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Name or Email"
        />

      </div>

    </div>
  );
}

export default SearchBeneficiary;