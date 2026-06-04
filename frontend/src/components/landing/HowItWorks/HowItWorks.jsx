import "./HowItWorks.css";

import StepCard from "./StepCard";

import {
  FaUserPlus,
  FaWallet,
  FaPaperPlane,
  FaChartLine
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">

      <div className="how-header">

        <h2>
          How <span>SmartPay</span> Works
        </h2>

        <p>
          Get started in minutes and enjoy a seamless
          digital payment experience.
        </p>

      </div>

      <div className="steps-container">

        <StepCard
          number="01"
          icon={<FaUserPlus />}
          title="Create Account"
          description="Register securely and verify your profile in a few simple steps."
        />

        <StepCard
          number="02"
          icon={<FaWallet />}
          title="Add Money"
          description="Top up your wallet instantly using supported payment methods."
        />

        <StepCard
          number="03"
          icon={<FaPaperPlane />}
          title="Send & Receive"
          description="Transfer money instantly using wallet ID or QR payments."
        />

        <StepCard
          number="04"
          icon={<FaChartLine />}
          title="Track Analytics"
          description="Monitor spending patterns and manage finances smarter."
        />

      </div>

    </section>
  );
}

export default HowItWorks;