import React, { Component } from "react";
import styles from "./videoCard.module.css";
class VideoCard extends Component {
  handleVideoClick = () => {
    console.log("clicked");
    this.props.onVideoClick(this.props.video);
  };
  render() {
    const video = this.props.video.snippet;
    const videoTitle = video["title"];
    const videoChannelTitle = video["channelTitle"];

    return (
      <li className={styles.container} onClick={this.handleVideoClick}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={video["thumbnails"]["medium"]["url"]}
            alt="videoCardImage"
          ></img>
          <div className={styles.metadata}>
            <h3 className={styles.title}>{videoTitle}</h3>
            <span className={styles.channelTitle}>{videoChannelTitle}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoCard;
