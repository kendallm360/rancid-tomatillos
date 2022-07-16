import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ urls }) => {
  let videoUrl;
  if (urls) {
    videoUrl = `https://www.youtube.com/embed/${urls[0].key}`;
  }

  return (
    <div className="video">
      {urls && (
        <ReactPlayer
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
            facebook: {
              appId: "12345",
            },
          }}
          playing
          url={videoUrl}
          height={"100%"}
          width={"100%"}
        />
      )}
    </div>
  );
};
export default VideoPlayer;
