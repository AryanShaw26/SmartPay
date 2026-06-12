import "./QRGenerator.css";
import { useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

function QRGenerator() {
  const [receiver, setReceiver] = useState("");

  const [amount, setAmount] = useState("");

  const [note, setNote] = useState("");

  const [password, setPassword] = useState("");

  const [qrGenerated, setQrGenerated] = useState(false);

  const qrData = JSON.stringify({
    receiver,
    amount,
    note,
  });

  const handlePayment = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/transactions`,
        {
          user_id: Number(userId),
          recipient: receiver,
          amount: Number(amount),
          purpose: "QR Payment",
          notes: note,
          password,
        },
      );

      alert(response.data.message);

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.detail || "Payment Failed");
    }
  };

  return (
    <div className="qr-generator">
      <div className="generator-header">
        <h2>QR Payments</h2>
      </div>

      <div className="input-group">
        <label>Recipient Name</label>

        <input
          type="text"
          placeholder="Rahul"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Amount</label>

        <input
          type="number"
          placeholder="500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Purpose</label>

        <input
          type="text"
          placeholder="Lunch"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Transaction Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="generate-btn" onClick={() => setQrGenerated(true)}>
        Generate QR
      </button>

      {qrGenerated && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <QRCode value={qrData} size={220} />
        </div>
      )}

      {qrGenerated && (
        <button className="generate-btn" onClick={handlePayment}>
          Pay Now
        </button>
      )}
    </div>
  );
}

export default QRGenerator;
