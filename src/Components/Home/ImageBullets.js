import React from "react";

import ButtonArrow from "../../Utilities/ButtonArrow";

import BestBean from "../../Assets/ImageBullets/the-best-beans.png";
import PerfectlyBrewed from "../../Assets/ImageBullets/perfectly-brewed.png";
import Delivered from "../../Assets/ImageBullets/delivered.png";
import CafeDrink from "../../Assets/ImageBullets/cafe-drink-in-sec.png";

const BULLETS = [
  {
    title: "The Best Beans, Period",
    content:
      "The highest quality beans from roasters like Intelligentsia, Counter Culture, Equator and more.",
    image: BestBean,
  },
  {
    title: "The world's most advanced brewing",
    content:
      "Created by an MIT engineer to extract more flavor and aroma than previously possible.",
    image: PerfectlyBrewed,
  },
  {
    title: "Delivered to yourkitchen hyper-fresh",
    content:
      "Liquid nitrogen locks in the aroma—you'll love tasting all the flavor notes.",
    image: Delivered,
  },
  {
    title: "Make any café drink in seconds",
    content:
      "Without the machine—or the café line. Just melt to enjoy. Hot, iced, or latte.",
    image: CafeDrink,
  },
];

const ImageBullets = () => {
  return (
    <div className="px-12 py-16">
      <h1 className="mb-8 text-center text-[40px]">
        The Culmination of 700 Years of Coffee Craft & Science
      </h1>
      <ul className="grid max-w-full grid-cols-1 gap-6  md:max-w-full md:grid-cols-2 lg:grid-cols-4">
        {BULLETS.map((bullet) => (
          <li key={bullet.title} className="flex flex-col ">
            <img src={bullet.image} alt={bullet.title} className="rounded-lg" />
            <h4 className="my-6 text-xl font-bold">{bullet.title}</h4>
            <p className="">{bullet.content}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex w-full justify-center">
        <ButtonArrow buttonStyle={"px-12 py-3 bg-[#f5d577] hover:bg-[#ddbf6d]"}>
          <p className="font-semibold uppercase tracking-widest">
            Try Cometeer
          </p>
        </ButtonArrow>
      </div>
    </div>
  );
};

export default ImageBullets;
