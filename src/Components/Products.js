import React, { useState } from "react";

import BestBean from "../Assets/Products/best-beans.png";
import Spaceman from "../Assets/Products/spaceman.png";
import Delivery from "../Assets/Products/delivery.png";

import MixedPackage from "../Assets/Products/MixedPackage.png";
import LightPackage from "../Assets/Products/LightPackage.png";
import LightNMediumPackage from "../Assets/Products/LightandMediumPackage.png";
import MediumPackage from "../Assets/Products/MediumPackage.png";
import MediumNDarkPackage from "../Assets/Products/MediumandDarkPackage.png";
import DarkPackage from "../Assets/Products/DarkPackage.png";

import { check } from "../Assets/icons/icons";
import ButtonArrow from "../Utilities/ButtonArrow";

const Boxs = [
  {
    title: "Mixed",
    image: MixedPackage,
  },
  {
    title: "Light",
    image: LightPackage,
  },
  {
    title: "Light & Medium",
    image: LightNMediumPackage,
  },
  {
    title: "Medium",
    image: MediumPackage,
  },
  {
    title: "Medium & Dark",
    image: MediumNDarkPackage,
  },
  {
    title: "Dark",
    image: DarkPackage,
  },
];

const Products = () => {
  const [boxSelector, setBoxSelector] = useState("Mixed");

  const boxSelected = Boxs.find((box) => box.title === boxSelector);

  const screenSize = window.innerWidth;

  console.log(screenSize);

  return (
    <div className="mx-auto max-w-[1320px] gap-4 p-6 ">
      <div className="min-w-[50%] justify-center gap-4 md:grid md:grid-cols-2">
        {/* For larger than mobile screen */}
        <div className="row-span-full mx-[-1rem] mb-4 grid grid-cols-6 [@media(max-width:768px)]:hidden">
          <figure className="col-span-full justify-center self-center justify-self-center">
            <img
              src={boxSelected.image}
              alt={boxSelected.title}
              className="min-w-auto w-[480px]"
            />
          </figure>
          <div className="flex aspect-square min-w-24 items-center justify-center rounded-lg">
            <img src={BestBean} alt="Bean" className="max-h-[105px]" />
          </div>
          <div className="col-start-3 flex aspect-square min-w-24 items-center justify-center rounded-lg">
            <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
          </div>
          <div className="col-start-5 flex aspect-square min-w-24 items-center justify-center rounded-lg">
            <img src={Delivery} alt="Cup" className="max-h-[105px]" />
          </div>
        </div>

        <div className="sticky top-20">
          <div className="mb-4">
            <h2 className="mb-2 text-[52px] font-extrabold">
              {boxSelected.title} Roast Box
            </h2>
            <h3 className="text-base">
              {boxSelected.title === "Mixed"
                ? "Rotating assortment of 32 capsules of our favorites across all roast levels. Perfect for discovering coffees you love most!"
                : "32 Cups Total, 4 Unique Coffees"}
            </h3>
          </div>

          {/* for mobile screen */}
          <div className="mx-[-1rem] mb-4 grid grid-cols-6 md:hidden">
            <figure className="col-span-full justify-center self-center justify-self-center">
              <img
                src={boxSelected.image}
                alt={boxSelected.title}
                className="min-w-auto w-[480px]"
              />
            </figure>
            <div className="flex aspect-square min-w-24 items-center justify-center rounded-lg">
              <img src={BestBean} alt="Bean" className="max-h-[105px]" />
            </div>
            <div className="col-start-3 flex aspect-square min-w-24 items-center justify-center rounded-lg">
              <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
            </div>
            <div className="col-start-5 flex aspect-square min-w-24 items-center justify-center rounded-lg">
              <img src={Delivery} alt="Cup" className="max-h-[105px]" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-extrabold">
              Roasted Level:{" "}
              <span className="text-[#494949]">{boxSelected.title}</span>
            </h3>

            <div className="mb-8 flex gap-2 overflow-scroll p-2 text-white sm:overflow-hidden">
              <button
                onClick={() => setBoxSelector("Mixed")}
                autoFocus
                className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black "
              >
                <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#422513] before:p-4 before:content-['']">
                  <p className="z-10 flex h-fit w-full items-center justify-center bg-[#633921] py-[2px] text-xs font-semibold">
                    Mixed
                  </p>
                </div>
              </button>
              <button
                onClick={() => setBoxSelector("Light")}
                className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
              >
                <div>
                  <p className="text-center text-xs font-semibold">Light</p>
                </div>
              </button>
              <button
                onClick={() => setBoxSelector("Light & Medium")}
                className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#8d644c] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
              >
                <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#633921] before:p-4 before:content-['']">
                  <p className="z-10 flex flex-col text-xs font-semibold">
                    <span>Light</span>
                    <span>&</span>
                    <span>Medium</span>
                  </p>
                </div>
              </button>
              <button
                onClick={() => setBoxSelector("Medium")}
                className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#633921] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
              >
                <div>
                  <p className="text-center text-xs font-semibold">Medium</p>
                </div>
              </button>
              <button
                onClick={() => setBoxSelector("Medium & Dark")}
                className="relative z-0 h-16 w-16 min-w-16 overflow-hidden rounded-xl border-2 border-white bg-[#633921] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
              >
                <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#422513] before:p-4 before:content-['']">
                  <p className="z-10 flex flex-col text-xs font-semibold">
                    <span>Medium</span>
                    <span>&</span>
                    <span>Dark</span>
                  </p>
                </div>
              </button>
              <button
                onClick={() => setBoxSelector("Dark")}
                className="h-16 w-16 min-w-16 rounded-xl border-2 border-white bg-[#422513] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
              >
                <div>
                  <p className="text-center text-xs font-semibold">Dark</p>
                </div>
              </button>
            </div>

            <div className="max-w-[420px]">
              <div className="mb-2">
                <form action="#">
                  <ButtonArrow
                    buttonStyle={`bg-[#f5d577] px-4 py-3 hover:bg-[#ddbf6d] h-full w-full`}
                  >
                    <p className="mr-3 text-sm font-semibold uppercase">
                      Subscribe & save
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <span
                        className="text-[#8c7c4d]"
                        style={{ textDecoration: "line-through" }}
                      >
                        $84.00
                      </span>
                      <span>$64.00</span>
                    </div>
                  </ButtonArrow>
                </form>

                <ul className="space-y-1 px-2 py-4">
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Ships Every 4 Weeks
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Pause or Cancel Anytime
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <i>{check}</i>Variety of Coffees from Award-Winning Roasters
                  </li>
                </ul>
              </div>

              <ButtonArrow
                buttonStyle={
                  "px-4 py-3 h-full w-full text-[#808080] hover:bg-[#2c2b2b] hover:border-0 hover:text-white border-black border-[1px]"
                }
                arrowStyle={"text-[#2c2b2b] group-hover:text-white"}
              >
                <p className="mr-3 text-sm font-semibold uppercase group-hover:text-[#7a7d7d]">
                  One time purchase
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="group-hover:text-[#7a7d7d]">$84.00</span>
                </div>
              </ButtonArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
