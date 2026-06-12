import "./BalancePreview.css";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function BalancePreview() {
  const [balance, setBalance] = useState(50000);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    axios
      .get(`${import.meta.env.VITE_API_URL}/wallet/${userId}`)
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="balance-preview">
      <div className="balance-top">
        <div>
          <h3>Current Wallet Balance</h3>

          <p>Available Funds</p>
        </div>

        <div className="eye-icon">
          <FaEye />
        </div>
      </div>

      <div className="balance-amount">
        ₹
        {Number(balance).toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>

      <div className="balance-footer">
        <div className="balance-update">Updated Just Now</div>
      </div>
    </div>
  );
}

export default BalancePreview;
