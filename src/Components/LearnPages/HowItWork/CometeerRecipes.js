import React, { useState } from "react";

import classes from "./CometeerRecipe.module.css";
import Video from "../../../Utilities/Video";

import { arrow } from "../../../Assets/icons/icons";

import SpecificDrinksVid from "../../../Assets/LearnHowItWorks/specific-drinks.mp4";
import SpecificDrinksPoster from "../../../Assets/LearnHowItWorks/specific-drinks-poster.png";

import IcedCoffee from "../../../Assets/ProductCometeerRecipes/iced-coffee.mp4";
import IcedCoffeePoster from "../../../Assets/ProductCometeerRecipes/poster-iced-coffee.png";
import HotCoffee from "../../../Assets/ProductCometeerRecipes/hot-coffee.mp4";
import HotCoffeePoster from "../../../Assets/ProductCometeerRecipes/poster-hot-coffe.png";
import IcedLatte from "../../../Assets/ProductCometeerRecipes/iced-latte.mp4";
import IcedLattePoster from "../../../Assets/ProductCometeerRecipes/poster-iced-latte.png";
import HotLatte from "../../../Assets/ProductCometeerRecipes/hot-latte.mp4";
import HotLattePoster from "../../../Assets/ProductCometeerRecipes/poster-hot-latte.png";
import Affogato from "../../../Assets/ProductCometeerRecipes/affogato.mp4";
import AffogatoPoster from "../../../Assets/ProductCometeerRecipes/poster-affogato.png";
import EspressoMartini from "../../../Assets/ProductCometeerRecipes/espresso-martini.mp4";
import EspressoMartiniPoster from "../../../Assets/ProductCometeerRecipes/poster-espresso-martini.png";

const RECIPES = [
  {
    section: "Iced & Hot Drinks",
    recipes: [
      {
        title: "Iced Coffee",
        description:
          "Melt contents and pour into 6-8 oz of cold water, add ice.",
        video: IcedCoffee,
        poster: IcedCoffeePoster,
      },
      {
        title: "Hot Coffee",
        description: "Combine frozen puck with 6 - 8 oz of hot water.",
        video: HotCoffee,
        poster: HotCoffeePoster,
      },
      {
        title: "Iced Latte",
        description:
          "Melt contents and pour into 6 oz of milk or dairy alternative, add ice.",
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
    ],
  },
  {
    section: "Specialty Drinks",
    recipes: [
      {
        title: "Espresso Martini",
        description:
          "Add capsule contents to 2 oz of Vodka, 1 oz Simple Syrup. Shake with ice.",
        video: EspressoMartini,
        poster: EspressoMartiniPoster,
      },
      {
        title: "Affogato",
        description: "Pour melted coffee over a scoop of vanilla ice cream.",
        video: Affogato,
        poster: AffogatoPoster,
      },
    ],
  },
];
const CometeerRecipes = () => {
  const [sectionSelected, setSectionSelected] = useState("Iced & Hot Drinks");
  const [currentSlide, setCurrentSlide] = useState(0);

  const recipesSelected = RECIPES.find(
    (section) => section.section === sectionSelected,
  );

  //!!! i try to create a utility components slider: update later
  const totalItemsInViewport = Math.floor(100 / 27);
  // 27 is width of one item
  const totalSlide = Math.floor(
    recipesSelected.recipes.length / totalItemsInViewport,
  );

  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    return setCurrentSlide(
      currentSlide === totalSlide ? totalSlide : currentSlide + 1,
    );
  };

  return (
    <div>
      {/* Specific Drink */}
      {/* FIXME */}
      <div className={classes.specificDrinksBg}>
        <div className="px-4 py-12 md:px-12">
          <h2 className="text-center text-xl font-bold text-white lg:text-2xl ">
            Here are some how-to’s of specific drinks.
          </h2>

          <div className="mt-16 gap-12 md:flex">
            <div>
              <Video
                source={SpecificDrinksVid}
                poster={SpecificDrinksPoster}
                videoStyle={"aspect-square md:w-[45vw] max-h-[28rem]"}
              />
            </div>
            <div>
              <div className="space-y-4 text-white">
                <div>
                  <span className="text-xs uppercase">Featured recipe</span>
                  <h4 className="font-bold">Cometeer Tonic</h4>
                </div>
                <p>
                  A bubbly Cometeer soda drink made with tonic water and
                  cranberry juice.
                </p>
                <div className={classes.specificDrinksIngredientsBg}>
                  <h4 className="text-sm font-bold uppercase">Ingredients</h4>
                  <ul className="ml-10 mt-6 list-disc">
                    <li>1 Cometeer capsule (medium or light roast)</li>
                    <li>6 oz. fresh tonic water</li>
                    <li>1-2 oz. cranberry juice</li>
                    <li>Ice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cometeer Recipe */}
      <div className="relative overflow-hidden bg-[#2b2c2c] px-10 py-20 pb-32">
        <div className="flex justify-center gap-6">
          {RECIPES.map((section) => (
            <button
              key={section.section}
              onClick={() => {
                setSectionSelected(section.section);
                setCurrentSlide(0);
              }}
              className={`rounded-full border border-white px-6 py-3 ${sectionSelected === section.section ? "bg-white text-[#2b2c2c]" : "bg-transparent text-white"}`}
            >
              <p className="uppercase">{section.section}</p>
            </button>
          ))}
        </div>

        <div>
          <div
            className="flex  transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 27}%)`,
            }}
          >
            {recipesSelected.recipes.map((recipe, i) => (
              <div
                key={recipe.title}
                className="mt-10 w-[27vw] space-y-2 px-10 lg:mr-10 lg:min-w-[27vw] lg:px-0"
              >
                <div
                  // onClick={() => videoClickHandler(i)}
                  className="group relative w-full overflow-hidden"
                >
                  <Video
                    // videoRef={videoRefs[i]}
                    // videoPlay={videoPlay[i]}
                    source={recipe.video}
                    poster={recipe.poster}
                    videoStyle={"aspect-square w-full"}
                  />
                </div>

                <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  {recipe.title}
                </h1>
                <p className="text-white">{recipe.description}</p>
              </div>
            ))}
          </div>

          {totalSlide !== 0 && (
            <div className="absolute bottom-16 left-0 right-0 mt-8 flex items-center justify-between gap-8 px-8">
              <button
                onClick={prevSlide}
                className="rotate-180 rounded-full border border-[#a0a0a0] p-2 text-white active:opacity-50"
              >
                {arrow}
              </button>

              <div className="relative left-0 right-0 w-full">
                <div className="flex h-[2px] w-full items-center bg-[#fff] opacity-10"></div>
                <div
                  className="absolute -top-[25%] hidden h-[3px] w-[81%] bg-[#fff] transition-transform duration-300 ease-in lg:block"
                  style={{
                    transform: `translateX(${currentSlide * 23.45}%)`,
                    // this is still hardcode FIXME
                  }}
                ></div>
              </div>

              <button
                onClick={nextSlide}
                className="rounded-full border border-[#a0a0a0] p-2 text-white active:opacity-50"
              >
                {arrow}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CometeerRecipes;
