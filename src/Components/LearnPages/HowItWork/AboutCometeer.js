import React, { useRef, useState } from "react";

import Video from "../../../Utilities/Video";
import AboutCometeerVideo from "../../../Assets/LearnHowItWorks/about-cometeer.mp4";
import AboutCometeerPoster from "../../../Assets/LearnHowItWorks/about-cometeer-poster.png";

const AboutCometeer = () => {
  const [videoPlay, letVideoPlay] = useState(false);

  const videoRef = useRef(null);
  const videoClickHandler = () => {
    if (videoPlay) {
      return;
    }

    letVideoPlay(true);
    videoRef.current.play();
  };

  return (
    <div>
      <div className="px-32 py-12">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold lg:text-3xl">
            A new day has arrived on Earth for coffee
          </h2>
          <p>What you need to know about Cometeer Coffee</p>
        </div>
        <div onClick={videoClickHandler} className="mt-12">
          <Video
            videoRef={videoRef}
            videoPlay={videoPlay}
            source={AboutCometeerVideo}
            poster={AboutCometeerPoster}
            videoStyle={"w-[80vw] h-[70vh] aspect-video"}
          />
        </div>
      </div>

      <div className="p-12">
        <h1 className="text-3xl font-bold lg:text-5xl">How it works</h1>
      </div>
    </div>
  );
};

export default AboutCometeer;
