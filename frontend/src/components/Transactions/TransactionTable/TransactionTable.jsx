import "./TransactionTable.css";
function TransactionTable() {
  return (
    <>
      <div className="table-container">
        <h1>Transaction History</h1>
        <div className="transaction-details">
          <p>Date</p>
          <p>Recipient</p>
          <p>Amount</p>
          <p>Type</p>
          <p>Status</p>
        </div>
        <div className="transaction-row">
          <span>5 Jun 2026</span>

          <span>Raj Sharma</span>

          <span>₹5,000</span>

          <span>Sent</span>

          <span className="success">Success</span>
        </div>

        {/* Row 2 */}

        <div className="transaction-row">
          <span>4 Jun 2026</span>

          <span>Aman Gupta</span>

          <span>₹2,000</span>

          <span>Sent</span>

          <span className="success">Success</span>
        </div>

        {/* Row 3 */}

        <div className="transaction-row">
          <span>3 Jun 2026</span>

          <span>Priya Singh</span>

          <span>₹1,500</span>

          <span>Received</span>

          <span className="pending">Pending</span>
        </div>

        {/* Row 4 */}

        <div className="transaction-row">
          <span>2 Jun 2026</span>

          <span>Rohit Das</span>

          <span>₹3,000</span>

          <span>Sent</span>

          <span className="failed">Failed</span>
        </div>
      </div>
    </>
  );
}
export default TransactionTable;
