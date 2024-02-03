import React, { useState, useRef } from "react";
import { Element } from "react-scroll";

import { playButton } from "../../Assets/icons/icons";
import { arrow } from "../../Assets/icons/icons";

import IcedCoffee from "../../Assets/ProductCometeerRecipes/iced-coffee.mp4";
import IcedCoffeePoster from "../../Assets/ProductCometeerRecipes/poster-iced-coffee.png";
import HotCoffee from "../../Assets/ProductCometeerRecipes/hot-coffee.mp4";
import HotCoffeePoster from "../../Assets/ProductCometeerRecipes/poster-hot-coffe.png";
import IcedLatte from "../../Assets/ProductCometeerRecipes/iced-latte.mp4";
import IcedLattePoster from "../../Assets/ProductCometeerRecipes/poster-iced-latte.png";
import HotLatte from "../../Assets/ProductCometeerRecipes/hot-latte.mp4";
import HotLattePoster from "../../Assets/ProductCometeerRecipes/poster-hot-latte.png";
import Affogato from "../../Assets/ProductCometeerRecipes/affogato.mp4";
import AffogatoPoster from "../../Assets/ProductCometeerRecipes/poster-affogato.png";

const RECIPES = [
  {
    title: "Iced Coffee",
    description: "Pour melted coffee into 6 - 8 oz of water and ice.",
    video: IcedCoffee,
    poster: IcedCoffeePoster,
  },
  {
    title: "Hot Coffee",
    description: "Combine frozen coffee puck with 6 - 8 oz of hot water.",
    video: HotCoffee,
    poster: HotCoffeePoster,
  },
  {
    title: "Iced Latte",
    description:
      "Pour melted coffee into 6 oz of milk or dairy alternative, add ice.",
    video: IcedLatte,
    poster: IcedLattePoster,
  },
  {
    title: "Hot Latte",
    description:
      "Pour melted coffee into mug and add 6 oz of steamed milk or dairy alternative.",
    video: HotLatte,
    poster: HotLattePoster,
  },
  {
    title: "Affogato",
    description: "Pour melted coffee over a scoop of vanilla ice cream.",
    video: Affogato,
    poster: AffogatoPoster,
  },
];

const ProductCometeerRecipes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(
    window.innerWidth >= 1024 ? 2 : RECIPES.length - 1,
  );

  const [videoContainerWidth, setVideoContainerWidth] = useState(
    window.innerWidth >= 1024 ? 30 : 100,
  );

  // create new array fill with false value
  const initialArray = Array.from({ length: RECIPES.length }, () => false);
  const [videoPlay, letVideoPlay] = useState(initialArray);

  const videoRef0 = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRefs = [videoRef0, videoRef1, videoRef2, videoRef3, videoRef4];

  const videoClickHandler = (i) => {
    const clickVideo = videoPlay.map((vid, j) => {
      if (i === j) {
        return true;
      } else {
        return vid;
      }
    });

    letVideoPlay(clickVideo);
    videoRefs[i].current.play();
  };

  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    return setCurrentSlide(
      currentSlide === totalSlide ? totalSlide : currentSlide + 1,
    );
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setTotalSlide(3);

      setVideoContainerWidth(30);
      return;
      //   /* 30% above is about width of video + 40px right margin */
    } else {
      setTotalSlide(RECIPES.length - 1);

      setVideoContainerWidth(100);
      return;
    }
  });

  return (
    <Element name="cometeer-recipes" className="overflow-hidden p-10">
      <h1 className="text-5xl font-bold">Your Cometeer Recipes</h1>

      <div
        className="flex items-center overflow-visible transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * videoContainerWidth}%)`,
        }}
      >
        {RECIPES.map((recipe, i) => (
          <div
            key={recipe.title}
            className="mt-10 min-w-full space-y-2 px-10 lg:mr-10 lg:min-w-[26%] lg:px-0"
          >
            <div
              onClick={() => videoClickHandler(i)}
              className="group relative w-full overflow-hidden"
            >
              <video
                ref={videoRefs[i]}
                controls={videoPlay[i]}
                playsInline={true}
                preload="none"
                loop="loop"
                poster={recipe.poster}
                className="aspect-square w-full rounded-2xl object-cover"
              >
                <source src={recipe.video} type="video/mp4"></source>
              </video>

              <button
                className={`absolute bottom-8 right-8 scale-[2.3] ${videoPlay[i] && "hidden"}`}
              >
                {playButton}
              </button>
            </div>

            <h3 className="text-2xl font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
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
          {/* scrollbar width: a = 100% */}

          {/* for larger than mobile screens */}
          <div
            // this 70% below is hardcode to @@ ?? right?? !!!
            className="absolute -top-[25%] hidden h-[3px] w-[70%] bg-[#2b2c2c] transition-transform duration-300 ease-in lg:block"
            //  drag of scrollbar width: b = 0.7a
            style={{ transform: `translateX(${currentSlide * 21.43}%)` }}
            // we only want drag move 2 time
            // => a - 0.7a = 2x ;;;; x is the % we want to calculator
            // <=> x = 0.15a
            // and b = 0.7a
            // <=> x ~ 0.2143b
          ></div>

          {/* for mobile screen */}
          <div
            className={`absolute -top-[25%] h-[3px] w-[20%] bg-[#2b2c2c] transition-transform duration-300 ease-in lg:hidden ${`w-[${(1 / RECIPES.length) * 100}%]`} `}
            // FIXME tailwind cant apply this approach
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
    </Element>
  );
};

export default ProductCometeerRecipes;
