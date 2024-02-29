import React, { useEffect, useState } from "react";
import {
  logoText,
  logoBean,
} from "../../../Assets/LearnSustainability/LogoHeader";

import HeaderImage from "../../../Assets/LearnSustainability/Header.png";
import HeaderImage0 from "../../../Assets/LearnSustainability/Header0.png";
import BackgroundWave from "../../../Utilities/BackgroundWave";

const Header = () => {
  const [scrollYPosition, setScollYPositon] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScollYPositon(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setScollYPositon(window.scrollY);
      });
  });
  return (
    <div>
      <div className={`relative z-auto h-[1300px] w-full pb-[680px]`}>
        <div
          className={`left-0 top-0 h-full w-full ${scrollYPosition <= 658 ? "fixed" : "block"}`}
        >
          <div className={`relative h-screen`}>
            <div className="absolute left-0 top-0 h-[95vh] w-full">
              <BackgroundWave>
                <img
                  src={HeaderImage}
                  alt="green-field"
                  className="h-[95vh] w-full object-cover"
                  style={{
                    maxHeight: `${95 - scrollYPosition * 0.3357 > 0 ? 95 - scrollYPosition * 0.3357 : 0}vh`,
                  }}
                />
                <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-20 content-['']"></div>
              </BackgroundWave>
            </div>

            {/* Logo */}
            <div className="relative h-screen w-full">
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
              >
                <div
                  className="aspect-square p-7"
                  style={{
                    rotate: `${scrollYPosition * 0.69}deg`,
                  }}
                >
                  {logoText}
                </div>
              </div>
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                <div>{logoBean}</div>
              </div>
            </div>
          </div>

          {/* The Pop-up */}
          <div
            className="absolute bottom-0 left-0 h-screen w-full px-4 py-12 md:px-12"
            style={{
              clipPath: `circle(${scrollYPosition > 100 ? Math.min((scrollYPosition - 100) * 0.25, 100) : 0}%)`,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <img
                src={HeaderImage0}
                alt="selected-bean"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#231f20] bg-opacity-50 content-['']"
                style={{
                  opacity: `${(scrollYPosition - 100) * 0.25 >= 40 ? Math.min(((scrollYPosition - 100) * 0.25 - 40) / 100, 1) : 0}`,
                }}
              >
                <p className="max-w-[46.5rem] p-12 text-center text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                  Our mission is to create massive positive change in the
                  coffee-verse. From farm to roaster to consumer. More fair,
                  more delicious, more sustainable, more future-forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
