import React from "react";

import { playButton } from "../Assets/icons/icons.js";

const Video = ({ videoRef, videoPlay, source, poster, videoStyle }) => {
  return (
    <div className={`relative ${videoStyle}`}>
      <video
        ref={videoRef}
        controls={videoPlay}
        playsInline={true}
        preload="none"
        loop="loop"
        poster={poster}
        className={`h-full w-full rounded-2xl object-cover`}
      >
        <source src={source} type="video/mp4"></source>
      </video>

      <button
        className={`absolute bottom-8 right-8 scale-[2.3] ${videoPlay && "hidden"}`}
      >
        {playButton}
      </button>
    </div>
  );
};

export default Video;
