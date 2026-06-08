import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../Dashboard/Header/Header";
import { useState } from "react";
import QRScanner from "../../components/QRPayments/QRScanner/QRScanner";
import QRGenerator from "../../components/QRPayments/QRGenerator/QRGenerator";

import "./QRPayments.css";
import QRPaymentSummary from "../../components/QRPayments/QRPaymentSummary/QRPaymentSummary";
import RecentQRTransactions from "../../components/QRPayments/RecentQRTransactions/RecentQRTransactions";
import { Link } from "react-router-dom";
function QRPayments() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [qrGenerated, setQrGenerated] =
  useState(false);
  return (
    <div className="qrpayments-layout">
      <Sidebar />

      <div className="qrpayments-main">
        <Header />

        <div className="qrpayments-content">
          <div className="qr-top-section">
            <QRScanner />

            <QRGenerator
              receiver={receiver}
              amount={amount}
              note={note}
              setReceiver={setReceiver}
              setAmount={setAmount}
              setNote={setNote}
              qrGenerated={qrGenerated}
              setQrGenerated={setQrGenerated}
            ></QRGenerator>
          </div>
          <QRPaymentSummary
            receiver={receiver}
            amount={amount}
            note={note}
          ></QRPaymentSummary>
          <RecentQRTransactions></RecentQRTransactions>
        </div>
      </div>
    </div>
  );
}

export default QRPayments;
