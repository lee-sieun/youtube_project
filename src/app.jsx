import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import VideoList from "./components/videoList/videoList";
import Video from "./components/videoDetail/video";
import styles from "./app.module.css";
import { useCallback } from "react";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const handleSearch = useCallback(
    (searchInput) => {
      youtube
        .search(searchInput) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );
  const handleLogo = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    setSelectedVideo(null);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className={styles.app}>
      <Navbar onSearch={handleSearch} onLogoClick={handleLogo} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Video video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={handleVideoClick}
            display={selectedVideo ? "list" : "grid"} //if there's a selected Video then show it list, if not show grid!
          />
        </div>
      </section>
    </div>
  );
};

export default App;
