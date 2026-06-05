import "./Dashboard.css";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import BalanceCard from "./BalanceCard/BalanceCard";
import QuickActions from "./QuickActions/QuickActions";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import Analytics from "./Analytics/Analytics";
function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Header />

        <div className="top-cards">
          <BalanceCard />
          <QuickActions />
          <RecentTransactions></RecentTransactions>
          <Analytics></Analytics>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;