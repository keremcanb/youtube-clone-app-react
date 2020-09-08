import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videosProp, onVideoSelectProp }) => {
  const renderList = videosProp.map((video) => {
    return (
      <VideoItem
        videoProp={video}
        onVideoSelectProp={onVideoSelectProp}
        key={video.id.videoId}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderList}</div>;
};

export default VideoList;
