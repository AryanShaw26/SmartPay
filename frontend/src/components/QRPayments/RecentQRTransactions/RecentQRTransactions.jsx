import "./RecentQRTransactions.css";

function RecentQRTransactions() {
  return (
    <div className="recent-qr-transactions">

      <div className="recent-header">
        <h2>Recent QR Transactions</h2>
      </div>

      <div className="transactions-list">

        <div className="transaction-item">
          <div className="merchant-info">
            <h3>Coffee Shop</h3>
            <p>Today • 10:30 AM</p>
          </div>

          <div className="transaction-amount">
            -₹500
          </div>
        </div>

        <div className="transaction-item">
          <div className="merchant-info">
            <h3>Grocery Store</h3>
            <p>Yesterday • 6:15 PM</p>
          </div>

          <div className="transaction-amount">
            -₹850
          </div>
        </div>

        <div className="transaction-item">
          <div className="merchant-info">
            <h3>Electronics Hub</h3>
            <p>2 Days Ago</p>
          </div>

          <div className="transaction-amount">
            -₹2,500
          </div>
        </div>

        <div className="transaction-item">
          <div className="merchant-info">
            <h3>Restaurant</h3>
            <p>Last Week</p>
          </div>

          <div className="transaction-amount">
            -₹1,200
          </div>
        </div>

      </div>

    </div>
  );
}

export default RecentQRTransactions;