import React from "react";

import HeaderImage from "../../../Assets/LearnHowItWorks/header.png";

import BackgroundWave from "../../../Utilities/BackgroundWave";

const Header = () => {
  return (
    <div className="relative">
      <BackgroundWave>
        <div className="relative">
          <img
            src={HeaderImage}
            alt="header"
            className="h-[60vh] w-full object-cover lg:h-[50vw]"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-10 content-['']"></div>
        </div>
      </BackgroundWave>
      {/* FIXME FONT SIZE */}
      <div className="absolute inset-0 left-1/2 w-[80vw] -translate-x-1/2 translate-y-1/2">
        <h1 className="text-center text-3xl font-bold text-white lg:text-5xl">
          We're creating a new kind of ritual in coffee. It's called melting.
        </h1>
      </div>
    </div>
  );
};

export default Header;
