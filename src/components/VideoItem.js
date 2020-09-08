import './style.css';
import React from 'react';

const VideoItem = ({ videoProp, onVideoSelectProp }) => {
  return (
    <div
      onClick={() => onVideoSelectProp(videoProp)}
      className='video-item item'
    >
      <img
        src={videoProp.snippet.thumbnails.medium.url}
        alt={videoProp.snippet.title}
        className='ui image'
      />

      <div className='content'>
        <div className='header'> {videoProp.snippet.title} </div>
      </div>
    </div>
  );
};

export default VideoItem;
