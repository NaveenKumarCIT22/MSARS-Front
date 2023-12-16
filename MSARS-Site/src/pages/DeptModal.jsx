import React, { useRef, useState } from "react";
import "./DeptModal.css";
import { useNavigate } from "react-router-dom";
import ProgressCard from "../components/ProgressCard";
import DeptNewsCard from "../components/DeptNewsCard";
import DeptProgressChart from "../components/DeptProgressChart";

const dobj = {
  name: "Ministry of Education",
  rank: 555,
};
const DeptModal = () => {
  const navigate = useNavigate();
  const deptModalRef = useRef();
  //   const obj = JSON.parse(sessionStorage.getItem("deptObj"));
  const obj = dobj;
  return (
    <>
      <div
        className="dept-modal-wrapper"
        onClick={(event) => {
          if (!deptModalRef.current.contains(event.target))
            return navigate("/pib/dashboard");
        }}
      >
        <div className="dept-modal" ref={deptModalRef}>
          <div className="dept-modal-header">
            <div className="dept-modal-name">{obj.name}</div>
            <div className="dept-modal-details">
              <div className="dept-modal-progress">
                <ProgressCard percentage={36} colour="green" type="Positives" />
              </div>
              <div className="dept-modal-progress">
                <ProgressCard percentage={51} colour="grey" type="Neutrals" />
              </div>
              <div className="dept-modal-progress">
                <ProgressCard percentage={13} colour="red" type="Negatives" />
              </div>
              <div className="dept-modal-rank">
                #<span id="dept-modal-rank">{obj.rank}</span>
              </div>
            </div>
          </div>
          <div className="dept-modal-footer">
            <div className="dept-modal-news-wrapper">{<DeptNewsCard />}</div>
            <div className="dept-modal-graph-wrapper">
              {<DeptProgressChart />}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default DeptModal;
