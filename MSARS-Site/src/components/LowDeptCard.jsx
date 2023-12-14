import React from "react";
import "./LowDeptCard.css";
import chart from "../assets/chart.png";

const LowDeptCard = () => {
  // let
  return (
    <div className="low-dept-pane">
      <span id="low-dept-heading">Overview for Past 30 days</span>
      <img src={chart} alt="chart" />
    </div>
  );
};

export default LowDeptCard;
