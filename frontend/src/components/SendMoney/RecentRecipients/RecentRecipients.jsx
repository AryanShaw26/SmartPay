import "./RecentRecipients.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentRecipients() {

  const [recipients, setRecipients] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://127.0.0.1:8000/recent-recipients"
      )
      .then((response) => {

        setRecipients(
          response.data
        );

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (
    <div className="recent-recipients">

      <div className="recipients-header">
        <h2>
          Recent Recipients
        </h2>
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

            <div
              key={recipient.id}
              className="recipient-item"
            >

              <div>

                <strong>
                  {recipient.recipient}
                </strong>

                <p>
                  ₹{recipient.amount}
                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default RecentRecipients;