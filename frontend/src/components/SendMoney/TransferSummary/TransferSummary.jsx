import "./TransferSummary.css"
function TransferSummary() {
  return (
    <div className="transfer-summary">

      <div className="summary-header">
        <h2>Transfer Summary</h2>
      </div>

      <div className="summary-content">

        <div className="summary-item">
          <span>Amount</span>
          <span>₹5,000</span>
        </div>

        <div className="summary-item">
          <span>Charges</span>
          <span>₹0</span>
        </div>

        <div className="summary-item">
          <span>GST</span>
          <span>₹0</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>₹5,000</span>
        </div>

      </div>

      <div className="transfer-status">
        ✓ Ready To Transfer
      </div>

    </div>
  );
}

export default TransferSummary;