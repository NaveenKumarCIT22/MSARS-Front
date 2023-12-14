import React from "react";
import "./Home.css";
import { NavBar } from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="home-wrapper">
        <div className="title-container">
          <div className="title-expansion">Media</div>
          <div className="title-expansion">Sentiment</div>
          <div className="title-expansion">Analysis</div>
          <div className="title-expansion">Reporting</div>
          <div className="title-expansion">System</div>
        </div>
        <div className="team-container">
          <h2>
            A Project By <span className="team-name">Team AI-Minds</span>
          </h2>
          <h2>
            for <span className="dept-name">PIB</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
