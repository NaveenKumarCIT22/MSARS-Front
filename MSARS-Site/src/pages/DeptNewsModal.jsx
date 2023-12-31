import React, { useEffect, useRef, useState } from "react";
import "./NewsModal.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// const dobj = {
//   headline: "PM suffered a serious heart-attack | Nation griefs",
//   source: "The Hindu",
//   category: "Website",
//   tonality: "Positive",
//   description:
//     "Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.Avan setha yaaru paakura, headlines la ellame ollu thaan.",
//   link: "https://thehindu.com/PM-sethutaaru",
// };
const DeptNewsModal = () => {
  const navigate = useNavigate();
  const newsModalRef = useRef();
  const params = useParams();
  // const obj = JSON.parse(sessionStorage.getItem("newsObj"));
  const [obj, setNews] = useState();
  useEffect(() => {
    const newsGet = async () => {
      let res = await axios.get(`/api/newscard?id=${params.id}`);
      setNews(() => res.data[0]);
    };
    newsGet();
  }, []);
  console.log("news:", obj);
  return (
    <>
      {" "}
      {obj && (
        <div
          className="news-modal-wrapper"
          onClick={(event) => {
            if (!newsModalRef.current.contains(event.target))
              return navigate("/dept/detailed");
          }}
        >
          <div
            className="back-indicator"
            style={{
              transform: "rotate(-90deg)",
              fontSize: "1.2em",
              position: "absolute",
              left: "15px",
            }}
          >
            Back
          </div>
          <div className="news-modal" ref={newsModalRef}>
            <div className="news-modal-header">
              <div className="news-modal-headline">{obj.headlines}</div>
              <div className="news-modal-details">
                <div className="news-modal-source">
                  Source: <span id="news-modal-source">{obj.source_name}</span>
                </div>
                <div className="news-modal-category">
                  Category: <span id="news-modal-category">{obj.modality}</span>
                </div>
                <div className="news-modal-tone">
                  Tone: <span id="news-modal-tone">{obj.tonality}</span>
                </div>
              </div>
            </div>
            <div className="news-modal-description">{obj.content}</div>
            <div className="news-modal-link">
              Full Article:{" "}
              <a id="news-modal-link" target="_blank" href={obj.source_link}>
                {obj.source_link}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeptNewsModal;
