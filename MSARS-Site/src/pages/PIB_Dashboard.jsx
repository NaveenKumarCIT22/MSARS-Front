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
import axios from "axios";
import VerifyCard from "../components/VerifyCard";

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
  const [percentages, setPercentages] = useState();
  console.log("before..");
  useEffect(() => {
    const getPer = async () => {
      console.log("in...");
      const res = await axios.get("/api/tonality");
      console.log("res::", res);
      setPercentages(res.data[0]);
    };
    getPer();
  }, []);
  // const tabActiveStyle = {
  //   backgroundColor: "gold",
  // };
  return (
    <>
      <NavBar />

      <div className="pib-dash-wrapper">
        <div className="dash-left">
          <div className="pib-progress-wrapper">
            <div className="pib-pos-progress">
              <ProgressCard
                percentage={percentages?.Positive}
                colour="green"
                type="Positives"
              />
            </div>
            <div className="pib-nut-progress">
              <ProgressCard
                percentage={percentages?.Neutral}
                colour="rgba(54, 162, 235, 1)"
                type="Neutrals"
              />
            </div>
            <div className="pib-neg-progress">
              <ProgressCard
                percentage={percentages?.Negative}
                colour="red"
                type="Negatives"
              />
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
              <div
                className="pib-tab-selector"
                onClick={() => setTab("verify")}
                style={{
                  backgroundColor: tab === "verify" ? gold : "",
                }}
              >
                Verification
              </div>
            </div>
            {/* <div className="pib-search-wrapper">
              <SearchBar />
            </div> */}
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
            {tab == "verify" && (
              <div className="pib-tab-department">
                <VerifyCard />
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
