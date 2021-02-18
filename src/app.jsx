import React, { Component } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import VideoCard from "./components/videoCard";
import VideoPopularList from "./components/videoPopularList";
import "./app.css";
import Video from "./components/video";

class App extends Component {
  handleCardClick = (card) => {
    console.log(`A card in popular list clicked! ${card.title}`);
  };
  render() {
    return (
      <>
        <Navbar />
        {/* <VideoPopularList onCardClick={this.handleCardClick} /> */}
        <Video
          videoID="M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          videoTitle="Video Title"
          channelTitle="Channel Title"
          videoDesc="Video Description!"
        />
      </>
    );
  }
}

export default App;
