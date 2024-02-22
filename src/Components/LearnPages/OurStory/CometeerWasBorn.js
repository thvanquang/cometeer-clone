import React, { useState } from "react";

import ButtonArrowWithCircle from "../../../Utilities/ButtonArrowWithCircle";
import { arrow, stars } from "../../../Assets/icons/icons";
import classes from "./CometeerWasBorn.module.css";

import CometeerBornImage from "../../../Assets/LearnOurStory/cometeer-born-0.png";
import GeorgeHowellAvatar from "../../../Assets/LearnOurStory/george-howell-avatar.png";
import DavidChangAvatar from "../../../Assets/LearnOurStory/david-chang.png";
import BackgroundWave from "../../../Utilities/BackgroundWave";
import { Link } from "react-router-dom";

const QUOTES = [
  {
    content: "Cometeer will do for coffee what the bottle did for wine.",
    author: "George Howell",
    avatar: GeorgeHowellAvatar,
    role: "The Godfather of Specialty Coffee",
  },
  {
    content:
      "I've always loved pour over coffee but didn't have the time nor expertise needed to make it correctly, and I've always wanted to support the best coffee farmers and roasters but didn't know where to start. Cometeer connects all of these dots, making great coffee more accessible for me.",
    author: "David Chang",
    avatar: DavidChangAvatar,
    role: "Michelin Star Chef and Momofuku Founder",
  },
];

const CometeerWasBorn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? QUOTES.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === QUOTES.length - 1 ? 0 : currentSlide + 1);

  return (
    <>
      <div className="px-6 py-20 lg:px-32">
        <div className="gap-16 lg:flex">
          <div className="mb-8 lg:w-[70%]">
            <div className="mb-4 space-y-6">
              <h1 className="text-3xl font-bold lg:text-5xl">
                Cometeer was born
              </h1>
              <p className="text-lg">
                In 2014, Roberts presented his prototype to the “godfather of
                specialty coffee,” George Howell, the result was almost what
                he'd hoped. Howell admitted he was onto something
                revolutionary—but not before first spitting out the undrinkable
                brew Roberts had offered him.
              </p>
              <p className="mb-4 text-lg">
                Together with cofounder and CTO, Doug Hoon, an MIT-trained
                engineer, and with the help of coffee experts and chemists,
                Cometeer was born.
              </p>
            </div>

            <Link to="/products/mixed-roast-box">
              <ButtonArrowWithCircle
                content={"Get started"}
                bgNHover={"bg-[#f5d577] hover:bg-[#2c2b2b]"}
                textColorNHover={"text-[#2c2b2b] hover:text-white"}
              />
            </Link>
          </div>
          <img
            src={CometeerBornImage}
            alt="Cometeer was born"
            className="aspect-[1.2] w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Quote Carousel */}
      <BackgroundWave>
        <div className={classes.carouselBackground}>
          <div className="relative mx-auto w-3/4 overflow-hidden px-8 pb-10 text-white lg:w-3/5">
            <div
              className="flex h-min items-center transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {QUOTES.map((quote) => (
                <div key={quote.author} className="h-auto min-w-full">
                  <div className="mx-auto flex flex-col items-center gap-4 p-8 text-center">
                    <div className="text-[#f5d577]">{stars}</div>
                    <div>
                      <img
                        src={quote.avatar}
                        alt={quote.author}
                        className="aspect-square w-[120px] rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-black lg:text-3xl">
                      “{quote.content}”
                    </h3>
                    <h4 className="text-xl font-bold">{quote.author}</h4>
                    <h5 className="text-[#757575]">{quote.role}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-0 right-0 top-1/2 flex justify-between">
              <button
                onClick={prevSlide}
                className="rotate-180 rounded-full border border-white p-2"
              >
                {arrow}
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full border border-white p-2 "
              >
                {arrow}
              </button>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  className={`rounded-full border border-white p-[6px] ${currentSlide === i ? "bg-[#f3f5e8]" : "bg-transparent"}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </BackgroundWave>
    </>
  );
};

export default CometeerWasBorn;
