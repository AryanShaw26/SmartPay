import "./RecentTopUps.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentTopUps() {
  const [topups, setTopups] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/recent-topups`)
      .then((response) => {
        setTopups(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="recent-topups-container">
      <div className="topups-header">
        <h2>Recent Top-Ups</h2>
      </div>

      <div className="topups-list">
        {topups.map((topup) => (
          <div className="topup-item" key={topup.id}>
            <p>₹{Number(topup.amount).toLocaleString("en-IN")}</p>

            <p>{new Date(topup.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTopUps;
