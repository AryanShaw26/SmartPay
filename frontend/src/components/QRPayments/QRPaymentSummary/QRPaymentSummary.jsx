import "./QRPaymentSummary.css";

function QRPaymentSummary({receiver,amount,note}) {
  return (
    <div className="qr-payment-summary">

      <div className="summary-header">
        <h2>Payment Summary</h2>
      </div>

      <div className="summary-content">

        <div className="summary-item">
          <span>Amount</span>
          <span>{amount || 0}</span>
        </div>

        <div className="summary-item">
          <span>Recipient</span>
          <span>{receiver || "No receipient"}</span>
        </div>

        <div className="summary-item">
          <span>Description</span>
          <span>{note || "No description"}</span>
        </div>

        <div className="summary-item">
          <span>Charges</span>
          <span>₹0</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>₹{amount ||0}</span>
        </div>

      </div>

      <div className="payment-status">
        {amount?" ✓ Ready For Payment":"Enter Amount"}
      </div>

    </div>
  );
}

export default QRPaymentSummary;