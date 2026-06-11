import "./Dashboard.css";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import BalanceCard from "./BalanceCard/BalanceCard";
import RecentTransactions from "./RecentTransactions/RecentTransactions";

import DashboardAnalytics from "./DashboardAnalytics/DashboardAnalytics";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Header />

        <div className="top-cards">
          <BalanceCard />
        </div>

        <div className="bottom-cards">

          <RecentTransactions />

          <DashboardAnalytics />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;