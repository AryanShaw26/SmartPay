import "./AnalyticsTransactions.css";

function AnalyticsTransactions({
  transactions,
}) {
  return (
    <div className="analytics-transactions">

      <h2>
        Recent Transactions
      </h2>

      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>Recipient</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {transactions.length === 0 ? (

            <tr>
              <td
                colSpan="4"
                className="empty-row"
              >
                No Transactions Found
              </td>
            </tr>

          ) : (

            transactions
              .slice()
              .reverse()
              .slice(0, 10)
              .map((transaction) => {

                console.log(transaction);

                return (
                  <tr
                    key={transaction.id}
                  >
                    <td>
                      {new Date(
                        transaction.date
                      ).toLocaleDateString(
                        "en-IN"
                      )}
                    </td>

                    <td>
                      {transaction.recipient}
                    </td>

                    <td>
                      ₹
                      {Number(
                        transaction.amount
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </td>

                    <td
                      className={
                        transaction.status ===
                        "Success"
                          ? "success"
                          : "failed"
                      }
                    >
                      {transaction.status}
                    </td>
                  </tr>
                );
              })

          )}

        </tbody>

      </table>

    </div>
  );
}

export default AnalyticsTransactions;