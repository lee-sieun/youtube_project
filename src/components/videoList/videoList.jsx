import React from "react";
import VideoCard from "../videoCard/videoCard";
import styles from "./videoList.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  const handleVideoClick = (video) => {
    console.log("clicked on videoList");
    onVideoClick(video);
  };
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onVideoClick={handleVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
