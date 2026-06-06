import "./QRPaymentSummary.css";

function QRPaymentSummary() {
  return (
    <div className="qr-payment-summary">

      <div className="summary-header">
        <h2>Payment Summary</h2>
      </div>

      <div className="summary-content">

        <div className="summary-item">
          <span>Amount</span>
          <span>₹500</span>
        </div>

        <div className="summary-item">
          <span>Recipient</span>
          <span>Raj Sharma</span>
        </div>

        <div className="summary-item">
          <span>Description</span>
          <span>Coffee Payment</span>
        </div>

        <div className="summary-item">
          <span>Charges</span>
          <span>₹0</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>₹500</span>
        </div>

      </div>

      <div className="payment-status">
        ✓ Ready For Payment
      </div>

    </div>
  );
}

export default QRPaymentSummary;