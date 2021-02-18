import React, { Component } from "react";
import VideoCard from "./videoCard";

class VideoPopularList extends Component {
  state = { videoCards: [] };
  componentDidMount() {
    console.log(`habit: videoPopularList mounted`);
    // var formdata = new FormData();

    var requestOptions = {
      method: "GET",
      //   body: formdata,
      redirect: "follow",
      headers: {
        "content-type": "application/json",
      },
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDx4s78pyfBhiFUTh1Gj1sWSH5hrmSHNWE",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ videoCards: result.items });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <>
        {this.state.videoCards.map((card) => (
          <VideoCard key={card.id} card={card.snippet} />
        ))}
      </>
    );
  }
}

export default VideoPopularList;
