import "./NewsCard.css";
import React, { useEffect, useState } from "react";
// import ShareBtn from "../assets/share-solid.svg";
// import data from "../assets/newsdata.json";
// import NewsModal from "../pages/NewsModal";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
// import { json } from "react-router-dom";

const NewsCard = () => {
  const navigate = useNavigate();
  // const a = JSON.parse();
  // console.log(data);
  // const [showModal, setShowModal] = useState(false);
  // const [newsObj, setNewsObj] = useState(null);
  // const [filteredData, setFilteredData] = useState(data);

  // const [filterData, setFilter] = useState();
  var filterData = [];
  const [newsData, setNewsData] = useState();
  function changeFilter(a) {
    // setFilter(() => a);
    console.log(a);
    filterData = a;
    let dat = {};
    filterData.forEach((ele) => {
      if (dat[ele.category]) {
        dat[ele.category] = [
          ...dat[ele.category],
          { name: ele.category, value: ele.title },
        ];
      } else {
        dat[ele.category] = ele.title;
      }
    });
    console.log(dat);
  }

  // dept, modality, source, source_type, tonality
  // let dat = {};
  // filterData.forEach((ele) => {
  //   if (dat[ele.category]) {
  //     dat[ele.category] = [
  //       ...dat[ele.category],
  //       { name: ele.category, value: ele.title },
  //     ];
  //   } else {
  //     dat[ele.category] = ele.title;
  //   }
  // });
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("/api/newscard");
      setNewsData(() => data.data);
    };
    getData();
  }, []);

  return (
    <>
      {/* <div className="pib-search-wrapper">
        <SearchBar changeFilter={changeFilter} />
      </div> */}
      {newsData && (
        <div className="pib-tab-inner-wrapper">
          {/* {showModal && <NewsModal obj={newsObj} />} */}
          {newsData.map((ele) => {
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
                  // sessionStorage.setItem("newsObj", JSON.stringify(ele));
                  navigate(`/pib/news/${ele.id}`);
                  // navigate("/pib/news/detailed");
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
        </div>
      )}{" "}
    </>
  );
};

export default NewsCard;
