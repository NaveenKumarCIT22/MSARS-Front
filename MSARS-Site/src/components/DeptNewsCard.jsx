import axios from "axios";
import "./NewsCard.css";
import React, { useEffect, useState } from "react";
// import ShareBtn from "../assets/share-solid.svg";
// import data from "../assets/newsdata.json";
// import NewsModal from "../pages/NewsModal";
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";

const DeptNewsCard = () => {
  const navigate = useNavigate();
  // const a = JSON.parse();
  // console.log(data);
  // const [showModal, setShowModal] = useState(false);
  // const [newsObj, setNewsObj] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const dept = JSON.parse(sessionStorage.getItem("deptObj"));
    const getNews = async () => {
      let res = await axios.get("/api/newscard/" + dept.name);
      setData(() => res.data);
    };
    getNews();
  }, []);
  console.log(data);
  return (
    <>
      {/* {showModal && <NewsModal obj={newsObj} />} */}
      {data &&
        data.map((ele) => {
          let tone = ele.tonality.substring(0, 3);
          let clr = "";
          // console.log(tone);
          if (tone.toLowerCase() === "pos") {
            clr = "pos-elem";
          } else if (tone.toLowerCase() === "neg") {
            clr = "neg-elem";
          } else {
            clr = "nut-elem";
          }
          return (
            <div
              className="pib-news-card"
              key={crypto.randomUUID()}
              onClick={() => {
                sessionStorage.setItem("newsObj", JSON.stringify(ele));
                navigate("/dept/news/" + ele.id);
              }}
            >
              <div className="pib-news-card-left">
                <div className="pib-news-title">
                  <span id="pib-news-title">{ele.headlines}</span>
                </div>
                <div className="pib-news-dept">
                  <a
                    href={ele.source_link}
                    target="_blank"
                    className="news-source-link"
                  >
                    <span id="pib-news-source">{ele.source_name}</span>
                  </a>
                  {" - "}
                  <span className="news-dept-name">{ele.department}</span>
                </div>
              </div>
              <div className="pib-news-card-right">
                <div className={`pib-news-tone ${clr}`}>
                  <span id="pib-news-tone">{tone}</span>
                </div>
                {/* <div className="pib-news-share">
                <img
                  className="share-button"
                  src={ShareBtn}
                  alt="Share with peers"
                />
              </div> */}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DeptNewsCard;
