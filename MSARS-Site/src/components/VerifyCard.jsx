import React, { useRef, useState } from "react";
import "./VerifyCard.css";
import axios from "axios";

const VerifyCard = () => {
  const newsInpRef = useRef();
  const [disp, setDisp] = useState("");
  const onClick = async () => {
    let txt = newsInpRef.current.value;
    let res = await axios.post("/api/verify", {
      prompt: txt,
    });
    // clg;
    setDisp(() => res.data);
  };
  return (
    <>
      <div className="verify-card">
        <div className="news-inp">
          <input type="text" name="news-inp" id="news-inp" ref={newsInpRef} />
          <button type="button" onClick={onClick}>
            Verify
          </button>
        </div>
        <div className="news-descr">
          <div
            className="tonality-label"
            dangerouslySetInnerHTML={{ __html: disp }}
          ></div>
          {/* <div className="department-label">Department: </div> */}
        </div>
      </div>
    </>
  );
};

export default VerifyCard;
