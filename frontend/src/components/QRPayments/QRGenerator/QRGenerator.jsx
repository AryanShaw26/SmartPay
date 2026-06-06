import "./QRGenerator.css";

function QRGenerator() {
  return (
    <div className="qr-generator">

      <div className="generator-header">
        <h2>Generate QR</h2>
      </div>

      <div className="input-group">
        <label>Amount</label>

        <input
          type="number"
          placeholder="Enter Amount"
        />
      </div>

      <div className="input-group">
        <label>Description</label>

        <input
          type="text"
          placeholder="Coffee Payment"
        />
      </div>

      <div className="input-group">
        <label>Recipient Name</label>

        <input
          type="text"
          placeholder="Enter Recipient Name"
        />
      </div>

      <button className="generate-btn">
        Generate QR
      </button>

    </div>
  );
}

export default QRGenerator;