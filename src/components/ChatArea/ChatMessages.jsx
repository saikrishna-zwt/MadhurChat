import React from "react";

const ChatMessages = ({ messages }) => {
  return (
    <div
      className="chat-messages"
      style={{ maxHeight: "610px", overflow: "auto", scrollbarWidth: "none" }}
    >
      <div
        className="message-container"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <p>Sender: {message.sender}</p>
            <p>Created At: {new Date(message.createAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
