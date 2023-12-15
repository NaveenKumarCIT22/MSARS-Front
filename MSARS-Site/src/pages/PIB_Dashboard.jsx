import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import DeptCard from "../components/DeptCard";
import "./PIB_Dashboard.css";
import SearchBar from "../components/SearchBar";
import LowDeptCard from "../components/LowDeptCard";
import TopDeptCard from "../components/TopDeptCard";
import ProgressCard from "../components/ProgressCard";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const PIB_Dashboard = () => {
  const usr = sessionStorage.getItem("MSARS_ActiveUsr");
  console.log("..=>", usr);
  const navigate = useNavigate();
  // useEffect(() => {
  if (usr == null) {
    window.alert("Please login!!!");
    return navigate("/login");
  }
  // return navigate("/login");
  // }, []);
  const [tab, setTab] = useState("news");
  const gold = "rgba(0, 255, 255, 0.553)";
  const tabActiveStyle = {
    backgroundColor: "gold",
  };
  return (
    <>
      <NavBar />

      <div className="pib-dash-wrapper">
        <div className="dash-left">
          <div className="pib-progress-wrapper">
            <div className="pib-pos-progress">
              <ProgressCard percentage={36} colour="green" type="Positives" />
            </div>
            <div className="pib-nut-progress">
              <ProgressCard percentage={51} colour="grey" type="Neutrals" />
            </div>
            <div className="pib-neg-progress">
              <ProgressCard percentage={13} colour="red" type="Negatives" />
            </div>
          </div>
          <div className="pib-tab-group">
            <div className="pib-tab-selector-wrapper">
              <div
                className="pib-tab-selector"
                onClick={() => setTab("news")}
                style={{
                  backgroundColor: tab === "news" ? gold : "",
                }}
              >
                News
              </div>
              <div
                className="pib-tab-selector"
                onClick={() => setTab("dept")}
                style={{
                  backgroundColor: tab === "dept" ? gold : "",
                }}
              >
                Department
              </div>
            </div>
            <div className="pib-search-wrapper">
              <SearchBar />
            </div>
            {tab == "news" && (
              <div className="pib-tab-news">
                <NewsCard />
              </div>
            )}
            {tab == "dept" && (
              <div className="pib-tab-department">
                <DeptCard />
              </div>
            )}
          </div>
        </div>
        <div className="dash-right">
          <div className="top-dept-pane-wrapper">
            <TopDeptCard />
          </div>
          <div className="low-dept-pane-wrapper">
            <LowDeptCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PIB_Dashboard;
