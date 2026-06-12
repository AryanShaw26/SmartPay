import "./AnalyticsSummaryCards.css";

function AnalyticsSummaryCards({
  totalAdded,
  totalReceived,
  totalSent,
  totalTransactions,
}) {

  return (
    <div className="summary-cards">

      <div className="summary-card">
        <h3>Total Added</h3>

        <p>
          ₹
          {totalAdded.toLocaleString(
            "en-IN"
          )}
        </p>
      </div>

      <div className="summary-card">
        <h3>Total Received</h3>

        <p>
          ₹
          {totalReceived.toLocaleString(
            "en-IN"
          )}
        </p>
      </div>

      <div className="summary-card">
        <h3>Total Sent</h3>

        <p>
          ₹
          {totalSent.toLocaleString(
            "en-IN"
          )}
        </p>
      </div>

      <div className="summary-card">
        <h3>Total Volume</h3>

        <p>
          ₹
          {(
            totalAdded +
            totalReceived +
            totalSent
          ).toLocaleString(
            "en-IN"
          )}
        </p>
      </div>

      <div className="summary-card">
        <h3>Transactions</h3>

        <p>
          {totalTransactions}
        </p>
      </div>

    </div>
  );
}

export default AnalyticsSummaryCards;