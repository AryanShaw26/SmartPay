import "./AnalyticsPreview.css";
import analyticsPreview from "../../../assets/analytics-preview.png";

function AnalyticsPreview() {
  return (
    <section className="analytics-section">

      <div className="analytics-container">

        {/* Left Side */}

        <div className="analytics-image-container">

          <img
            src={analyticsPreview}
            alt="Analytics Dashboard"
            className="analytics-image"
          />

        </div>

        {/* Right Side */}

        <div className="analytics-content">

          <span className="analytics-tag">
            SMART ANALYTICS
          </span>

          <h2>
            Understand Your
            <span> Spending Habits</span>
          </h2>

          <p>
            Gain deeper insights into your transactions
            with real-time analytics, spending trends,
            monthly reports, and category-wise
            expense tracking.
          </p>

          <div className="analytics-features">

            <div className="analytics-item">
              ✓ Monthly Expense Reports
            </div>

            <div className="analytics-item">
              ✓ Spending Breakdown
            </div>

            <div className="analytics-item">
              ✓ Top Categories Tracking
            </div>

            <div className="analytics-item">
              ✓ Interactive Charts
            </div>

          </div>

          <button className="analytics-btn">
            Explore Analytics
          </button>

        </div>

      </div>

    </section>
  );
}

export default AnalyticsPreview;