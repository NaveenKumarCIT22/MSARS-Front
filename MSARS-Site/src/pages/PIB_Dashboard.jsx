import React from "react";
import NewsCard from "../components/NewsCard";
import DeptCard from "../components/DeptCard";

const PIB_Dashboard = () => {
  return (
    <>
      <div className="pib-dash-wrapper">
        <div className="dash-left">
          <div className="pib-progress-wrapper">
            <div className="pib-pos-progress"></div>
            <div className="pib-nut-progress"></div>
            <div className="pib-neg-progress"></div>
          </div>
          <div className="pib-tab-group">
            <div className="pib-tab-selector-wrapper">
              <div className="pib-tab-selector active">News</div>
              <div className="pib-tab-selector">Department</div>
            </div>
            <div className="pib-search-wrapper">
              <div className="pib-search"></div>
            </div>
            <div className="pib-tab-news">
              <NewsCard />
            </div>
            <div className="pib-tab-department">
              <DeptCard />
            </div>
          </div>
        </div>
        <div className="dash-right"></div>
      </div>
    </>
  );
};

export default PIB_Dashboard;
