import React, { useEffect, useState } from "react";
import {
  logoText,
  logoBean,
} from "../../../Assets/LearnSustainability/LogoHeader";

import HeaderImage from "../../../Assets/LearnSustainability/Header.png";
import BackgroundWave from "../../../Utilities/BackgroundWave";

const Header = () => {
  const [scrollYPosition, setScollYPositon] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);

      setScollYPositon(window.scrollY);
    });
  });
  return (
    <div>
      <div className="relative h-screen">
        <div>
          <BackgroundWave>
            <img
              src={HeaderImage}
              alt="green-field"
              className="h-[95vh] w-screen object-cover"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-20 content-['']"></div>
          </BackgroundWave>
        </div>
        <div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2">
            <div
              className="p-7"
              style={{
                // transform: `translateX(-${50 - scrollYPosition * 0.01}%)`,
                // transform: `translateY(-${50 - scrollYPosition * 0.01}%)`,
                rotate: `${scrollYPosition * 1}deg`,
              }}
            >
              {logoText}
            </div>
          </div>
          <div className="absolute left-[50.5%] top-[56%] -translate-x-1/2 -translate-y-1/2">
            <div>{logoBean}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
