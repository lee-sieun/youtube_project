import React, { Component } from "react";
import SearchBar from "./searchBar";

class Navbar extends Component {
  handleSearch = (searchInput) => {
    this.props.onSearch(searchInput);
  };
  render() {
    return (
      <div className="nav">
        <i className="nav-logo fab fa-youtube"></i>
        <span>Youtube</span>
        <span className="nav-search">
          <SearchBar onSearch={this.handleSearch} />
        </span>
      </div>
    );
  }
}

export default Navbar;
