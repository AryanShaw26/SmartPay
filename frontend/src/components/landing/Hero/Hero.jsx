import "./Hero.css";
import hero from "../../../assets/hero-phone.png";
import smartpay_card from "../../../assets/smartpay-card.png";
import { useNavigate } from "react-router-dom";
function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-left">
          <h1 className="left-text-bold">
            Send Money.
            <br />
            Pay Instantly.
            <br />
            <span className="highlight">SmartPay It.</span>
          </h1>
          <p className="hero-para">
            The smarter, safer and faster way to manage your money
          </p>
          <div className="left-btn">
            <button className="get-started" onClick={()=>Navigate("/register")}>Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="low-left">
            <div className="feature-card">
              <h3>Secure</h3>
              <p>Bank-level security</p>
            </div>

            <div className="feature-card">
              <h3>Instant</h3>
              <p>Real-time payments</p>
            </div>

            <div className="feature-card">
              <h3>Trusted</h3>
              <p>Millions of users</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero-phone" className="hero-phone" />
          <img src={smartpay_card} alt="smart-pay" className="smartpay-card" />
        </div>
      </section>
    </>
  );
}
export default Hero;
