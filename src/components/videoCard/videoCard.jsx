import React, { Component } from "react";
import styles from "./videoCard.module.css";
class VideoCard extends Component {
  handleVideoClick = () => {
    console.log(`videoClicked ${this.props.video}`);
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
            <p className={styles.title}>{videoTitle}</p>
            <p className={styles.channelTitle}>{videoChannelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoCard;
