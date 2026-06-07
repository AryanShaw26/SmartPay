import "./FAQSection.css";

function FAQSection() {
  return (
    <div className="faq-section">

      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-list">

        <div className="faq-item">
          <h3>How do I add money to my wallet?</h3>
          <p>
            Navigate to the Add Money page, enter the amount,
            select a payment method, and complete the payment.
          </p>
        </div>

        <div className="faq-item">
          <h3>How can I send money to someone?</h3>
          <p>
            Go to Send Money, choose a beneficiary, enter the amount,
            and confirm the transaction.
          </p>
        </div>

        <div className="faq-item">
          <h3>What should I do if a payment fails?</h3>
          <p>
            Check your transaction history first. If the amount was
            deducted but the payment failed, contact support immediately.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I add a beneficiary?</h3>
          <p>
            Open the Beneficiaries page, fill in the required details,
            and click Add Beneficiary.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is SmartPay secure?</h3>
          <p>
            Yes. SmartPay uses secure authentication and encrypted
            communication to protect user information.
          </p>
        </div>

      </div>

    </div>
  );
}

export default FAQSection;