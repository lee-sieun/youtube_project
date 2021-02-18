import React, { Component } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import VideoCard from "./components/videoCard/videoCard";
import VideoList from "./components/videoList/videoList";
import "./app.css";
import Video from "./components/video";

class App extends Component {
  state = { videos: [] };
  componentDidMount() {
    console.log(`habit: VideoList mounted`);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDx4s78pyfBhiFUTh1Gj1sWSH5hrmSHNWE",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ videos: result.items });
      })
      .catch((error) => console.log("error", error));
  }

  handleVideoClick = (card) => {
    console.log(`A card in popular list clicked! ${card.title}`);
  };
  handleSearch = (searchInput) => {
    console.log(`searched video List ${searchInput}`);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&key=AIzaSyDx4s78pyfBhiFUTh1Gj1sWSH5hrmSHNWE`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ videos: result.items });
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <>
        <Navbar onSearch={this.handleSearch} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={this.handleVideoClick}
        />
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
