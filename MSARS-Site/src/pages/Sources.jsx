import React, { useEffect, useRef, useState } from "react";
import "./Sources.css";
import { NavBar } from "../components/NavBar";
import axios from "axios";

const Sources = () => {
  const [mode, setMode] = useState("");
  const singleInpRef = useRef();
  const [datalst, setDatalst] = useState([]);
  const [file, setFile] = useState([]);

  let sampled = [
    {
      link: "test.news.com/sample_news",
      id: "2",
    },
    {
      link: "test.news.com/sample_news",
      id: "w123",
    },
    {
      link: "test.news.com/sample_news",
      id: "w123",
    },
    {
      link: "test.news.com/sample_news",
      id: "w123",
    },
    {
      link: "test.news.com/sample_news",
      id: "w123",
    },
    {
      link: "test.news.com/sample_news",
      id: "w123",
    },
  ];

  const deleteRecord = async (id) => {
    let url = `/api/${mode}/${id}`;
    let res = await axios.delete(url);
    setDatalst((prev) => prev.filter((ele) => ele.id !== id));
    console.log(res);
  };

  const addRecord = async (link) => {
    let url = `/api/${mode}/`;
    const rec = {
      id: Math.floor(Math.random() * 10),
      link: link,
    };
    let res = await axios.post(url, rec);
    setDatalst((prev) => [...prev, rec]);

    console.log(res);
  };

  useEffect(() => {
    async function getDat() {
      const dat = await axios.get(`/api/${mode}/`);
      // console.log(dat.data);
      setDatalst(() => dat.data);
    }
    getDat();
  }, [mode]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const onFileUpload = async () => {
    // const frmDat = new FormData();
    // frmDat.append("sources_batch", file, file.name);
    // console.log("uploading...", file);
    // await axios.post(`/api/csvupload`, frmDat, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Content-Disposition": `attachment;filename=${file.name}`,
    //   },
    // });
    const filename = file.name;
    const res = await axios.post("", {
      data: filename,
    });
    console.log(res.status);
    window.alert("File sent for processing...");
  };

  const handleAnalyse = async () => {
    // if (mode == "web") {
    const res = await axios.get("/api/test?mode=" + mode);
    console.log("res:", res.status);
    // }
  };

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
                          onClick={() => deleteRecord(ele.id)}
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
              {mode === "" ? (
                <div className="data-single-insert">Please Select Mode</div>
              ) : (
                <>
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
                      onChange={onFileChange}
                    />
                    <input
                      type="button"
                      value="Upload"
                      onClick={onFileUpload}
                    />
                  </div>
                  <div className="analyser-button">
                    <button type="button" onClick={handleAnalyse}>
                      Analyse
                    </button>
                  </div>
                </>
              )}
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
