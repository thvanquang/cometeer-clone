import React, { useRef, useState } from "react";

import Video from "../../../Utilities/Video";
import CarouselLearnPages from "../../../Utilities/CarouselLearnPages";

import AboutCometeerVideo from "../../../Assets/LearnHowItWorks/about-cometeer.mp4";
import AboutCometeerPoster from "../../../Assets/LearnHowItWorks/about-cometeer-poster.png";
import HIWCarousel0 from "../../../Assets/LearnHowItWorks/how-it-works-0.png";
import HIWCarousel1 from "../../../Assets/LearnHowItWorks/how-it-works-1.png";
import HIWCarousel2 from "../../../Assets/LearnHowItWorks/how-it-works-2.png";

const CAROUSEL = [
  {
    title: "Peel and enjoy!",
    image: HIWCarousel0,
    content:
      "Defrost overnight, hot water dip, or no defrost – your choice! Peel the lid and enjoy the magic of a great coffee cup! Your delicious brew is seconds away.",
  },
  {
    title: "Create your perfect cup of coffee!",
    image: HIWCarousel1,
    content:
      "Combine the frozen puck with 6-8 oz of hot water or milk for a cozy, hot brew. Feeling cool? Try pouring the defrosted capsule contents into cold water with ice for a refreshing iced coffee delight!",
  },
  {
    title: "Now you can enjoy a delicious cup of coffee anywhere!",
    image: HIWCarousel2,
    content:
      "Cometeer capsules taste amazing even up to 24 hours after thawing. Plus, they are TSA-approved, so you can easily take them with you on the plane. Say goodbye to coffee cravings on your travels!",
  },
];

const AboutCometeer = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  const videoRef = useRef(null);
  const videoClickHandler = () => {
    if (videoPlay) {
      return;
    }

    setVideoPlay(true);
    videoRef.current.play();
  };

  return (
    <div>
      <div className="px-8 py-12 lg:px-32">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold lg:text-3xl">
            A new day has arrived on Earth for coffee
          </h2>
          <p>What you need to know about Cometeer Coffee</p>
        </div>
        <div onClick={videoClickHandler} className="mt-12 flex justify-center">
          <Video
            videoRef={videoRef}
            videoPlay={videoPlay}
            source={AboutCometeerVideo}
            poster={AboutCometeerPoster}
            videoStyle={"w-[80vw] h-[70vh] aspect-video"}
          />
        </div>
      </div>

      {/* How It Works Carousel */}
      <div className="p-12">
        <h1 className="text-3xl font-bold text-black lg:text-5xl">
          How it works
        </h1>
        <CarouselLearnPages CAROUSEL={CAROUSEL} />
      </div>
    </div>
  );
};

export default AboutCometeer;
