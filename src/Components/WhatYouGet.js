import React, { useState, useRef } from "react";
import { Element } from "react-scroll";

import { useInView } from "react-intersection-observer";

import { arrow } from "../Assets/icons/icons";

import CapsuleEcosystem from "./CapsuleEcosystem";

const WHAT_YOU_GET = [
  {
    title: "32 Frozen Capsules Ship on Dry Ice to Your Door",
    content:
      "Coffee brewed from the best beans sourced from award winning Roasters.",
    srcVideo:
      "https://cdn.shopify.com/videos/c/o/v/0bec71a21b224b50b8cacb699be661df.webm",
  },
  {
    title: "Transfer Your Little Frozen Pucks of Deliciousness to the Freezer",
    content:
      "Cometeer preserves freshly brewed peak flavor for months and months and months.",
    srcVideo:
      "https://cdn.shopify.com/videos/c/o/v/ddf830f450d44cc39a322bb84ecdb072.webm",
  },
  {
    title: "Make Hot or Iced Coffees and Lattes in Seconds",
    content: "No machine required - just melt and enjoy the perfect.",
    srcVideo:
      "https://cdn.shopify.com/videos/c/o/v/8c192d1221da4b4d9b53d99c2bdaccba.webm",
  },
];

const ProductWhatYouGet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  // this so hardcode @@ !!!
  const videoRef0 = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRefs = [videoRef0, videoRef1, videoRef2];

  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.5,
  });

  const videoToggleHandler = () => {
    if (isLoaded) {
      if (inView) {
        videoRefs[currentSlide].current.load();
        setTimeout(() => videoRefs[currentSlide].current.play(), 500);
      }
    }
  };
  const videoLoadedHandler = () => {
    setIsLoaded(true);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === WHAT_YOU_GET.length - 1
        ? WHAT_YOU_GET.length - 1
        : currentSlide + 1,
    );
  };

  return (
    <Element name="what-in-your-order">
      <div onClick={videoToggleHandler()} className="z-0 w-full p-8">
        <h1 className="mb-8 text-3xl font-bold">What's in Your Order</h1>

        <div
          ref={intersectionRef}
          className="relative w-full overflow-hidden rounded-2xl border border-[#a0a0a0] bg-[#f7f0d3] px-4 py-8"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {WHAT_YOU_GET.map((section, i) => {
              return (
                <div
                  key={section.title}
                  className="min-w-full max-w-full items-center justify-between gap-8 p-4 lg:flex"
                >
                  <div className="space-y-6 text-center lg:text-start">
                    <h1 className="text-4xl font-bold">{section.title}</h1>
                    <p>{section.content}</p>
                  </div>

                  <div className="flex w-full items-center justify-center px-20 md:px-16 lg:w-fit">
                    <video
                      ref={videoRefs[i]}
                      playsInline
                      muted="muted"
                      preload="metadata"
                      onLoadedData={videoLoadedHandler}
                      className="w-auto max-w-[16.25rem] lg:max-w-[20rem]"
                      // FIXME
                    >
                      <source src={section.srcVideo} type="video/webm"></source>
                    </video>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bottom-2 left-0 right-0 mx-4 flex items-center justify-between gap-8">
            <button
              onClick={prevSlide}
              className="rotate-180 rounded-full border border-[#a0a0a0]  p-3 active:opacity-50"
            >
              {arrow}
            </button>

            <div className="relative left-0 right-0 w-full">
              <div className="flex h-[2px] w-full items-center bg-[#2b2c2c] opacity-10"></div>
              <div
                className="absolute -top-[25%] h-[3px] w-1/3 bg-[#2b2c2c] transition-transform duration-300 ease-in"
                // this 1/3 is hardcode ;__;
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
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

        {/* Capsule features */}
        <CapsuleEcosystem />
      </div>
    </Element>
  );
};

export default ProductWhatYouGet;
