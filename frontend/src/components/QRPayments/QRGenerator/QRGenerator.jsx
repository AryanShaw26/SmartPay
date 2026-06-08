import "./QRGenerator.css";

function QRGenerator({
  receiver,
  amount,
  note,
  setReceiver,
  setAmount,
  setNote,
  setQrGenerated
}) {
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
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Description</label>

        <input
          type="text"
          placeholder="Coffee Payment"
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Recipient Name</label>

        <input
          type="text"
          placeholder="Enter Recipient Name"
          onChange={(e) => setReceiver(e.target.value)}
        />
      </div>

      <button className="generate-btn"
      onClick={()=>setQrGenerated(true)}>Generate QR</button>
      {amount && (
        <div className="qr-preview">
          <p>QR Generated Successfully</p>
        </div>
      )}
    </div>
  );
}

export default QRGenerator;
