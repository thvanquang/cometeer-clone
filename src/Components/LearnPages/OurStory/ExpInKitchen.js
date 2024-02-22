import React from "react";

import BackgroundScrollThrough from "../../../Utilities/BackgroundScrollThrough";

import ExperimentInKitchen from "../../../Assets/LearnOurStory/exp-in-kitchen.png";

const ExpInKitchen = () => {
  return (
    <div className="relative">
      <div className="relative">
        <BackgroundScrollThrough image={ExperimentInKitchen}>
          <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-80 content-['']"></div>
        </BackgroundScrollThrough>
      </div>

      <div className="absolute inset-0 top-0 z-0 flex items-center gap-16 px-32 py-20">
        <img
          src={ExperimentInKitchen}
          alt="experimenting in kitchen"
          className="h-full w-full rounded-xl object-cover"
        />

        <div className="w-full space-y-6 text-white">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Experimenting in his kitchen
          </h1>
          <p>
            Roberts knew he wanted to find a way for anyone to make an
            exceptional cup of coffee at home and that the key to success is in
            the freshness of the brew. That's when the idea for flash-freezing
            coffee sparked. So he began experimenting in his kitchen; he grabbed
            ice trays out of his freezer and got to work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpInKitchen;
