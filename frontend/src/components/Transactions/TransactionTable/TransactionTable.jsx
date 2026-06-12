import "./TransactionTable.css";

function TransactionTable({
  transactions,
}) {

  return (
    <div className="transaction-table">

      <div className="table-header">

        <div>Date</div>
        <div>Recipient</div>
        <div>Amount</div>
        <div>Type</div>
        <div>Status</div>

      </div>

      {transactions
        .slice()
        .sort(
          (a, b) =>
            new Date(b.date) -
            new Date(a.date)
        )
        .map((transaction) => {

          const isCredit =
            transaction.purpose ===
              "Add Money" ||
            transaction.purpose ===
              "Received Money";

          return (

            <div
              className="table-row"
              key={transaction.id}
            >

              <div>
                {new Date(
                  transaction.date
                ).toLocaleString(
                  "en-IN"
                )}
              </div>

              <div>
                {transaction.recipient}
              </div>

              <div
                className={
                  isCredit
                    ? "credit"
                    : "debit"
                }
              >
                {isCredit ? "+" : "-"}₹
                {Number(
                  transaction.amount
                ).toLocaleString(
                  "en-IN"
                )}
              </div>

              <div>
                {isCredit
                  ? "Credit"
                  : "Debit"}
              </div>

              <div
                className={
                  transaction.status ===
                  "Success"
                    ? "success"
                    : "failed"
                }
              >
                {transaction.status}
              </div>

            </div>

          );

        })}

    </div>
  );

}

export default TransactionTable;