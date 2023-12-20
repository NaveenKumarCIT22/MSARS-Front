import React, { useRef, useState } from "react";
import "./Actions.css";
import { NavBar } from "../components/NavBar";

const Actions = () => {
  const textareaRef = useRef();
  let feedback = {};
  const [tone, setTone] = useState();
  const obj = JSON.parse(sessionStorage.getItem("feedbackNews"));
  const handleOnClick = () => {
    let reason = textareaRef.current.value;
    feedback = {
      id: obj.id,
      tonality: tone,
    };
    console.log("Reason:", reason);
    console.log(feedback);
  };
  return (
    <>
      <NavBar />
      <div className="actions-wrapper">
        {obj ? (
          <div className="context-panel">
            <div className="news-title">{obj.headlines}</div>
            <div className="additional-context">
              <div className="news-source">Source: {obj.source_name}</div>
              <div className="news-tonality">Tonality: {obj.tonality}</div>
              <div className="news-tonality">Department: {obj.department}</div>
              <div className="news-category">Category: {obj.modality}</div>
            </div>
            <div className="news-source_link">
              Link:{" "}
              <a href={obj.source_link} target="_blank">
                {obj.source_link}
              </a>
            </div>
          </div>
        ) : (
          <h1>Please select a NEWS from dashboard to edit it</h1>
        )}
        {obj && (
          <div className="actions-panel">
            <div className="radio-strip">
              Prefered Tonality of the NEWS:{"   "}
              <>
                <input
                  type="radio"
                  name="tone"
                  id="pos-radio"
                  onClick={() => setTone(() => "positive")}
                />
                <label htmlFor="pos-radio">Positive</label>
              </>
              <>
                <input
                  type="radio"
                  name="tone"
                  id="neg-radio"
                  onClick={() => setTone(() => "negative")}
                />
                <label htmlFor="neg-radio">Negative</label>
              </>
            </div>
            <div className="reason-strip">
              <label htmlFor="reason">Please Provide Your Reasons</label>
              <textarea
                name="reason-box"
                id="reason-box"
                cols="30"
                rows="3"
                ref={textareaRef}
              ></textarea>
            </div>
            <div className="button-wrapper">
              <button type="button" onClick={handleOnClick}>
                Submit
              </button>
            </div>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Actions;
