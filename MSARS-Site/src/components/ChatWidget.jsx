import React, { useRef, useState } from "react";
import "./ChatWidget.css";
import chatWidget from "../assets/robot.svg";
import axios from "axios";

const ChatWidget = () => {
  const chatInputRef = useRef();
  const [chatState, setChatSate] = useState(false);
  const [chatArr, setChatArr] = useState([]);
  // const chatArr = [];

  // function setChatArr(obj) {
  //   chatArr.push(obj());
  // }

  const appendUsrChat = async (newChat) => {
    const uobj = {
      role: "usr",
      msg: newChat.value,
    };
    setChatArr((prev) => {
      console.log("inside");
      return [...prev, uobj];
    });
    // setChatArr(() => {
    //   console.log("inside");
    //   return chatArr.push(uobj);
    // });
    console.log("prior", chatArr);
    let res = await axios.post("/api/chat", { prompt: newChat.value });
    // console.log("res.data", res.data);
    console.log("before", chatArr);
    appendBotChat(res.data.message);
    console.log("after", chatArr);
    newChat.value = "";
  };

  const appendBotChat = (newChat) => {
    const bobj = {
      role: "bot",
      msg: newChat,
    };
    // setChatArr(() => bobj);
    setChatArr((prev) => [...prev, bobj]);
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
                <div className="chat-wrapper">
                  <div className={ele.role == "usr" ? "usr-chat" : "bot-chat"}>
                    {ele.msg}
                  </div>
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
              onClick={() => appendUsrChat(chatInputRef.current)}
            />
          </div>
        </div>
      )}
      {/* <div className="chat-bubble-wrapper"> */}
      <div className="chat-bubble" onClick={toggleChatState}>
        <div className="chat-icon">
          <img src={chatWidget} alt="chat widget" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ChatWidget;
