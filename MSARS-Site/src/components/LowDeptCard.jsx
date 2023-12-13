import React from "react";
import "./LowDeptCard.css";

const LowDeptCard = () => {
  // let
  return (
    <div className="low-dept-pane">
      <span id="low-dept-heading">Poor Departments</span>
      <span className="low-depts">
        <div className="low-dept">
          <span className="golden-rank">
            #-
            <span id="span" className="low-dept-rank">
              1
            </span>{" "}
          </span>
          <span className="deptarment-name">Electricity</span>
        </div>
      </span>
    </div>
  );
};

export default LowDeptCard;
