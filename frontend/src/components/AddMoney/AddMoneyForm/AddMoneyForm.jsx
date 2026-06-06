import "./AddMoneyForm.css";
import Header from "../../../pages/Dashboard/Header/Header";
function AddMoneyForm() {
  return (
    <div className="add-money-form-container">
      <form className="add-money-form">

        <h2>Add Money</h2>

        <label htmlFor="amount">
          Enter Amount
        </label>

        <input
          id="amount"
          type="number"
          placeholder="₹ Enter Amount"
        />

        <div className="quick-amounts">

          <button type="button">₹500</button>

          <button type="button">₹1000</button>

          <button type="button">₹2000</button>

          <button type="button">₹5000</button>

        </div>

        <button
          type="submit"
          className="add-money-btn"
        >
          Add Money
        </button>

      </form>
    </div>
  );
}

export default AddMoneyForm;