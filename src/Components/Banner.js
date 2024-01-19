import React from "react";

import Video from "../Assets/Banner/video.mp4";

import { arrow } from "../Assets/icons/icons";

const Banner = () => {
  return (
    <div className=" relative h-[125vw] min-h-[450px] w-[100vw] lg:h-[101vh]">
      <div className="-z-50 h-full w-[97%] overflow-hidden">
        <video
          playsInline={true}
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          preload="metadata"
          className="absolute left-[50%] top-[50%] inline-block h-full w-auto -translate-x-1/2 -translate-y-1/2 object-cover xl:w-full"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-[#f3f5e8]">
        <div className="mb-10">
          <h1 className="mb-2 text-center text-3xl font-black">
            Earth's Best Coffee Comes from the Freezer
          </h1>
          <p className="text-center">
            Precision-Brewed Coffee, Flash-Frozen for Unrivaled Flavor
          </p>
        </div>

        <button className="group flex items-center gap-4 rounded-full bg-[#f5d577] px-12 py-3 font-semibold tracking-widest text-[#2c2b2b] hover:bg-[#ddbf6d]">
          TRY COMETEER{" "}
          <i className="group-hover:animate-transition-right">{arrow}</i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
