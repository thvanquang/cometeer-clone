import React, { useEffect, useState } from "react";

const Slides = [
  { title: "Best Inventions 2022 time" },
  { title: "Best New Product Award specialty coffee association" },
  { title: "Best Coffee Subscription Product (#1) USA Today" },
];

const AwardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth < 1024) {
      setTimeout(() => {
        if (currentSlide === 2) {
          setCurrentSlide(0);
          console.log(currentSlide);
        } else {
          setCurrentSlide(currentSlide + 1);
          console.log(currentSlide);
        }
      }, "1000");
    }

    return () => {
      clearTimeout(() => {
        if (currentSlide === Slides.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }, "2000");
    };
  }, [currentSlide, windowWidth]);

  return (
    <div className="overflow-hidden bg-[#1a1a1a] p-4">
      <div
        className="flex items-start text-[#d8dacf] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides.map((award) => (
          <div
            key={award.title}
            className="min-w-full text-center lg:min-w-[450px]"
          >
            <p className="p-8 uppercase">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardCarousel;
