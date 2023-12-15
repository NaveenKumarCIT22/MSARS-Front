import React from "react";
import "./TopDeptCard.css";

const TopDeptCard = () => {
  const poorDepts = [
    {
      rank: 1,
      name: "Education",
    },
    {
      rank: 2,
      name: "Defence",
    },
    {
      rank: 3,
      name: "Home Affairs",
    },
  ];
  return (
    <div className="top-dept-pane">
      <span id="top-dept-heading">Under Performing Departments</span>
      <span className="top-depts">
        {poorDepts.map((ele) => {
          return (
            <div className="top-dept" key={crypto.randomUUID()}>
              <span className="golden-rank">
                {"#-"}
                <span id="span" className="top-dept-rank">
                  {ele.rank}
                </span>
              </span>{" "}
              <span className="deptartment-name">{ele.name}</span>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default TopDeptCard;
