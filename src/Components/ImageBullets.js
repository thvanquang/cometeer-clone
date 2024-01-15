import React from "react";

import BestBean from "../Assets/the-best-beans.png";
import PerfectlyBrewed from "../Assets/perfectly-brewed.png";
import FlashFrozen from "../Assets/flash-frozen-for-peak-freshness.png";
import CafeDrink from "../Assets/cafe-drink-in-sec.png";

const BULLETS = [
  {
    title: "The Best Beans, Period",
    content:
      "We partner with the very best independent roasters across the USA to source the highest quality coffee",
    image: BestBean,
  },
  {
    title: "Perfectly Brewed",
    content:
      "Our innovative brew technique extracts more flavor and aroma than previously possible",
    image: PerfectlyBrewed,
  },
  {
    title: "Flash-Frozen for Peak Freshness",
    content:
      "A liquid nitrogen shower preserves incredible flavor and locks in freshness you can taste",
    image: FlashFrozen,
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
      <ul className="flex max-w-full flex-col gap-6 sm:grid sm:max-w-full sm:grid-cols-2 lg:grid-cols-4">
        {BULLETS.map((bullet) => (
          <li key={bullet.title} className="flex flex-col items-center">
            <img src={bullet.image} alt={bullet.title} />
            <h4 className="my-6 text-center text-xl font-bold">
              {bullet.title}
            </h4>
            <p className="text-center">{bullet.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageBullets;
