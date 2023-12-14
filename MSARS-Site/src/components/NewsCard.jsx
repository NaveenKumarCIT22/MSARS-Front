import "./NewsCard.css";
import React from "react";
import ShareBtn from "../assets/share-solid.svg";
import data from "../assets/newsdata.json";
// import { json } from "react-router-dom";

const NewsCard = () => {
  // const a = JSON.parse();
  // console.log(data);
  return (
    <>
      {data.map((ele) => {
        let tone = ele.tonality.substring(0, 3);
        let clr = "";
        // console.log(tone);
        if (tone.toLowerCase() === "pos") {
          clr = "pos-elem";
        } else if (tone.toLowerCase() === "neg") {
          clr = "neg-elem";
        } else {
          clr = "nut-elem";
        }
        return (
          <div className="pib-news-card" key={crypto.randomUUID()}>
            <div className="pib-news-card-left">
              <div className="pib-news-title">
                <span id="pib-news-title">{ele.news_title}</span>
              </div>
              <div className="pib-news-dept">
                <a href={ele.source_link} className="news-source-link">
                  <span id="pib-news-source">{ele.source}</span>
                </a>
                {" - "}
                <span className="news-dept-name">{ele.department}</span>
              </div>
            </div>
            <div className="pib-news-card-right">
              <div className={`pib-news-tone ${clr}`}>
                <span id="pib-news-tone">{tone}</span>
              </div>
              <div className="pib-news-share">
                <img
                  className="share-button"
                  src={ShareBtn}
                  alt="Share with peers"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
