import React, { Component } from "react";
import SearchBar from "./searchBar";

class Navbar extends Component {
  render() {
    return (
      <span className="nav">
        <button className="nav nav-logo">
          <i className="fab fa-youtube"></i>
        </button>
        <h2 className="nav nav-title">Youtube</h2>
        <SearchBar />
      </span>
    );
  }
}

export default Navbar;
