import React from "react";
import Spinner from "./spinner";

// app'teki selectedVideo state'inden video prop'u alıyoruz
const VideoDetail = ({ videoProp }) => {
  // if no video is returned, display a loading message
  if (!videoProp) {
    return (
      <div>
        Loading Videos...
        <br />
        <Spinner />
      </div>
    );
  }

  // the base URL of the YouTube video to display in the iframe element
  const videoSrc = `https://www.youtube.com/embed/${videoProp.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        {/* The video will display in this iframe */}
        <iframe src={videoSrc} title="video-player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoProp.snippet.title}</h4>
        <p>{videoProp.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
