import React, { useRef, useState } from "react";
import "./NewsModal.css";
import { useNavigate } from "react-router-dom";

const dobj = {
  headline: "PM suffered a serious heart-attack | Nation griefs",
  source: "The Hindu",
  category: "Website",
  tonality: "Positive",
  description:
    "Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.",
  link: "https://thehindu.com/PM-sethutaaru",
};
const NewsModal = () => {
  const navigate = useNavigate();
  const newsModalRef = useRef();
  const obj = JSON.parse(sessionStorage.getItem("newsObj"));
  return (
    <>
      {" "}
      {/* {show && ( */}
      <div
        className="news-modal-wrapper"
        onClick={(event) => {
          if (!newsModalRef.current.contains(event.target))
            return navigate("/pib/dashboard");
        }}
      >
        <div className="news-modal" ref={newsModalRef}>
          <div className="news-modal-header">
            <div className="news-modal-headline">{obj.headline}</div>
            <div className="news-modal-details">
              <div className="news-modal-source">
                Source: <span id="news-modal-source">{obj.source}</span>
              </div>
              <div className="news-modal-category">
                Category: <span id="news-modal-category">{obj.category}</span>
              </div>
              <div className="news-modal-tone">
                Tone: <span id="news-modal-tone">{obj.tonality}</span>
              </div>
            </div>
          </div>
          <div className="news-modal-description">{obj.description}</div>
          <div className="news-modal-link">
            For proof check, refer:{" "}
            <a id="news-modal-link" href={obj.link}>
              {obj.link}
            </a>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default NewsModal;
