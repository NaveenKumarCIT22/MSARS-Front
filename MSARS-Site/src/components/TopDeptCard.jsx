import React, { useEffect, useState } from "react";
import "./TopDeptCard.css";
import axios from "axios";

const TopDeptCard = () => {
  // let poorDepts = [
  //   {
  //     rank: 1,
  //     name: "Education",
  //   },
  //   {
  //     rank: 2,
  //     name: "Defence",
  //   },
  //   {
  //     rank: 3,
  //     name: "Home Affairs",
  //   },
  // ];
  const [poorDepts, setPoorDepts] = useState();
  let cnt = 0;
  const counter = () => {
    cnt += 1;
    return cnt;
  };
  useEffect(() => {
    const getPoor = async () => {
      let res = await axios.get("/api/department-cards");
      let revRank = res.data.reverse();
      setPoorDepts(() => revRank.slice(0, 3));
    };
    getPoor();
  }, []);

  return (
    <div className="top-dept-pane">
      <span id="top-dept-heading">Attention Required Departments</span>
      <span className="top-depts">
        {poorDepts &&
          poorDepts.map((ele) => {
            return (
              <div className="top-dept" key={crypto.randomUUID()}>
                <span className="golden-rank">
                  {"#-"}
                  <span id="span" className="top-dept-rank">
                    {/* {ele.rank} */}
                    {counter()}
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
