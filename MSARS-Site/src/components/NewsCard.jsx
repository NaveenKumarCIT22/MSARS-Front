import "./NewsCard.css";
import React from "react";
import ShareBtn from "../assets/share-solid.svg";

const NewsCard = () => {
  return (
    <>
      <div className="pib-news-card">
        <div className="pib-news-card-left">
          <div className="pib-news-title">
            <span id="pib-news-title">Sample News Title</span>
          </div>
          <div className="pib-news-dept">
            <a href="" className="news-source-link">
              <span id="pib-news-source">The Hindu</span>
            </a>
            {" - "}
            <span className="news-dept-name">Some Department</span>
          </div>
        </div>
        <div className="pib-news-card-right">
          <div className="pib-news-tone pos-elem">
            <span id="pib-news-tone">Pos</span>
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
    </>
  );
};

export default NewsCard;
