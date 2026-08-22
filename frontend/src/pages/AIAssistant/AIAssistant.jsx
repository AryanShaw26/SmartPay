import "./AIAssistant.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaRobot,
  FaArrowLeft,
  FaUser,
} from "react-icons/fa";

import axios from "axios";

function AIAssistant() {

  const navigate = useNavigate();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: `Hello ${
        localStorage.getItem("full_name") || "there"
      }! 👋 I can help you understand your spending, transactions and wallet activity.`,
    },
  ]);

  const [loading, setLoading] = useState(false);


  // ==========================
  // USER ID
  // ==========================

  const userId = localStorage.getItem("user_id");


  // ==========================
  // SEND QUESTION
  // ==========================

  const handleSend = async () => {

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    if (!userId) {

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Unable to identify your account. Please login again.",
        },
      ]);

      return;
    }


    // Add user's message immediately

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: trimmedQuestion,
      },
    ]);

    setQuestion("");

    setLoading(true);


    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ai-assistant`,
        {
          user_id: Number(userId),
          question: trimmedQuestion,
        }
      );


      // Add AI response

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: response.data.answer,
        },
      ]);

    } catch (error) {

      console.error(
        "AI Assistant Error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Sorry, I couldn't process your request right now. Please try again.",
        },
      ]);

    } finally {

      setLoading(false);

    }
  };


  // ==========================
  // ENTER KEY
  // ==========================

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      handleSend();

    }

  };


  return (

    <div className="ai-page">

      <div className="ai-card">


        {/* ==========================
            HEADER
        ========================== */}

        <div className="ai-header">

          <div className="ai-icon">
            <FaRobot />
          </div>

          <div>

            <h1>
              AI Financial Assistant
            </h1>

            <p>
              Your personal financial companion
            </p>

          </div>

        </div>


        {/* ==========================
            CHAT AREA
        ========================== */}

        <div className="ai-chat-area">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`chat-message ${
                message.type === "user"
                  ? "user-message"
                  : "ai-message"
              }`}
            >

              <div className="message-icon">

                {message.type === "user"
                  ? <FaUser />
                  : <FaRobot />
                }

              </div>

              <div className="message-content">

                <strong>

                  {message.type === "user"
                    ? "You"
                    : "SmartPay AI"
                  }

                </strong>

                <p>
                  {message.text}
                </p>

              </div>

            </div>

          ))}


          {/* LOADING */}

          {loading && (

            <div className="chat-message ai-message">

              <div className="message-icon">
                <FaRobot />
              </div>

              <div className="message-content">

                <strong>
                  SmartPay AI
                </strong>

                <p>
                  Thinking...
                </p>

              </div>

            </div>

          )}

        </div>


        {/* ==========================
            INPUT
        ========================== */}

        <div className="ai-input-area">

          <input
            type="text"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask me about your finances..."
            disabled={loading}
          />

          <button
            onClick={handleSend}
            disabled={loading || !question.trim()}
          >

            {loading
              ? "..."
              : "Send"
            }

          </button>

        </div>


        {/* ==========================
            EXIT
        ========================== */}

        <button
          className="ai-exit-button"
          onClick={() =>
            navigate("/dashboard")
          }
        >

          <FaArrowLeft />

          Exit Assistant

        </button>

      </div>

    </div>

  );

}

export default AIAssistant;