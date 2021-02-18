import React from "react";

const SearchBar = (props) => {
  const searchFormRef = React.createRef();
  const searchInputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const searchInput = searchInputRef.current.value;
    console.log(`submitted search!${searchInput}`);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&key=AIzaSyDx4s78pyfBhiFUTh1Gj1sWSH5hrmSHNWE`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
