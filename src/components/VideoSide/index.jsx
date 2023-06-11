import React from 'react';
import VideoItem from '../../components/Home/VideoList/VideoItem';

function VideoSide({ video }) {
  return (
    <div>
      <VideoItem video={video} />
    </div>
  );
}

export default VideoSide;
