import "./RecentRecipients.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentRecipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    axios
      .get(`${import.meta.env.VITE_API_URL}/recent-recipients/${userId}`)
      .then((response) => {
        setRecipients(response.data);
      })
      .catch((error) => {
        console.log("Error fetching recipients:", error);
      });
  }, []);

  return (
    <div className="recent-recipients">
      <div className="recipients-header">
        <h2>Recent Recipients</h2>
      </div>

      <div className="recipients-list">
        {recipients.length === 0 ? (
          <p
            style={{
              color: "#888",
              textAlign: "center",
            }}
          >
            No Recipients Found
          </p>
        ) : (
          recipients.map((recipient) => (
            <div key={recipient.id} className="recipient-item">
              <div>
                <strong>{recipient.recipient}</strong>

                <p>₹{Number(recipient.amount).toLocaleString("en-IN")}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentRecipients;
