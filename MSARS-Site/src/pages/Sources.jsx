import React, { useRef, useState } from "react";
import "./Sources.css";
import { NavBar } from "../components/NavBar";

const Sources = () => {
  const [mode, setMode] = useState("web");
  const singleInpRef = useRef();
  const datalst = [
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
    {
      link: "test.news.com/sample_news",
      uid: "w123",
    },
  ];
  const deleteRecord = (uid) => {
    console.log(uid);
  };
  const addRecord = (link) => {};
  return (
    <>
      <NavBar />
      <div className="sources-wrapper">
        {/* <div className="sources-data-wrapper"> */}
        <div className="sources-text-wrapper">
          <span className="source-text-heading">Data Sources for Analysis</span>
        </div>
        <div className="sources-data-display-wrapper">
          <div className="sources-display-group">
            <div className="sources-tab-selector-wrapper">
              <div
                className={`sources-tab-selector ${mode == "web" && "active"}`}
                onClick={() => setMode("web")}
              >
                Websites
              </div>
              <div
                className={`sources-tab-selector ${mode == "epr" && "active"}`}
                onClick={() => setMode("epr")}
              >
                E-Papers
              </div>
              <div
                className={`sources-tab-selector ${mode == "ytb" && "active"}`}
                onClick={() => setMode("ytb")}
              >
                Youtube
              </div>
            </div>
            <div className="sources-display">
              <table className="sources-table">
                <th>Source Link</th>
                <th>Delete</th>
                {datalst.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.link}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => deleteRecord(ele.uid)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="sources-data-insertion">
              <div className="data-single-insert">
                <input
                  type="url"
                  name="url-data-input"
                  id="single-data-input"
                  ref={singleInpRef}
                />
                <input
                  type="button"
                  value="Add"
                  onClick={() => addRecord(singleInpRef.current.value)}
                />
              </div>
              <div className="data-batch-insert">
                <input
                  type="file"
                  name="file-data-input"
                  id="batch-data-input"
                />
                <input type="button" value="Upload" />
              </div>
            </div>
          </div>
          {/* <div className="sources-type-pie-chat">
            <img src="" alt="Source types portions" className="type-pie-chat" />
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Sources;
