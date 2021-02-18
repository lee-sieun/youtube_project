import React from "react";

const SearchBar = (props) => {
  const searchFormRef = React.createRef();
  const searchInputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const searchInput = searchInputRef.current.value;
    console.log(`submitted search!${searchInput}`);
    props.onSearch(searchInput);

    searchFormRef.current.reset();
  };
  return (
    <form ref={searchFormRef} className="search-form" onSubmit={onSubmit}>
      <input
        className="search-input"
        type="text"
        ref={searchInputRef}
        placeholder="Search..!"
      ></input>
      <button>
        <i className="search-button fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
