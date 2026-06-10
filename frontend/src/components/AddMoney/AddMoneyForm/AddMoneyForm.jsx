import "./AddMoneyForm.css";
import { useState } from "react";
import axios from "axios";

function AddMoneyForm() {
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userEmail =
        localStorage.getItem("userEmail");

      const response =
        await axios.post(
          "http://127.0.0.1:8000/add-money",
          {
            amount: Number(amount),
            email: userEmail,
            password,
          }
        );

      alert(response.data.message);

      window.location.reload();

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Unable to add money"
      );

    }
  };

  return (
    <div className="add-money-form-container">

      <form
        className="add-money-form"
        onSubmit={handleSubmit}
      >

        <h2>Add Money</h2>

        <label>
          Enter Amount
        </label>

        <input
          type="number"
          placeholder="₹ Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <p>
          You entered ₹{amount}
        </p>

        <div className="quick-amounts">

          <button
            type="button"
            onClick={() =>
              setAmount(500)
            }
          >
            ₹500
          </button>

          <button
            type="button"
            onClick={() =>
              setAmount(1000)
            }
          >
            ₹1000
          </button>

          <button
            type="button"
            onClick={() =>
              setAmount(2000)
            }
          >
            ₹2000
          </button>

          <button
            type="button"
            onClick={() =>
              setAmount(5000)
            }
          >
            ₹5000
          </button>

        </div>

        <label>
          Enter Password
        </label>

        <input
          type="password"
          placeholder="Enter Login Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="add-money-btn"
        >
          Add Money
        </button>

      </form>

    </div>
  );
}

export default AddMoneyForm;