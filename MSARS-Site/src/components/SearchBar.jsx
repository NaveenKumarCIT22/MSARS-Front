import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const pibSearchBarRef = useRef(null);
  return (
    <>
      <div className="pib-search">
        <input id="pib-search-bar" ref={pibSearchBarRef} type="text" />
        <button type="button">Search</button>
        {/* <div className="sort-widget">
            
        </div> */}
      </div>
    </>
  );
};

export default SearchBar;
