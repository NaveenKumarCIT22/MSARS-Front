import React from "react";
import "./LowDeptCard.css";
import chart from "../assets/chart.png";
import ProgressChart from "./ProgressChart";

const LowDeptCard = () => {
  // let
  return (
    <div className="low-dept-pane">
      {/* <span id="low-dept-heading">Overview for Past 30 days</span> */}
      {/* <img src={chart} alt="chart" /> */}
      <ProgressChart />
    </div>
  );
};

export default LowDeptCard;
