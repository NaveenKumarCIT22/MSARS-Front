import { useNavigate } from "react-router-dom";
import "./DeptCard.css";

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

const DeptCard = () => {
  const navigate = useNavigate();
  const [deptDat, setDeptDat] = useState([]);
  useEffect(() => {
    const datExtract = async () => {
      let tdat = await axios.get("/api/department-cards");
      setDeptDat(tdat.data);
    };
    datExtract();
  }, []);
  console.log(deptDat);
  return (
    <>
      {/* <div className="pib-search-wrapper">
        <SearchBar />
      </div> */}
      <div className="pib-tab-inner-wrapper">
        {deptDat.map((ele) => {
          return (
            <div
              className="pib-dept-card"
              onClick={() => {
                navigate("/dept/detailed");
              }}
            >
              <div className="pib-dept-card-left">
                <div className="pib-dept-name">
                  <span id="pib-dept-name">{ele.name}</span>
                </div>
                <div className="pib-dept-rank">
                  Rank:{" "}
                  <span className="golden-rank">
                    #<span id="pib-dept-rank">{ele.rank}</span>
                  </span>
                </div>
              </div>
              <div className="pib-dept-card-right">
                <div className="pib-dept-pos pos-elem">
                  <div className="pib-dept-pos-num">
                    <span id="pib-dept-pos-num">{ele.Positive}</span>%
                  </div>
                  <div className="pib-dept-caption">+ ve</div>
                </div>
                <div className="pib-dept-nut nut-elem">
                  <div className="pib-dept-nut-num">
                    <span id="pib-dept-nut-num">{ele.Neutral}</span>%
                  </div>
                  <div className="pib-dept-caption">N</div>
                </div>
                <div className="pib-dept-neg neg-elem">
                  <div className="pib-dept-neg-num">
                    <span id="pib-dept-neg-num">{ele.Negative}</span>%
                  </div>
                  <div className="pib-dept-caption">- ve</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeptCard;
