import React, { Component } from "react";
import VideoCard from "../videoCard/videoCard";
import styles from "./videoList.module.css";

const VideoList = ({ videos, onVideoClick }) => {
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
        />
      ))}
    </ul>
  );
};

export default VideoList;
