import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

import { arrow } from "../../Assets/icons/icons";

import Houseplant from "../../Assets/RoastersNavbar/Houseplant.png";
import Intelligentsia from "../../Assets/RoastersNavbar/Intelligentsia.png";
import Birch from "../../Assets/RoastersNavbar/Birch.png";
import BirdRock from "../../Assets/RoastersNavbar/BirdRock.png";
import BlackNWhite from "../../Assets/RoastersNavbar/BlackNWhite.png";
import CounterCulture from "../../Assets/RoastersNavbar/CounterCulture.png";
import Equator from "../../Assets/RoastersNavbar/Equator.png";
import GeorgeHowell from "../../Assets/RoastersNavbar/GeorgeHowell.png";
import RedBay from "../../Assets/RoastersNavbar/RedBay.png";
import SquareMile from "../../Assets/RoastersNavbar/SquareMile.png";
import Onyx from "../../Assets/RoastersNavbar/Onyx.png";
import Klatch from "../../Assets/RoastersNavbar/Klatch.png";
import JoeCoffee from "../../Assets/RoastersNavbar/JoeCoffee.png";
import Gget from "../../Assets/RoastersNavbar/Gget.png";

const ROASTERS = [
  {
    name: "Houseplant",
    urlAddress: "/roasters/houseplant-box-1",
    logo: Houseplant,
  },
  {
    name: "Intelligentsia",
    urlAddress: "/roasters/intelligentsia-box",
    logo: Intelligentsia,
  },
  { name: "Birch", urlAddress: "/roasters/birch-box", logo: Birch },
  { name: "BirdRock ", urlAddress: "/roasters/bird-rock-box", logo: BirdRock },
  {
    name: "BlackNWhite",
    urlAddress: "/roasters/black-white-box",
    logo: BlackNWhite,
  },
  {
    name: "CounterCulture",
    urlAddress: "/roasters/counter-culture-box",
    logo: CounterCulture,
  },
  { name: "Equator", urlAddress: "/roasters/equator-box", logo: Equator },
  {
    name: "GeorgeHowell",
    urlAddress: "/roasters/george-howell-box",
    logo: GeorgeHowell,
  },
  { name: "RedBay", urlAddress: "/roasters/red-bay-box", logo: RedBay },
  {
    name: "SquareMile",
    urlAddress: "/roasters/square-mile-box",
    logo: SquareMile,
  },
  { name: "Onyx", urlAddress: "/roasters/onyx-box", logo: Onyx },
  { name: "Klatch", urlAddress: "/roasters/klatch-box", logo: Klatch },
  {
    name: "JoeCoffee",
    urlAddress: "/roasters/joe-coffee-box",
    logo: JoeCoffee,
  },
  { name: "Gget", urlAddress: "/roasters/gget-box", logo: Gget },
];

const RoastersNavbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(
      currentSlide === ROASTERS.length - 1
        ? ROASTERS.length - 1
        : currentSlide + 1,
    );

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition < prevScrollPosition) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
        Our Roasters
      </h1>

      <div
        className={`z-20 mt-4  bg-[#f7f0d3] bg-opacity-0 px-14 transition duration-500 ease-in-out ${!isScrollingUp ? "fixed left-0 top-0 mt-0 w-full bg-opacity-100 px-24" : "relative"}`}
      >
        <div
          className={`overflow-hidden pb-6 pt-2 ${!isScrollingUp && "relative"}`}
        >
          <div
            className="flex flex-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 11}%)` }}
          >
            {ROASTERS.map((roaster) => {
              return (
                <NavLink
                  key={roaster.name}
                  to={roaster.urlAddress}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full border-[3px] border-black p-2"
                      : "border-[3px] border-transparent p-2"
                  }
                >
                  <div className="aspect-square min-w-[80px] md:min-w-[90px] lg:min-w-[110px]">
                    <img
                      src={roaster.logo}
                      alt={roaster.name}
                      className="h-full w-full "
                    />
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 top-1/2 -z-10 flex -translate-y-1/2 justify-between ${!isScrollingUp && "mx-6"}`}
        >
          <button
            onClick={prevSlide}
            className="rotate-180 rounded-full border border-[#a0a0a0]  p-3 active:opacity-50"
          >
            {arrow}
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full border border-[#a0a0a0] p-3 active:opacity-50"
          >
            {arrow}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0  mx-auto flex w-[92%] items-center gap-8">
          <div className="relative left-0 right-0 w-full">
            <div className="flex h-[2px] w-full items-center bg-[#2b2c2c] opacity-10"></div>
            <div
              className="absolute -top-[25%] h-[3px] w-3/4 bg-[#2b2c2c] transition-transform duration-300 ease-in"
              style={{ transform: `translateX(${currentSlide * 2}%)` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoastersNavbar;
