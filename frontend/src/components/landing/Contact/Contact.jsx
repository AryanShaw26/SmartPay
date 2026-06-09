import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-header">
        <h2>
          Contact <span>Me</span>
        </h2>

        <p>
          For collaborations, opportunities,
          or project discussions, feel free
          to reach out.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">

          <a
            href="mailto:aryanshaw344@gmail.com"
            className="info-card"
          >
            <FaEnvelope />

            <span>
              aryanshaw344@gmail.com
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;