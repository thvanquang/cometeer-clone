import React, { useState } from "react";

import { stars } from "../Assets/icons/icons";

const Slides = [
  {
    quote:
      "Every one I have tried so far is out of this world. Can’t wait to keep working through my collection. Absolutely delicious!!!",
    dateSubcribe: "Tim C., Subscriber since January 2023",
  },
  {
    quote: "Spectacularly delicious and so so easy.",
    dateSubcribe: "Alice K., Subscriber since March 2020",
  },
  {
    quote:
      "Every cup of Cometeer coffee I have is literally one of the best cups of coffee I've ever had.",
    dateSubcribe: "Austin S., Subscriber since December 2020",
  },
  {
    quote: "Top 1% for sure.",
    dateSubcribe: "Michael J., Subscriber since February 2023",
  },
  {
    quote: "Easy! Perfect hot cup every time.",
    dateSubcribe: "Paula R., Subscriber since June 2019",
  },
  {
    quote:
      "My overall experience drinking the capsules is excellent. The coffee is the best I have tasted. I set aside time every day to enjoy a cup and relax.",
    dateSubcribe: "Susan D., Subscriber since April 2020",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? Slides.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === Slides.length - 1 ? 0 : currentSlide + 1);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    }
    if (event.key === "ArrowRight") {
      nextSlide();
    }
  });

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex text-[#f3f5e8] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides.map((slide) => (
          <div
            key={slide.dateSubcribe}
            className="min-w-[100%] bg-[#1A1A1A] py-24 text-center"
          >
            <div className="mx-auto max-w-[460px]">
              <div className="mb-4 flex justify-center">{stars}</div>
              <p className="mb-4 font-semibold italic">{slide.quote}</p>
              <p className="mx-auto max-w-[220px] text-center text-xs font-medium uppercase leading-6 tracking-widest">
                {slide.dateSubcribe}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-14 left-0 right-0">
        <div className="flex items-center justify-center gap-4">
          {Slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-4 w-4 rounded-full border-2 border-white transition-colors duration-500 ease-out ${currentSlide === i ? "border-none bg-[#f5d577]" : "bg-opacity-50"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
