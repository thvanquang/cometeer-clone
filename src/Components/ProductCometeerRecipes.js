import React, { useState, useRef } from "react";

import { playButton } from "../Assets/icons/icons";

import IcedCoffee from "../Assets/ProductCometeerRecipes/iced-coffee.mp4";
import IcedCoffeePoster from "../Assets/ProductCometeerRecipes/poster-iced-coffee.png";
import HotCoffee from "../Assets/ProductCometeerRecipes/hot-coffee.mp4";
import HotCoffeePoster from "../Assets/ProductCometeerRecipes/poster-hot-coffe.png";
import IcedLatte from "../Assets/ProductCometeerRecipes/iced-latte.mp4";
import IcedLattePoster from "../Assets/ProductCometeerRecipes/poster-iced-latte.png";
import HotLatte from "../Assets/ProductCometeerRecipes/hot-latte.mp4";
import HotLattePoster from "../Assets/ProductCometeerRecipes/poster-hot-latte.png";
import Affogato from "../Assets/ProductCometeerRecipes/affogato.mp4";
import AffogatoPoster from "../Assets/ProductCometeerRecipes/poster-affogato.png";

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
    console.log(videoPlay);
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

  return (
    <div className="overflow-hidden p-10">
      <h1 className="text-5xl font-bold">Your Cometeer Recipes</h1>

      <div className="flex items-center overflow-visible">
        {RECIPES.map((recipe, i) => (
          <div
            key={recipe.title}
            className="mr-10 mt-10 min-w-full space-y-2 lg:min-w-[26%]"
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
    </div>
  );
};

export default ProductCometeerRecipes;
