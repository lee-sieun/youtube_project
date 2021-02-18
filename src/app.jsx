import React, { Component } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import VideoCard from "./components/videoCard";
import VideoPopularList from "./components/videoPopularList";
import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <VideoPopularList />
      </>
    );
  }
}

export default App;
