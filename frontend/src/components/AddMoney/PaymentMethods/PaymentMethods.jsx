import "./PaymentMethods.css";
function PaymentMethods() {
  return (
    <>
      <div className="payment-methods">
        <div className="title">
          <h2>Select Payment Method</h2>
        </div>
        <div className="payment-options">
          <div className="upi">
            <input type="radio" name="payment" value="UPI" />
            <label>UPI</label>
          </div>
          <div className="debit-card">
            <input type="radio" name="payment" value="Debit Card" />
            <label>Debit Card</label>
          </div>
          <div className="credit-card">
            <input type="radio" name="payment" value="Credit Card" />
            <label>Credit Card</label>
          </div>
          <div className="net-banking">
            <input type="radio" name="payment" value="Net Banking" />
            <label>Net Banking</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentMethods;
