import React from "react";
import "./Home.css";
import { NavBar } from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="home-wrapper">
        <div className="title-container">
          <div className="title-inner-container">
            <div className="title-expansion">
              <span className="emph">M</span>edia
            </div>
            <div className="title-expansion">
              <span className="emph">S</span>entiment
            </div>
            <div className="title-expansion">
              <span className="emph">A</span>nalysis
            </div>
            <div className="title-expansion">
              <span className="emph">R</span>eporting
            </div>
            <div className="title-expansion">
              <span className="emph">S</span>ystem
            </div>
          </div>
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
