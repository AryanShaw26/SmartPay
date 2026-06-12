import "./Analytics.css";

import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import AnalyticsSummaryCards from "../../components/Analytics/AnalyticsSummaryCards/AnalyticsSummaryCards";
import AnalyticsChart from "../../components/Analytics/AnalyticsChart/AnalyticsChart";
import AnalyticsFilters from "../../components/Analytics/DateFilter/AnalyticsFilters";
import AnalyticsTransactions from "../../components/Analytics/AnalyticsTransactions/AnalyticsTransactions";
import StatementDownload from "../../components/Analytics/StatementDownload/StatementDownload";

import { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {
  const [totalReceived, setTotalReceived] = useState(0);

  const [totalAdded, setTotalAdded] = useState(0);

  const [totalSent, setTotalSent] = useState(0);

  const [totalTransactions, setTotalTransactions] = useState(0);

  const [transactions, setTransactions] = useState([]);

  const [chartData, setChartData] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("All Time");
  const handleDownload = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      const response = await axios.get(
        `http://127.0.0.1:8000/download-statement/${userId}`,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "SmartPay_Statement.pdf");

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.log(error);

      alert("Unable to download statement");
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    axios
      .get(`http://127.0.0.1:8000/transactions/${userId}`)
      .then((response) => {
        const transactions = response.data;

        setTransactions(transactions);

        let added = 0;
        let sent = 0;
        let received = 0;

        transactions.forEach((transaction) => {
          if (transaction.purpose === "Add Money") {
            added += Number(transaction.amount);
          } else if (transaction.purpose === "Received Money") {
            received += Number(transaction.amount);
          } else if (transaction.purpose === "Send Money") {
            sent += Number(transaction.amount);
          }
        });

        setTotalAdded(added);
        setTotalReceived(received);
        setTotalSent(sent);

        setTotalTransactions(transactions.length);

        setChartData([
          {
            name: "Add Money",
            value: added,
          },

          {
            name: "Received Money",
            value: received,
          },

          {
            name: "Send Money",
            value: sent,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="analytics-layout">
      <Sidebar />

      <div className="analytics-main">
        <Header />

        <AnalyticsSummaryCards
          totalAdded={totalAdded}
          totalReceived={totalReceived}
          totalSent={totalSent}
          totalTransactions={totalTransactions}
        />

        <AnalyticsFilters
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <AnalyticsChart
          chartData={chartData}
          total={totalAdded + totalReceived + totalSent}
        />

        <AnalyticsTransactions transactions={transactions} />

        <StatementDownload handleDownload={handleDownload} />
      </div>
    </div>
  );
}

export default Analytics;
