import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="not-found-wrapper">
        <div className="not-found">
          <div className="heading404">404 - Not Found</div>
          <div className="description404">
            Either this page is under construction or you have entered a wrong
            url. Please check the url or if you are confident please wait till
            the page is constructed. (Could take till eternity 💀)
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
