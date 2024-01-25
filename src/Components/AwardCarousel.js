import React, { useEffect, useState } from "react";

const Slides = [
  { title: "Best Inventions 2022 time" },
  { title: "Best New Product Award specialty coffee association" },
  { title: "Best Coffee Subscription Product (#1) USA Today" },
];

const AwardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      const windowWidth = window.innerWidth;
      // console.log(windowWidth);

      if (windowWidth <= 1280) {
        setTimeout(() => {
          setCurrentSlide(
            currentSlide === Slides.length - 1 ? 0 : currentSlide + 1,
          );
        }, 1000);
      } else {
        setCurrentSlide(0);
      }
    };

    window.addEventListener("resize", resizeHandler());

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <div className="overflow-hidden bg-[#1a1a1a] p-4">
      <div
        className="flex items-start text-[#d8dacf] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides.map((award) => (
          <div
            key={award.title}
            className="min-w-full text-center xl:min-w-[450px]"
          >
            <p className="p-8 uppercase">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardCarousel;
