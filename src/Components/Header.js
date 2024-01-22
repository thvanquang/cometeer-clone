import React from "react";

import Video from "../Assets/Banner/video.mp4";

import ButtonArrow from "../Utilities/ButtonArrow";

const Header = () => {
  return (
    <div className=" relative h-[100vw] min-h-[450px] w-[98.8vw] lg:h-[101vh]">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 ">
        <div className="mb-10 text-[#f3f5e8]">
          <h1 className="mb-2 text-center text-4xl font-black tracking-[-0.02rem]">
            Impossibly convenient. Incredibly delicious.
          </h1>
          <p className="text-center text-lg">
            Your favorite specialty coffee drinks. Ready in seconds—with
            unrivaled flavor.
          </p>
        </div>

        <ButtonArrow buttonStyle={"px-12 py-3 bg-[#f5d577] hover:bg-[#ddbf6d]"}>
          <p className="font-semibold uppercase tracking-widest">
            Try Cometeer
          </p>
        </ButtonArrow>
      </div>
    </div>
  );
};

export default Header;
