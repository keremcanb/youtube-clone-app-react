import React from 'react';
import Spinner from './spinner';

const VideoDetail = ({ videoProp }) => {
  if (!videoProp) {
    return (
      <div>
        Loading Videos...
        <br />
        <Spinner />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${videoProp.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='video-player' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{videoProp.snippet.title}</h4>
        <p>{videoProp.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
