import "./SendMoneyForm.css";
import { useState } from "react";
import axios from "axios";

function SendMoneyForm() {

  const [recipientName, setRecipientName] =
    useState("");

  const [recipientEmail, setRecipientEmail] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [purpose, setPurpose] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const payload = {

        recipient_name:
          recipientName,

        recipient_email:
          recipientEmail,

        amount:
          Number(amount),

        purpose,

        notes,

        password,

        user_id: Number(
          localStorage.getItem(
            "user_id"
          )
        ),

      };

      console.log(
        "Sending Payload:",
        payload
      );

      const response =
        await axios.post(
          "http://127.0.0.1:8000/transactions",
          payload
        );

      alert(
        response.data.message
      );

      setRecipientName("");
      setRecipientEmail("");
      setAmount("");
      setPurpose("");
      setNotes("");
      setPassword("");

    } catch (error) {

      console.log(
        "Backend Error:",
        error.response?.data
      );

      alert(
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Transaction Failed"
      );

    }

  };

  return (

    <div className="send-money-form">

      <h2>
        Send Money
      </h2>

      <form
        onSubmit={handleSubmit}
      >

        <label>
          Recipient Name
        </label>

        <input
          type="text"
          placeholder="Enter Recipient Name"
          value={recipientName}
          onChange={(e) =>
            setRecipientName(
              e.target.value
            )
          }
          required
        />

        <label>
          Recipient Email
        </label>

        <input
          type="email"
          placeholder="Enter Recipient Email"
          value={recipientEmail}
          onChange={(e) =>
            setRecipientEmail(
              e.target.value
            )
          }
          required
        />

        <label>
          Amount
        </label>

        <input
          type="number"
          placeholder="₹ Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          required
        />

        <label>
          Purpose
        </label>

        <input
          type="text"
          placeholder="Enter Purpose"
          value={purpose}
          onChange={(e) =>
            setPurpose(
              e.target.value
            )
          }
          required
        />

        <label>
          Notes
        </label>

        <textarea
          placeholder="Optional Message"
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
        />

        <label>
          Transaction Password
        </label>

        <input
          type="password"
          placeholder="Enter Login Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          required
        />

        <button
          type="submit"
        >
          Send Money
        </button>

      </form>

    </div>

  );

}

export default SendMoneyForm;