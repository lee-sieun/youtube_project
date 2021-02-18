import React, { Component } from "react";

class VideoCard extends Component {
  //상위 컴포넌트에서 전달 받아서 타이틀과 작가 전달!
  state = { title: "yeah!", author: "Sieun" };

  render() {
    const card = this.props.card;
    console.log(card);
    const cardTitle = card["title"];
    const cardChannelTitle = card["channelTitle"];
    return (
      <>
        <img
          className="videoCard-image"
          src={card["thumbnails"]["medium"]["url"]}
          alt="videoCardImage"
        ></img>
        <div>
          <h3 className="videoCard-title">{cardTitle}</h3>
          <span className="videoCard-author">{cardChannelTitle}</span>
        </div>
      </>
    );
  }
}

export default VideoCard;
