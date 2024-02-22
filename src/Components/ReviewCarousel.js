import React, { useState } from "react";
import { arrow, stars } from "../Assets/icons/icons";

const REVIEWS = [
  {
    content:
      "Every one I have tried so far is out of this world. Can't wait to keep working through my collection. Absolutely delicious !!!",
    author: "Tim C.",
  },
  {
    content:
      "I honestly love these coffees!!! You know its quality coffee when you no longer need to put cream into it to cover up the bitterness. I am a huge fan!!",
    author: "Jena F.",
  },
  {
    content:
      "The coffee Cometeer experience is incredible. It's having a high end cup of coffee from a boutique coffee shop at my fingertips  whenever I want and I don't have to leave my home. Just add hot water.",
    author: "Michael F.",
  },
  {
    content: "Top 1% for sure",
    author: "Michael J.",
  },
];

// FIXME
const ProductReviewCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? REVIEWS.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === REVIEWS.length - 1 ? 0 : currentSlide + 1);

  return (
    <div>
      <div className="relative mx-auto w-3/4 overflow-hidden px-8 pb-10 lg:w-3/5">
        {/* their, Cometeer website, set this height(↓) dynamic base on current slide... i not yet know how to apply it... */}
        <div
          className="flex h-min items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {REVIEWS.map((review) => (
            <div key={review.author} className="h-auto min-w-full">
              <div className="mx-auto flex flex-col items-center gap-4 p-8 text-center">
                <div className="text-[#633922]">{stars}</div>
                <h3 className="text-2xl font-black lg:text-3xl">
                  "{review.content}"
                </h3>
                <h4 className="text-xl font-bold">{review.author}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-1/3 flex justify-between">
          <button
            onClick={prevSlide}
            className="rotate-180 rounded-full border border-[#bbb] p-2"
          >
            {arrow}
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border border-[#bbb] p-2 "
          >
            {arrow}
          </button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`rounded-full border border-[#bbb] p-[6px] ${currentSlide === i ? "bg-[#2b2c2c]" : "bg-[#f3f5e8]"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviewCarousel;
