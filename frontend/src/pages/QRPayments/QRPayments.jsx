import "./QRPayments.css";

import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import QRGenerator from "../../components/QRPayments/QRGenerator/QRGenerator";

function QRPayments() {
  return (
    <div className="qrpayments-layout">
      <Sidebar />

      <div className="qrpayments-main">
        <Header />

        <div className="qrpayments-content">
          <QRGenerator />
        </div>
      </div>
    </div>
  );
}

export default QRPayments;