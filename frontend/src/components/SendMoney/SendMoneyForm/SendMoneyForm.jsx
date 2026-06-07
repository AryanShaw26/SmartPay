import "./SendMoneyForm.css";
import { useState } from "react";

function SendMoneyForm() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Recipient:", recipient);
    console.log("Amount:", amount);
    console.log("Purpose:", purpose);
    console.log("Notes:", notes);

    alert("Money Transfer Initiated!");
  };

  return (
    <form className="send-money-form" onSubmit={handleSubmit}>
      <h2>Send Money</h2>

      {/* Recipient */}

      <label>Recipient</label>

      <input
        type="text"
        placeholder="Enter Recipient Name"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />

      {/* Amount */}

      <label>Amount</label>

      <input
        type="number"
        placeholder="₹ Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Purpose */}

      <label>Purpose</label>

      <input
        type="text"
        placeholder="Enter Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
      />

      {/* Notes */}

      <label>Notes</label>

      <textarea
        placeholder="Optional Message"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">
        Send Money
      </button>

      {/* Live Preview */}

      <div className="transfer-preview">
        <h3>Transfer Preview</h3>

        <p>
          <strong>Recipient:</strong> {recipient}
        </p>

        <p>
          <strong>Amount:</strong> ₹{amount}
        </p>

        <p>
          <strong>Purpose:</strong> {purpose}
        </p>

        <p>
          <strong>Notes:</strong> {notes}
        </p>
      </div>
    </form>
  );
}

export default SendMoneyForm;