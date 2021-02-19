import React from "react";
import styles from "./videoDetail.module.css";

const Video = ({ video }) => {
  return (
    <>
      <h2>{video.snippet.title}</h2>
      {/* <iframe
        id="ytplayer"
        type="text/html"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${video.videoID}`}
        frameBorder="0"
      ></iframe> */}
      <h3>{video.snippet.title}</h3>
      {/* <span>{props.videoDesc}</span> */}
    </>
  );
};

export default Video;
