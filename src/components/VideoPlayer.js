import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ urls }) => {
    let videoUrl 
    if (urls) {
          videoUrl = `https://www.youtube.com/embed/${urls[0].key}`;
        }

    return <div className="video">
            {urls && <ReactPlayer url={videoUrl} />}
        </div>
} 
export default VideoPlayer