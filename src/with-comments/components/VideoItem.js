import "../components/style.css";
import React from "react";

// video ve onVideoSelect prop'larını VideoList'ten alıyoruz
const VideoItem = ({ videoProp, onVideoSelectProp }) => {
  return (
    // clicking a single video list item will trigger the onVideoSelect callback
    // sending the selected video back to App
    <div
      onClick={() => onVideoSelectProp(videoProp)}
      className="video-item item"
    >
      <img
        src={videoProp.snippet.thumbnails.medium.url}
        alt={videoProp.snippet.title}
        className="ui image"
      />

      <div className="content">
        <div className="header"> {videoProp.snippet.title} </div>
      </div>
    </div>
  );
};

export default VideoItem;
