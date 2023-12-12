import "./DeptCard.css";

import React from "react";

const DeptCard = () => {
  return (
    <>
      <div className="pib-dept-card">
        <div className="pib-dept-card-left">
          <div className="pib-dept-name">
            <span id="pib-dept-name">Some Department</span>
          </div>
          <div className="pib-dept-rank">
            Rank:{" "}
            <span style={{ color: "#d4b40a", textShadow: "2px 2px grey" }}>
              #<span id="pib-dept-rank">5</span>
            </span>
          </div>
        </div>
        <div className="pib-dept-card-right">
          <div className="pib-dept-pos pos-elem">
            <div className="pib-dept-pos-num">
              <span id="pib-dept-pos-num">25</span>%
            </div>
            <div className="pib-dept-caption">+ ve</div>
          </div>
          <div className="pib-dept-nut nut-elem">
            <div className="pib-dept-nut-num">
              <span id="pib-dept-nut-num">50</span>%
            </div>
            <div className="pib-dept-caption">o al</div>
          </div>
          <div className="pib-dept-neg neg-elem">
            <div className="pib-dept-neg-num">
              <span id="pib-dept-neg-num">25</span>%
            </div>
            <div className="pib-dept-caption">- ve</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeptCard;
