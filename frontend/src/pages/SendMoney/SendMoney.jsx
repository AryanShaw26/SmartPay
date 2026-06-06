import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import RecipientCard from "../../components/SendMoney/RecipientCard/RecipientCard";
import SendMoneyForm from "../../components/SendMoney/SendMoneyForm/SendMoneyForm";
import "./SendMoney.css";
import TransferSummary from "../../components/SendMoney/TransferSummary/TransferSummary";
import RecentRecipients from "../../components/SendMoney/RecentRecipients/RecentRecipients";
function SendMoney() {
  return (
    <div className="sendmoney-layout">
      <Sidebar />

      <div className="sendmoney-main">
        <Header />

        <div className="recipient-content">
          <RecipientCard />
        </div>
        <div className="sendmoney-form-content">
          <div className="sendmoney-row">
            <SendMoneyForm></SendMoneyForm>
            <TransferSummary></TransferSummary>
          </div>
        </div>
        <RecentRecipients></RecentRecipients>
      </div>
    </div>
  );
}

export default SendMoney;
