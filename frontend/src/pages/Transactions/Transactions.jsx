import "./Transactions.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import TransactionStats from "../../components/Transactions/TransactionStats/TransactionStats";
import TransactionsFilters from "../../components/Transactions/TransactionFilters/TransactionFilters";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";
import { useEffect, useState } from "react";
import axios from "axios";
function Transactions() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [transactions,setTransactions]=useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/transactions")
    .then((response)=>{
      setTransactions(response.data);
    })
    .catch((error)=>{
      console.log("Error:",error);
    });
  },[]);

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