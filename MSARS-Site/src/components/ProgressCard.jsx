import React, { useState } from "react";
import "./ProgressCard.css";

const ProgressCard = ({
  percentage = 0,
  colour = "red",
  type = "Positives",
}) => {
  let circleWidth = 150;
  //   let percentage = 60;
  //   let colour = "red";
  //   let type = "Positives";
  const radius = 60;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <>
      <div className="progress-card">
        <div className="progress-bar">
          <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          >
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth={"8px"}
              r={radius}
              className="circle-background"
            />
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth={"8px"}
              r={radius}
              className="circle-progress"
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                stroke: colour,
              }}
              transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            />
            <text
              x="50%"
              y="50%"
              dy="0.3em"
              textAnchor="middle"
              className="circle-text"
              style={{ fill: colour }}
              //   color={colour}
            >
              {percentage}%
            </text>
          </svg>
        </div>
        <div className="progress-card-type">{type}</div>
      </div>
    </>
  );
};

export default ProgressCard;
