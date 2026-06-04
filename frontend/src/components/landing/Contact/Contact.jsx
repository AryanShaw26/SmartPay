import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope />
            <span>support@smartpay.com</span>
          </div>

          <div className="info-card">
            <FaPhone />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <span>Kolkata, India</span>
          </div>

        </div>

        {/* Right */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;