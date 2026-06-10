import "./SendMoneyForm.css";
import { useState } from "react";
import axios from "axios";

function SendMoneyForm() {
  const [recipient, setRecipient] = useState("");

  const [amount, setAmount] = useState("");

  const [purpose, setPurpose] = useState("");

  const [notes, setNotes] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        recipient,
        amount: Number(amount),
        purpose,
        notes,
        password,
        user_id: Number(localStorage.getItem("user_id")),
      };

      console.log("Sending Payload:", payload);
      console.log("USER ID =", localStorage.getItem("user_id"));
      const response = await axios.post(
        "http://127.0.0.1:8000/transactions",
        payload,
      );

      alert(response.data.message);

      setRecipient("");
      setAmount("");
      setPurpose("");
      setNotes("");
      setPassword("");
    } catch (error) {
      console.log("Backend Error:", error.response?.data);

      alert(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Transaction Failed",
      );
    }
  };

  return (
    <div className="send-money-form">
      <h2>Send Money</h2>

      <form onSubmit={handleSubmit}>
        <label>Recipient</label>

        <input
          type="text"
          placeholder="Enter Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />

        <label>Amount</label>

        <input
          type="number"
          placeholder="₹ Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label>Purpose</label>

        <input
          type="text"
          placeholder="Enter Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        />

        <label>Notes</label>

        <textarea
          placeholder="Optional Message"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <label>Transaction Password</label>

        <input
          type="password"
          placeholder="Enter Login Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Send Money</button>
      </form>
    </div>
  );
}

export default SendMoneyForm;
