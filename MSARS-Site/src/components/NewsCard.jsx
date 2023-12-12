import "./NewsCard.css";
import React from "react";
import ShareBtn from "../assets/share-solid.svg";

const NewsCard = () => {
  return (
    <>
      <div className="pib-news-card">
        <div className="pib-news-card-left">
          <div className="pib-news-title">
            <span id="pib-news-title">
              Sample News Titlef aoewifo oiaf soidfian finfi nfein
            </span>
          </div>
          <div className="pib-news-dept">
            <span id="pib-news-dept">
              Some Department dlakdoi dknafd oiandifn osidnnisnf aiddfniso
              oaisdf oasdfhaishiudsh siaskdfiasdfnaidhf
            </span>
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
