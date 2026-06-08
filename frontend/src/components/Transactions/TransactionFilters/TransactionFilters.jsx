import "./TransactionFilters.css";
import { FaSearch } from "react-icons/fa";

function TransactionsFilters({
  selectedFilter,
  setSelectedFilter,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <>
      <div className="search-bar">
        <FaSearch />

        <input
          type="text"
          placeholder="Search Transactions"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      <div className="filter-selection">

        <button
          onClick={() => setSelectedFilter("All")}
        >
          All
        </button>

        <button
          onClick={() => setSelectedFilter("Sent")}
        >
          Sent
        </button>

        <button
          onClick={() => setSelectedFilter("Received")}
        >
          Received
        </button>

        <button
          onClick={() => setSelectedFilter("Pending")}
        >
          Pending
        </button>

        <button
          onClick={() => setSelectedFilter("Failed")}
        >
          Failed
        </button>

      </div>
    </>
  );
}

export default TransactionsFilters;