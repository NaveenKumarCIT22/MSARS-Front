import React from "react";
import "./TopDeptCard.css";

const TopDeptCard = () => {
  return (
    <div className="top-dept-pane">
      <span id="top-dept-heading">Top Departments</span>
      <span className="top-depts">
        <div className="top-dept">
          <span className="golden-rank">
            #
            <span id="span" className="top-dept-rank">
              1
            </span>
          </span>{" "}
          <span className="deptartment-name">Education</span>
        </div>
      </span>
    </div>
  );
};

export default TopDeptCard;
