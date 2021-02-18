import React from "react";

const SearchBar = (props) => {
  return (
    <span className="searchBar">
      <button className="searchIcon">
        <i className="fab fa-youtube"></i>
      </button>
      <h2 className="searchLogo">Youtube</h2>
    </span>
  );
};

export default SearchBar;
