import "./ContactSupport.css";

function ContactSupport() {
  return (
    <div className="contact-support">

      <div className="contact-header">
        <h2>Contact Support</h2>
      </div>

      <div className="contact-form">

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="input-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Issue Subject"
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Describe your issue..."
          ></textarea>
        </div>

        <button className="submit-ticket-btn">
          Submit Ticket
        </button>

      </div>

    </div>
  );
}

export default ContactSupport;