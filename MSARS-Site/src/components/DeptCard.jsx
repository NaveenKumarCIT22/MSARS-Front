import { useNavigate } from "react-router-dom";
import "./DeptCard.css";

import React from "react";
import SearchBar from "./SearchBar";

const DeptCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pib-search-wrapper">
        <SearchBar />
      </div>
      <div className="pib-tab-inner-wrapper">
        <div
          className="pib-dept-card"
          onClick={() => {
            navigate("/dept/detailed");
          }}
        >
          <div className="pib-dept-card-left">
            <div className="pib-dept-name">
              <span id="pib-dept-name">Some Department</span>
            </div>
            <div className="pib-dept-rank">
              Rank:{" "}
              <span className="golden-rank">
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
              <div className="pib-dept-caption">N</div>
            </div>
            <div className="pib-dept-neg neg-elem">
              <div className="pib-dept-neg-num">
                <span id="pib-dept-neg-num">25</span>%
              </div>
              <div className="pib-dept-caption">- ve</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeptCard;
