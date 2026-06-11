import "./StatementDownload.css";
import { FaFilePdf } from "react-icons/fa";

function StatementDownload({
  handleDownload,
}) {
  return (
    <div className="statement-card">

      <h2>
        Transaction Statement
      </h2>

      <p>
        Download your complete
        transaction report in PDF
        format.
      </p>

      <button
        className="download-btn"
        onClick={handleDownload}
      >
        <FaFilePdf />

        Download PDF Statement
      </button>

    </div>
  );
}

export default StatementDownload;