import "./Transactions.css"
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import TransactionStats from "../../components/Transactions/TransactionStats/TransactionStats";
import TransactionsFilters from "../../components/Transactions/TransactionFilters/TransactionFilters";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";
import { Link } from "react-router-dom";
function Transactions() {
  return (
    <>
      <div className="transactions-layout">
        <Sidebar />

        <div className="transactions-main">
          <Header />
          <TransactionStats></TransactionStats>
          <div className="transactions-content"></div>
          <div className="transactions-searc-filters">
            <div className="transactions-row"></div>
            <TransactionsFilters>
            </TransactionsFilters>
          </div>
          <div className="transactions-table">
            <TransactionTable></TransactionTable>
          </div>
        </div>
      </div>
    </>
  );
}
export default Transactions;