import React from "react";
import "./ChatWidget.css";
import chatWidget from "../assets/robot.svg";

const ChatWidget = () => {
  return (
    <>
      <div className="chat-bubble-wrapper">
        <div className="chat-bubble">
          <div className="chat-icon">
            <img src={chatWidget} alt="chat widget" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
