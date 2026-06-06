import "./TransactionFilters.css";
import { FaSearch } from "react-icons/fa";

function TransactionsFilters() {
  return (
    <>
      <div className="search-bar">
        <FaSearch></FaSearch>
        <input type="text" placeholder="Search Transactions" />
      </div>
      <div className="filter-selection">
        <button>All</button>

        <button>Sent</button>

        <button>Received</button>

        <button>Pending</button>

        <button>Failed</button>
      </div>
    </>
  );
}
export default TransactionsFilters;
