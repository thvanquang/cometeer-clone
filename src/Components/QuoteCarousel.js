import React, { useState } from "react";

import { stars } from "../Assets/icons/icons";

const Slides = [
  {
    title: "All I can say is wow",
    quote:
      "The coffee Cometeer experience is incredible. It'shaving a high end cup of coffee from a boutique coffee shop at my fingertips.",
    author: "Michael F.",
  },
  {
    title: "Soooo good",
    quote:
      "It is hard to believe this is not coming from a live barista instead of my freezer.",
    author: "Marisa C.",
  },
  {
    title: "I love it",
    quote:
      "Not only is this coffee super convenient to brew right in my office, it is so flavorful and so delicious!",
    author: "Joanna D.",
  },
  {
    title: "Excellent flavor and body",
    quote: "Excellent flavor and body. Perfect when rushing in the morning.",
    author: "Lynn B.",
  },
  {
    title: "Delicious",
    quote: "Spectaculary delicious and so so easy.",
    author: "Alice K.",
  },
  {
    title: "Best cups of coffee",
    quote:
      "Every cup of Cometeer coffee I have is literally one of the best cups of coffee I've ever had.",
    author: "Austin S.",
  },
  {
    title: "Always a pleasant treat",
    quote:
      "Always a pleasant treat to arrive home on delivery day and see that box by the door. Never worry about product going bad within its confines. Especially appreciate total recyclability of product. Always on time.",
    author: "Robert C.",
  },
  {
    title: "Easy!",
    quote: "Easy! Perfect hot cup every time.",
    author: "Paula R.",
  },
  {
    title: "Best I have tasted",
    quote:
      "My overall experience drinking the capsules is excellent. The coffee is the best I have tasted. I set aside time every day to enjoy a cup and relax.",
    author: "Susan D.",
  },
  {
    title: "Love",
    quote: "Love your coffee and love customer service.",
    author: "Lori H.",
  },
  {
    title: "Experience",
    quote: "Enjoyed the coffee and experience. Had tastings with the family.",
    author: "Binnur A.",
  },
  {
    title: "High Quality",
    quote: "Such a high quality product. Love it.",
    author: "Sean F.",
  },
  {
    title: "Sweet Frozen Capsule of Goodness",
    quote:
      "This particular coffee captures the essence of a fine espresso without any of the faffing about with gram scales and grinders. Just a perfect coffee every time.",
    author: "Sandra M.",
  },
  {
    title: "Exclusive",
    quote: "The ONLY coffee I'll drink now.",
    author: "Elizabeth W.",
  },
  {
    title: "Delicious!",
    quote: 'That "coffee shop" taste, in my own home!',
    author: "Joshua K.",
  },
];

const QuoteCarousel = () => {
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
    <div className="relative overflow-hidden bg-[#d8dacf] pb-24 pt-12">
      <h1 className="mb-12 text-center text-[40px]">
        Thousands of 5 Star Reviews
      </h1>

      {/* For mobile screen */}
      <div
        className="flex text-[#1a1a1a] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides.map((slide) => (
          <div key={slide.author} className="mb-12 min-w-full">
            <div className="mx-auto max-w-[460px] rounded-lg bg-[#f3f5e8] p-8">
              <div className="mb-4">{stars}</div>
              <h4 className="mb-8 font-semibold">{slide.title}</h4>
              <p className="mb-4 font-semibold italic">{slide.quote}</p>
              <p className="max-w-[220px] text-xs font-medium uppercase leading-6 tracking-widest">
                {slide.author}
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
              className={`h-4 w-4 rounded-full border-2 border-[#1a1a1a] transition-colors duration-200 ease-out ${currentSlide === i ? "bg-[#1a1a1a]" : "bg-opacity-50"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
