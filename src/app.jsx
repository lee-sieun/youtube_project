import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import VideoCard from "./components/videoCard/videoCard";
import VideoList from "./components/videoList/videoList";

import Video from "./components/video";
import "./app.css";

class App extends Component {
  state = { videos: [] };

  componentDidMount() {
    const youtube = this.props.youtube;
    youtube
      .mostPopular() //
      .then((videos) => this.setState({ videos: videos }));
  }

  handleSearch = (searchInput) => {
    const youtube = this.props.youtube;
    youtube
      .search(searchInput) //
      .then((videos) => this.setState({ videos: videos }));
  };
  handleVideoClick = (video) => {
    console.log(`A card in popular list clicked! ${video.snippet.title}`);
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
