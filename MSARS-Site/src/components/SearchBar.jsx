import React, { useRef } from "react";
// import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

const SearchBar = () => {
  const pibSearchBarRef = useRef(null);
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  console.log(top100Films);
  return (
    <>
      <div className="pib-search">
        <input id="pib-search-bar" ref={pibSearchBarRef} type="text" />
        <button type="button">Search</button>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          // options={top100Films}
          getOptionLabel={(option) => {
            console.log("option", option);
            return option.title;
          }}
          defaultValue={[top100Films[13]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filterSelectedOptions"
              placeholder="Favorites"
            />
          )}
        />
      </div>
    </>
  );
};

export default SearchBar;
