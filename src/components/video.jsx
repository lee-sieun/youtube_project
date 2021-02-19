import React from "react";

const Video = ({ video }) => {
  return (
    <>
      {/* <h2>{props.video.snippet.title}</h2> */}
      <iframe
        id="ytplayer"
        type="text/html"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      ></iframe>

      <h3>{video.snippet.channelTitle}</h3>
      <span>{video.snippet.description}</span>
    </>
  );
};

export default Video;
