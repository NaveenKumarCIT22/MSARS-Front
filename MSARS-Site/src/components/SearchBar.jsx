import React, { useEffect, useRef, useState } from "react";
// import * as React from "react";
// import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { Stack } from "@mui/material";
import axios from "axios";

const SearchBar = ({ changeFilter }) => {
  // const pibSearchBarRef = useRef(null);
  const [deptlst, setDeptLst] = useState([]);
  const [srclst, setSrcLst] = useState([]);
  // let srclst = [];
  useEffect(() => {
    const deptFetch = async () => {
      let res = await axios.get("/api/department-cards");
      setDeptLst(() => res.data);
      console.log(res);
      let res1 = await axios.get("/api/newscard");
      console.log(res1);
      setSrcLst(() => res1.data);
    };
    deptFetch();
  }, []);

  const handleClick = () => {
    useEffect(() => {
      const getFil = async () => {
        await axios.get("");
      };
    });
  };
  // console.log(deptlst);
  // console.log(srclst);
  const [filterList, setFilterList] = useState([
    { title: "Websites", category: "Source-Type" },
    { title: "Youtube", category: "Source-Type" },
    { title: "E-Paper", category: "Source-Type" },
    { title: "Positive", category: "Tonality" },
    { title: "Negative", category: "Tonality" },
    { title: "Neutral", category: "Tonality" },
  ]);
  useEffect(() => {
    deptlst.forEach((ele) => {
      setFilterList((prev) => [
        ...prev,
        {
          title: ele.name,
          category: "Department",
        },
      ]);
    });
  }, [deptlst]);
  useEffect(() => {
    srclst.forEach((ele) => {
      setFilterList((prev) => [
        ...prev,
        {
          title: ele.source_name,
          category: "Source",
        },
      ]);
    });
  }, [srclst]);
  // srclst.forEach((ele) => {
  //   filterList.push({
  //     title: ele.source_name,
  //     category: "Source",
  //   });
  // });

  // console.log(filterList);
  const [vallst, setVallst] = useState([]);
  return (
    <>
      <div className="pib-search">
        {/* <input id="pib-search-bar" ref={pibSearchBarRef} type="text" />
        <button type="button">Search</button> */}

        <Stack
          spacing={3}
          sx={{ width: 500, height: 50 }}
          style={{ color: "#fff" }}
        >
          <Autocomplete
            sx={{
              bgcolor: "#2B2A33",
              height: 50,
              overflowY: "auto",
            }}
            multiple
            id="tags-outlined"
            options={filterList}
            value={vallst}
            onChange={(e, newval) => {
              setVallst(() => newval);
            }}
            // options={top100Films}
            getOptionLabel={(option) => {
              // console.log("option", option);
              return option.title + "-" + option.category;
            }}
            getOptionKey={() => crypto.randomUUID()}
            // defaultValue={[top100Films[1]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Filter By:" placeholder="Filters" />
            )}
          />
        </Stack>
        <button type="button" onClick={() => changeFilter(() => vallst)}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
