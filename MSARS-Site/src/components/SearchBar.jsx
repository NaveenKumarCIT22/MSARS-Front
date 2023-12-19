import React, { useEffect, useRef } from "react";
// import * as React from "react";
// import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { Stack } from "@mui/material";
import axios from "axios";

const SearchBar = () => {
  const pibSearchBarRef = useRef(null);
  // let deptlst = [];
  // let srclst = [];
  // useEffect(() => {
  //   const deptFetch = async () => {
  //     let res = await axios.get("/api/department-cards");
  //     deptlst = res.data;
  //     console.log(res);
  //     res = await axios.get("/api/newscard");
  //     console.log(res);
  //     srclst = res.data;
  //   };
  //   deptFetch();
  // }, []);
  // console.log(deptlst);
  // console.log(srclst);
  const filterList = [
    { title: "Websites", category: "Source-Type" },
    { title: "Youtube", category: "Source-Type" },
    { title: "E-Paper", category: "Source-Type" },
    { title: "Positive", category: "Tonality" },
    { title: "Negative", category: "Tonality" },
    { title: "Neutral", category: "Tonality" },
  ];
  // deptlst.forEach((ele) => {
  //   filterList.push({
  //     title: ele.name,
  //     category: "Department",
  //   });
  // });
  // srclst.forEach((ele) => {
  //   filterList.push({
  //     title: ele.source_name,
  //     category: "Source",
  //   });
  // });

  console.log(filterList);
  return (
    <>
      <div className="pib-search">
        <input id="pib-search-bar" ref={pibSearchBarRef} type="text" />
        <button type="button">Search</button>

        <Stack spacing={3} sx={{ width: 500 }} style={{ color: "#fff" }}>
          <Autocomplete
            sx={{
              bgcolor: "#2B2A33",
            }}
            multiple
            id="tags-outlined"
            options={filterList}
            // options={top100Films}
            getOptionLabel={(option) => {
              console.log("option", option);
              return option.title + "-" + option.category;
            }}
            // defaultValue={[top100Films[1]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Filter By:" placeholder="Filters" />
            )}
          />
        </Stack>
      </div>
    </>
  );
};

export default SearchBar;
