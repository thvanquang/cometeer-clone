import React, { useRef, useState } from "react";

import Video from "../../../Utilities/Video";
import AboutCometeerVideo from "../../../Assets/LearnHowItWorks/about-cometeer.mp4";
import AboutCometeerPoster from "../../../Assets/LearnHowItWorks/about-cometeer-poster.png";
import HIWCarousel0 from "../../../Assets/LearnHowItWorks/how-it-works-0.png";
import HIWCarousel1 from "../../../Assets/LearnHowItWorks/how-it-works-1.png";
import HIWCarousel2 from "../../../Assets/LearnHowItWorks/how-it-works-2.png";
import { arrow } from "../../../Assets/icons/icons";

const AboutCometeer = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoRef = useRef(null);
  const videoClickHandler = () => {
    if (videoPlay) {
      return;
    }

    setVideoPlay(true);
    videoRef.current.play();
  };

  const totalSlide = 4;

  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    return setCurrentSlide(
      currentSlide === totalSlide ? totalSlide : currentSlide + 1,
    );
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

      {/* How It Works Carousel */}
      <div className="p-12">
        <h1 className="text-3xl font-bold text-black lg:text-5xl">
          How it works
        </h1>
        <div className="mt-10 overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide !== totalSlide ? currentSlide * 35 : currentSlide * 33}vw)`,
            }}
            // only work on min-width 1024px !!! FIXME
          >
            <div className="relative aspect-square min-w-[70vw] overflow-hidden rounded-xl md:min-w-[50vw] lg:min-w-[35vw]">
              <img
                src={HIWCarousel0}
                alt="how it works"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50 content-['']"></div>
              <div className="absolute inset-0 flex items-end p-12">
                <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                  Peel and enjoy!
                </h1>
              </div>
            </div>

            <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw]">
              <h3 className="p-12 text-lg text-white md:text-xl lg:text-2xl">
                Defrost overnight, hot water dip, or no defrost – your choice!
                Peel the lid and enjoy the magic of a great coffee cup! Your
                delicious brew is seconds away.
              </h3>
            </div>

            <div className="relative aspect-square min-w-[70vw] overflow-hidden rounded-xl md:min-w-[50vw] lg:min-w-[35vw]">
              <img
                src={HIWCarousel1}
                alt="how it works"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-40 content-['']"></div>
              <div className="absolute inset-0 flex items-end p-12">
                <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                  Create your perfect cup of coffee!
                </h1>
              </div>
            </div>

            <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw] ">
              <h3 className="p-12 text-lg text-white md:text-xl lg:text-2xl">
                Combine the frozen puck with 6-8 oz of hot water or milk for a
                cozy, hot brew. Feeling cool? Try pouring the defrosted capsule
                contents into cold water with ice for a refreshing iced coffee
                delight!
              </h3>
            </div>

            <div className="relative aspect-square min-w-[70vw] overflow-hidden rounded-xl md:min-w-[50vw] lg:min-w-[35vw]">
              <img
                src={HIWCarousel2}
                alt="how it works"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-12">
                <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                  Now you can enjoy a delicious cup of coffee anywhere!
                </h1>
              </div>
            </div>

            <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw]">
              <h3 className="p-12 text-lg text-white md:text-xl lg:text-2xl">
                Cometeer capsules taste amazing even up to 24 hours after
                thawing. Plus, they are TSA-approved, so you can easily take
                them with you on the plane. Say goodbye to coffee cravings on
                your travels!
              </h3>
            </div>
          </div>
        </div>

        <div className="bottom-2 left-0 right-0 mt-8 flex items-center justify-between gap-8">
          <button
            onClick={prevSlide}
            className="rotate-180 rounded-full border border-[#a0a0a0]  p-3 active:opacity-50"
          >
            {arrow}
          </button>

          <div className="relative left-0 right-0 w-full">
            <div className="flex h-[2px] w-full items-center bg-[#2b2c2c] opacity-10"></div>

            <div
              className="absolute -top-[25%] h-[3px] w-[42%] bg-[#2b2c2c] transition-transform duration-300 ease-in"
              style={{
                transform: `translateX(${currentSlide !== totalSlide ? currentSlide * 40 : (currentSlide - 1) * 40 + 18.1}%)`,
              }}
              // 18.1% of drag of scroll bar is remaining (7.2%) of total scroll bar we need to drag to (last slide)
            ></div>
          </div>

          <button
            onClick={nextSlide}
            className="rounded-full border border-[#a0a0a0] p-3 active:opacity-50"
          >
            {arrow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCometeer;
