import React, { useState } from "react";
import editIcon from "../assets/edit.svg";
import "./EditWidget.css";
import { useNavigate } from "react-router-dom";

const EditWidget = ({ nws }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="edit-widget-container"> */}
      <div
        className="edit-widget"
        onClick={() => {
          sessionStorage.setItem("feedbackNews", JSON.stringify(nws));
          navigate("/actions");
        }}
      >
        <img src={editIcon} alt="edit widget" />
        {/* </div> */}
      </div>
    </>
  );
};

export default EditWidget;
