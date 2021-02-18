import React, { Component } from "react";

class VideoCard extends Component {
  handleCardClick = () => {
    this.props.onCardClick(this.props.card);
  };
  render() {
    const card = this.props.card;
    const cardTitle = card["title"];
    const cardChannelTitle = card["channelTitle"];
    return (
      <button className="videoCard" onClick={this.handleCardClick}>
        <img
          className="videoCard-image"
          src={card["thumbnails"]["medium"]["url"]}
          alt="videoCardImage"
        ></img>
        <div>
          <h3 className="videoCard-title">{cardTitle}</h3>
          <span className="videoCard-author">{cardChannelTitle}</span>
        </div>
      </button>
    );
  }
}

export default VideoCard;
