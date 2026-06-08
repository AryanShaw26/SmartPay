import "./Transactions.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import TransactionStats from "../../components/Transactions/TransactionStats/TransactionStats";
import TransactionsFilters from "../../components/Transactions/TransactionFilters/TransactionFilters";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";
import { useState } from "react";

function Transactions() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [transactions] = useState([
    {
      id: 1,
      date: "5 Jun 2026",
      recipient: "Raj Sharma",
      amount: 5000,
      type: "Sent",
      status: "Success",
    },
    {
      id: 2,
      date: "4 Jun 2026",
      recipient: "Aman Gupta",
      amount: 2000,
      type: "Sent",
      status: "Success",
    },
    {
      id: 3,
      date: "3 Jun 2026",
      recipient: "Priya Singh",
      amount: 1500,
      type: "Received",
      status: "Pending",
    },
    {
      id: 4,
      date: "2 Jun 2026",
      recipient: "Rohit Das",
      amount: 3000,
      type: "Sent",
      status: "Failed",
    },
  ]);

  const filteredTransactions = transactions.filter(
    (transaction) => {
      const matchesFilter =
        selectedFilter === "All" ||
        transaction.type === selectedFilter ||
        transaction.status === selectedFilter;

      const matchesSearch =
        transaction.recipient
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.status
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    }
  );

  return (
    <div className="transactions-layout">
      <Sidebar />

      <div className="transactions-main">
        <Header />

        <TransactionStats />

        <TransactionsFilters
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <TransactionTable
          transactions={filteredTransactions}
        />
      </div>
    </div>
  );
}

export default Transactions;