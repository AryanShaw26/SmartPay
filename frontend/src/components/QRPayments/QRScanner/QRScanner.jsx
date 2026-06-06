import "./QRScanner.css";
import { FaQrcode } from "react-icons/fa";

function QRScanner() {
  return (
    <div className="qr-scanner">

      <div className="scanner-header">
        <h2>QR Scanner</h2>
      </div>

      <div className="qr-placeholder">
        <FaQrcode />
      </div>

      <p className="scanner-text">
        Scan a QR Code to make a payment
      </p>

      <button className="scan-btn">
        Scan QR
      </button>

    </div>
  );
}

export default QRScanner;