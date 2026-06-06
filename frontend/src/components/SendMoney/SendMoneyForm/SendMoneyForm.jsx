import "./SendMoneyForm.css";
function SendMoneyForm() {
  return (
    <div className="send-money-form">
      <h2>Send Money</h2>

      <label>Amount</label>

      <input type="number" placeholder="₹ Enter Amount" />

      <label>Purpose</label>

      <input type="text" placeholder="Enter Purpose" />

      <label>Notes</label>

      <textarea placeholder="Optional Message" />

      <button>Send Money</button>
    </div>
  );
}

export default SendMoneyForm;
