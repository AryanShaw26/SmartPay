import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";

import QRScanner from "../../components/QRPayments/QRScanner/QRScanner";
import QRGenerator from "../../components/QRPayments/QRGenerator/QRGenerator";

import "./QRPayments.css";
import QRPaymentSummary from "../../components/QRPayments/QRPaymentSummary/QRPaymentSummary";
import RecentQRTransactions from "../../components/QRPayments/RecentQRTransactions/RecentQRTransactions";
import { Link } from "react-router-dom";
function QRPayments() {
  return (
    <div className="qrpayments-layout">

      <Sidebar />

      <div className="qrpayments-main">

        <Header />

        <div className="qrpayments-content">

          <div className="qr-top-section">

            <QRScanner />

            <QRGenerator />

          </div>
          <QRPaymentSummary></QRPaymentSummary>
          <RecentQRTransactions></RecentQRTransactions>
        </div>

      </div>

    </div>
  );
}

export default QRPayments;