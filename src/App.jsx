import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello! I'm CosmoChat. Ask me anything and I'll do my best to help.",
      sender: "CosmoChat",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (event) => {
    event.preventDefault();

    const trimmedMessage = input.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    const userMessage = {
      message: trimmedMessage,
      sender: "user",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    const API_URL = "https://cosmochat-api.onrender.com/";

    try {
      const response = await fetch(
        `${API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "CosmoChat API request failed."
        );
      }

      if (!data.reply) {
        throw new Error("The API returned no reply.");
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          message: data.reply,
          sender: "CosmoChat",
        },
      ]);
    } catch (error) {
      console.error("CosmoChat connection error:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          message:
            "Sorry, I couldn't connect to CosmoChat right now. Please make sure the CosmoChat server is running.",
          sender: "CosmoChat",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (loading) {
      return;
    }

    setMessages([
      {
        message:
          "Hello! I'm CosmoChat. Ask me anything and I'll do my best to help.",
        sender: "CosmoChat",
      },
    ]);
  };

  return (
    <div className="App">
      <main className="chat-wrapper">

        {/* Header */}
        <header className="chat-header">
          <div className="brand-section">
            <div className="cosmo-logo">
              ✦
            </div>

            <div>
              <h1>CosmoChat</h1>
              <p>Your personal AI assistant</p>
            </div>
          </div>

          <div className="header-actions">
            <div className="status">
              <span className="status-dot"></span>
              <span>Online</span>
            </div>

            <button
              type="button"
              className="clear-button"
              onClick={clearChat}
              disabled={loading}
              title="Clear conversation"
            >
              Clear
            </button>
          </div>
        </header>

        {/* Messages */}
        <section className="message-list">
          {messages.map((message, index) => {
            const isUser = message.sender === "user";

            return (
              <div
                key={index}
                className={`message-row ${
                  isUser ? "user-row" : "bot-row"
                }`}
              >
                {!isUser && (
                  <div className="avatar bot-avatar">
                    ✦
                  </div>
                )}

                <div className="message-content">
                  <span className="message-sender">
                    {isUser ? "You" : "CosmoChat"}
                  </span>

                  <div
                    className={`message-bubble ${
                      isUser
                        ? "user-message"
                        : "bot-message"
                    }`}
                  >
                    {message.message}
                  </div>
                </div>

                {isUser && (
                  <div className="avatar user-avatar">
                    You
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {loading && (
            <div className="message-row bot-row">
              <div className="avatar bot-avatar">
                ✦
              </div>

              <div className="message-content">
                <span className="message-sender">
                  CosmoChat
                </span>

                <div className="message-bubble bot-message typing-bubble">
                  <span className="typing-text">
                    Thinking
                  </span>

                  <span className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Input */}
        <form
          className="message-input-container"
          onSubmit={handleSend}
        >
          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            placeholder="Message CosmoChat..."
            disabled={loading}
            autoComplete="off"
          />

          <button
            type="submit"
            className="send-button"
            disabled={loading || !input.trim()}
          >
            {loading ? "..." : "Send"}
          </button>
        </form>

        <p className="footer-note">
          CosmoChat can make mistakes. Verify important information.
        </p>
      </main>
    </div>
  );
}

export default App;