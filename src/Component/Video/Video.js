import React from "react";

import "./style.css";
import ReactPlayer from "react-player";

const Video = ({ video }) => {
  return (
    <div className="Documentary">
      <ReactPlayer width="500px" height="350px" url={video.video} />
      <h1>{video.name}</h1>
    </div>
  );
};

export default Video;
