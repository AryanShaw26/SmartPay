import "./Features.css";

import FeatureCard from "./FeatureCard";

import {
  FaShieldAlt,
  FaQrcode,
  FaChartPie,
  FaPaperPlane,
  FaWallet,
  FaHistory
} from "react-icons/fa";

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="features-header">

        <h2>
          Why Choose
          <span> SmartPay</span>
        </h2>

        <p>
          Everything you need to manage your money
          securely and efficiently.
        </p>

      </div>

      <div className="features-grid">

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Secure Payments"
          description="Bank-level encryption keeps every transaction protected."
        />

        <FeatureCard
          icon={<FaQrcode />}
          title="QR Payments"
          description="Scan and pay instantly using dynamic QR technology."
        />

        <FeatureCard
          icon={<FaChartPie />}
          title="Expense Analytics"
          description="Track and visualize your spending with smart insights."
        />

        <FeatureCard
          icon={<FaPaperPlane />}
          title="Instant Transfers"
          description="Send and receive money in real-time."
        />

        <FeatureCard
          icon={<FaWallet />}
          title="Wallet Management"
          description="Manage balances, deposits and transfers easily."
        />

        <FeatureCard
          icon={<FaHistory />}
          title="Transaction History"
          description="Access detailed records of every payment."
        />

      </div>

    </section>
  );
}

export default Features;