import React, { Component } from "react";
import styles from "./videoCard.module.css";

const VideoCard = ({ video, onVideoClick }) => {
  return (
    <li className={styles.container} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet["thumbnails"]["medium"]["url"]}
          alt="videoCardImage"
        ></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
