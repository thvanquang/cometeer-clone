import React, { useEffect, useState } from "react";

import { arrow } from "../Assets/icons/icons";

const CarouselLearnPages = ({ CAROUSEL }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(5);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setTotalSlide(4);
      }
    });
  }, []);

  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    return setCurrentSlide(
      currentSlide === totalSlide ? totalSlide : currentSlide + 1,
    );
  };
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // work only on desktop screen
  return (
    <div>
      {/* min-width 1024px */}
      <div className="mt-10 hidden overflow-hidden lg:block">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide !== totalSlide ? currentSlide * 35 : currentSlide * 33}vw)`,
          }}
        >
          {CAROUSEL.map((item) => (
            <>
              <div className="relative aspect-square min-w-[70vw] overflow-hidden rounded-xl md:min-w-[50vw] lg:min-w-[35vw]">
                <img
                  src={item.image}
                  alt="how it works"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50 content-['']"></div>
                <div className="absolute inset-0 flex items-end p-12">
                  <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                    {item.title}
                  </h1>
                </div>
              </div>

              <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw]">
                <h3 className="p-12 text-lg text-white md:text-xl lg:text-xl">
                  {item.content}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* min-width 768px */}
      <div className="mt-10 hidden overflow-hidden md:block lg:hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide !== totalSlide ? currentSlide * 58 : currentSlide * 68}%)`,
          }}
        >
          {CAROUSEL.map((item) => (
            <>
              <div className="relative aspect-square overflow-hidden rounded-xl md:min-w-[50vw]">
                <img
                  src={item.image}
                  alt="how it works"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50 content-['']"></div>
                <div className="absolute inset-0 flex items-end p-12">
                  <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                    {item.title}
                  </h1>
                </div>
              </div>

              <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw]">
                <h3 className="p-12 text-lg text-white md:text-xl lg:text-2xl">
                  {item.content}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* mobile screen */}
      <div className="mt-10 overflow-hidden md:hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide !== totalSlide ? currentSlide * 78 : currentSlide * 80}%)`,
          }}
        >
          {CAROUSEL.map((item) => (
            <>
              <div className="relative aspect-square min-w-[70vw] overflow-hidden rounded-xl md:min-w-[50vw] lg:min-w-[35vw]">
                <img
                  src={item.image}
                  alt="how it works"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50 content-['']"></div>
                <div className="absolute inset-0 flex items-end p-12">
                  <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
                    {item.title}
                  </h1>
                </div>
              </div>

              <div className="flex aspect-square min-w-[70vw] items-end rounded-xl bg-[#2c2b2b] md:min-w-[50vw] lg:min-w-[35vw]">
                <h3 className="p-12 text-lg text-white md:text-xl lg:text-2xl">
                  {item.content}
                </h3>
              </div>
            </>
          ))}
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
  );
};

export default CarouselLearnPages;
