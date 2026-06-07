import "./SearchBeneficiary.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBeneficiary() {

  const [searchTerm, setSearchTerm] = useState("");

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <div className="search-preview">
        <p>
          Searching for: <strong>{searchTerm}</strong>
        </p>
      </div>

    </div>
  );
}

export default SearchBeneficiary;