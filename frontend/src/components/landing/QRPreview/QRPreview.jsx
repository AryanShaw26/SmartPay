import "./QRPreview.css";
import qrImage from "../../../assets/qr-payment.png";

function QRPreview() {
  return (
    <section className="qr-section">

      <div className="qr-container">

        {/* Left Side */}

        <div className="qr-content">

          <span className="qr-tag">
            QR PAYMENTS
          </span>

          <h2>
            Scan. Pay.
            <span> Done.</span>
          </h2>

          <p>
            Make payments instantly using secure QR
            technology. Generate personal QR codes,
            receive money seamlessly, and enjoy
            lightning-fast transactions.
          </p>

          <div className="qr-features">

            <div className="qr-item">
              ✓ Instant QR Payments
            </div>

            <div className="qr-item">
              ✓ Generate Personal QR
            </div>

            <div className="qr-item">
              ✓ Receive Money Securely
            </div>

            <div className="qr-item">
              ✓ Fast Transaction Verification
            </div>

          </div>

          <button className="qr-btn">
            Try QR Payments
          </button>

        </div>

        {/* Right Side */}

        <div className="qr-image-container">

          <img
            src={qrImage}
            alt="QR Payment"
            className="qr-image"
          />

        </div>

      </div>

    </section>
  );
}

export default QRPreview;