import "./AddMoneyForm.css";
import { useState } from "react";
function AddMoneyForm() {
  const [amount, setAmount] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(amount);
  }
  return (
    <div className="add-money-form-container">
      <form className="add-money-form"
      onSubmit={handleSubmit}>
        <h2>Add Money</h2>

        <label htmlFor="amount">Enter Amount</label>

        <input
          id="amount"
          type="number"
          placeholder="₹ Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p>You entered ₹{amount}</p>

        <div className="quick-amounts">
          <button type="button" onClick={() => setAmount(500)}>
            ₹500
          </button>

          <button type="button" onClick={() => setAmount(1000)}>
            ₹1000
          </button>

          <button type="button" onClick={() => setAmount(2000)}>
            ₹2000
          </button>

          <button type="button" onClick={() => setAmount(5000)}>
            ₹5000
          </button>
        </div>

        <button type="submit" className="add-money-btn">
          Add Money
        </button>
      </form>
    </div>
  );
}

export default AddMoneyForm;
