import React from "react";
import { useEffect } from "react";

const Video = (props) => {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${props.videoID}`}
        frameBorder="0"
      ></iframe>
      <h2>{props.videoTitle}</h2>
      <h3>{props.channelTitle}</h3>
      <span>{props.videoDesc}</span>
    </>
  );
};

export default Video;
