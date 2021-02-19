import React, { Component, useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import VideoList from "./components/videoList/videoList";
import Video from "./components/video";
import "./app.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const handleSearch = (searchInput) => {
    youtube
      .search(searchInput) //
      .then((videos) => setVideos(videos));
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    console.log(`A card in popular list clicked! ${video.snippet.title}`);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {selectedVideo && <Video video={selectedVideo} />}

      <VideoList videos={videos} onVideoClick={handleVideoClick} />
    </div>
  );
};

export default App;
