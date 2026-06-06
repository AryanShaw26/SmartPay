import "./RecentTopUPs.css";
function RecentTopUps() {
  return (
    <>
      <div className="recent-topups-container">
        <div className="topups-header">
          <h2>Recent Top-Ups</h2>
          <div className="topups-list">
            <div className="topup-item">
                <p>₹5,000</p>
                <p>Today</p>

            </div>
            <div className="topup-item">
                <p>₹2,000</p>
                <p>Yesterday</p>
            </div>
            <div className="topup-item">
                <p>₹1,000</p>
                <p>2 Days Ago</p>
            </div>
            <div className="topup-item">
                <p>₹500</p>
                <p>Last Week</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecentTopUps;