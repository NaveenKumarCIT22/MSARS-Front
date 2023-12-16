import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.css";

const Notification = () => {
  //   const navigate = useNavigate();
  const notifModalRef = useRef();
  const obj = [
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
    { date: "16/12/2023", msg: "Highlights" },
  ];
  return (
    <>
      <div
        className="notification-wrapper"
        // onClick={(event) => {
        //   if (!notifModalRef.current.contains(event.target))
        //     return navigate("/pib/dashboard");
        // }}
      >
        <div className="notification-inner-wrapper" ref={notifModalRef}>
          <div className="notification-header">Notification</div>
          <div className="notification-area">
            <div className="notification-pane">
              {obj.map((ele) => {
                return (
                  <div className="notification-box" key={crypto.randomUUID()}>
                    <div className="notification-title">
                      {ele.date} - {ele.msg}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="notification-info">
              The beside listed notifications are cummulation of important
              negative news, which are already notified to you through your mail
              and whatsapp.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
