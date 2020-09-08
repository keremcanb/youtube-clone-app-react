import React from "react";
import VideoItem from "./VideoItem";

// videos ve onVideoSelect proplarını app'ten alıyoruz
const VideoList = ({ videosProp, onVideoSelectProp }) => {
  // menüde listelenecek VideoItem'ları iterate ediyoruz
  // map over the passed in videos and create a VideoItem instance for each
  const renderList = videosProp.map((video) => {
    return (
      <VideoItem
        // video prop'unu VideoItem'a aktar
        videoProp={video}
        // onVideoSelect callback prop'unu VideoItem'daki onVideoSelect'e aktar
        onVideoSelectProp={onVideoSelectProp}
        key={video.id.videoId}
      />
    );
  });
  // the list of videos to be displayed is returned here
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
