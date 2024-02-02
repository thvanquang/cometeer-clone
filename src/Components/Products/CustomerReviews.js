import React, { useState } from "react";
import {
  chevronDown,
  coffeeBean,
  fiveCoffeeBean,
} from "../../Assets/icons/icons";
import Reviews from "./Reviews";

const FILTERS = [
  ["Bitternes", "Taste", "Strength", "Feelings", "Fit", "Smell", "..."],
  ["Aftertaste", "Portion", "Result", "Quality", "Delivery", "Pods"],
];

const ProductCustomerReviews = () => {
  const [ratingDropdown, setRatingDropdown] = useState(false);
  const [imagesDropdown, setImagesDropdown] = useState(false);
  return (
    <div className="relative px-6 py-12">
      <h1 className="text-3xl font-bold">Reviews</h1>

      <div className="mt-8">
        <div className="left-0 right-0 mb-8 border border-b-[#2b2c2c] pb-8">
          <h3 className="text-xl font-bold uppercase underline">Reviews</h3>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Filter Reviews</h4>
          <div>
            {/* For larger than mobile screen */}
            <div className="space-y-4">
              {FILTERS.map((filterGroup) => (
                <div className="hidden gap-3 lg:flex">
                  {filterGroup.map((filter) => (
                    <button className="rounded-sm bg-[#bbb] p-3 text-black opacity-50 hover:opacity-70">
                      {filter}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            {/* For mobile screen */}
            <div className="flex w-1/2 flex-wrap gap-4 lg:hidden">
              {FILTERS[0].map((filter) => (
                <button className="rounded-sm bg-[#bbb] p-3 text-black opacity-50 hover:opacity-70">
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="my-8 flex gap-4">
            <span className="relative cursor-pointer">
              <div
                onClick={() => {
                  setImagesDropdown(false);
                  setRatingDropdown(!ratingDropdown);
                }}
                className="flex w-[220px] justify-between rounded-md border border-[#bbb] bg-white px-2 py-1 text-[#6b6d76] hover:border-black"
              >
                <span className="font-bold">Rating</span>
                <i>{chevronDown}</i>
              </div>
              {ratingDropdown && (
                <ul className="absolute left-0 right-0 top-[105%] z-10 rounded-md border border-[#bbb] bg-white p-1 ">
                  <li className="p-1 font-semibold hover:bg-[#bbb]">All</li>
                  <li className="flex p-1 hover:bg-[#bbb]">{fiveCoffeeBean}</li>
                  <li className="flex p-1 hover:bg-[#bbb]">
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45"></i>
                  </li>
                  <li className="flex p-1 hover:bg-[#bbb]">
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                  </li>
                  <li className="flex p-1 hover:bg-[#bbb]">
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                  </li>
                  <li className="flex p-1 hover:bg-[#bbb]">
                    <i className="-rotate-45">{coffeeBean}</i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                    <i className="-rotate-45"></i>
                  </li>
                </ul>
              )}
            </span>
            <span className="relative cursor-pointer">
              <div
                onClick={() => {
                  setRatingDropdown(false);
                  setImagesDropdown(!imagesDropdown);
                }}
                className="flex w-[220px] justify-between rounded-md border border-[#bbb] bg-white px-2 py-1 text-[#6b6d76] hover:border-black"
              >
                <span className="font-bold">Images & Videos</span>
                <i>{chevronDown}</i>
              </div>
              {imagesDropdown && (
                <ul className="absolute left-0 right-0 top-[105%] z-10 rounded-md border border-[#bbb] bg-white p-1 ">
                  <li className="p-1 font-semibold hover:bg-[#bbb]">All</li>
                  <li className="p-1 text-[#6b6d76] hover:bg-[#bbb]">
                    With Images & Videos
                  </li>
                </ul>
              )}
            </span>
          </div>
        </div>
      </div>

      <Reviews />

      {/*!!! Not functioning yet */}
      <div className="absolute bottom-10 left-[50%] -translate-x-[50%] text-center">
        <div className="flex items-center gap-3">
          <span className="rotate-90 scale-75">{chevronDown}</span>
          <span className="font-bold">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="-rotate-90 scale-75">{chevronDown}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomerReviews;
