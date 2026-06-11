import "./Transactions.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";

import { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
    const userId =
      localStorage.getItem("user_id");

    axios
      .get(
        `http://127.0.0.1:8000/transactions/${userId}`
      )
      .then((response) => {
        setTransactions(
          response.data
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredTransactions =
    transactions.filter(
      (transaction) => {
        const recipientMatch =
          transaction.recipient
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const dateMatch =
          new Date(
            transaction.date
          )
            .toLocaleDateString(
              "en-IN"
            )
            .includes(searchTerm);

        return (
          recipientMatch ||
          dateMatch
        );
      }
    );

  return (
    <div className="transactions-layout">
      <Sidebar />

      <div className="transactions-main">
        <Header />

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by recipient or date..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
          />
        </div>

        <TransactionTable
          transactions={
            filteredTransactions
          }
        />
      </div>
    </div>
  );
}

export default Transactions;