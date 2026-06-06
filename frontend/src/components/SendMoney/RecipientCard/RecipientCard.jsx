import "./RecipientCard.css";

function RecipientCard() {
  return (
    <div className="recipient-card">

      <div className="recipient-header">
        <h2>Recipient</h2>
      </div>

      <div className="recipient-info">

        <div className="recipient-avatar">
          👤
        </div>

        <div className="recipient-details">
          <h3>Aryan Shaw</h3>
          <p>aryan@smartpay.com</p>
        </div>

      </div>

      <div className="recipient-status">
        ✅ Verified User
      </div>

    </div>
  );
}

export default RecipientCard;