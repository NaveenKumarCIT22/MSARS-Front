import "./DeptCard.css";

import React from "react";

const DeptCard = () => {
  return (
    <>
      <div className="pib-dept-card">
        <div className="pib-dept-card-left">
          <div className="pib-dept-name">
            <span id="pib-dept-name"></span>
          </div>
          <div className="pib-dept-rank">
            Rank: # <span id="pib-dept-rank"></span>
          </div>
        </div>
        <div className="pib-dept-card-right">
          <div className="pib-dept-pos">
            <div className="pib-dept-pos-num">
              <span id="pib-dept-pos-num"></span>%
            </div>
            <div className="pib-dept-pos-caption">+ ve</div>
          </div>
          <div className="pib-dept-nut">
            <div className="pib-dept-nut-num">
              <span id="pib-dept-nut-num"></span>%
            </div>
            <div className="pib-dept-nut-caption">o al</div>
          </div>
          <div className="pib-dept-neg">
            <div className="pib-dept-neg-num">
              <span id="pib-dept-neg-num"></span>%
            </div>
            <div className="pib-dept-neg-caption">- ve</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeptCard;
