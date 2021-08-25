import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import "./style.css";
import Video from "./Video";

const VideoList = () => {
  const [query, setQuery] = useState("");
  const videos = useSelector((state) => state.videos.videos);

  let videoList = videos
    .filter((video) => video.name.toUpperCase().includes(query.toUpperCase()))
    .map((video) => <Video video={video} key={video.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="videoList">{videoList}</div>
    </>
  );
};

export default VideoList;
