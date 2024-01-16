import React from "react";

import Video from "../Assets/Banner/video.mp4";

import { arrow } from "../Assets/icons/Banner";

const Banner = () => {
  return (
    <div className="relative -z-50">
      <div className="h-full w-full">
        <video
          playsInline={true}
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          preload="metadata"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      {/* adjust padding !!! */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-[#f3f5e8]">
        <div>
          <h1 className="mb-2 text-center text-3xl font-black">
            Earth's Best Coffee Comes from the Freezer
          </h1>
          <p className="text-center">
            Precision-Brewed Coffee, Flash-Frozen for Unrivaled Flavor
          </p>
        </div>

        <button className="flex items-center gap-4 rounded-full bg-[#f5d577] px-10 py-2 text-[#2c2b2b]">
          TRY COMETEER {arrow}
        </button>
      </div>
    </div>
  );
};

export default Banner;
