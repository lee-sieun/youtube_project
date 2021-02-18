import React, { Component } from "react";
import VideoCard from "../videoCard/videoCard";
import styles from "./videoList.module.css";

class VideoList extends Component {
  state = { videoCards: [] };

  handleVideoClick = (video) => {
    this.props.onVideoClick(video);
  };
  componentDidMount() {
    this.setState({ videoCards: this.props.items });
  }

  render() {
    return (
      <ul className={styles.videos}>
        {this.props.videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onVideoClick={this.handleVideoClick}
          />
        ))}
      </ul>
    );
  }
}

export default VideoList;
