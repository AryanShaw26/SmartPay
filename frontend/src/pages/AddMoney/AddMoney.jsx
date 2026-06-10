import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import AddMoneyForm from "../../components/AddMoney/AddMoneyForm/AddMoneyForm";

import "./AddMoney.css";
import BalancePreview from "../../components/AddMoney/BalancePreview/BalancePreview";
import RecentTopUps from "../../components/AddMoney/RecentTopUps/RecentTopUps";
function AddMoney() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Header />
        <BalancePreview></BalancePreview>

        <div className="add-money-content">
            
          <AddMoneyForm />
        </div>
        <div className="payment-contents">
          <RecentTopUps></RecentTopUps>
        </div>

      </div>

    </div>
  );
}

export default AddMoney;