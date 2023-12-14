import React, { useRef, useState } from "react";
import "./ChatWidget.css";
import chatWidget from "../assets/robot.svg";

const ChatWidget = () => {
  const chatInputRef = useRef();
  const [chatState, setChatSate] = useState(false);
  const [chatArr, setChatArr] = useState([]);
  const appendUsrChat = (newChat) => {
    let obj = {
      role: "usr",
      msg: newChat,
    };
    setChatArr(...chatArr, obj);
    console.log("chatArr", chatArr);
  };
  const appendBotChat = (newChat) => {
    let obj = {
      role: "bot",
      msg: newChat,
    };
    setChatArr(...chatArr, obj);
  };
  const toggleChatState = () => {
    setChatSate(!chatState);
    console.log("chatState", chatState);
  };
  return (
    <>
      {chatState && (
        <div className="chat-window-wrapper">
          <div className="chat-panel">
            {chatArr.map((ele) => {
              return (
                <div className={ele.role == "usr" ? "usr-chat" : "bot-chat"}>
                  {ele.msg}
                </div>
              );
            })}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              name="chat-input"
              id="chat-input"
              ref={chatInputRef}
            />
            <input
              type="button"
              value="Send"
              onClick={() => appendUsrChat(chatInputRef.current.value)}
            />
          </div>
        </div>
      )}
      <div className="chat-bubble-wrapper">
        <div className="chat-bubble" onClick={toggleChatState}>
          <div className="chat-icon">
            <img src={chatWidget} alt="chat widget" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
