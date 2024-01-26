import React, { useCallback, useEffect, useState } from "react";

import { bar, account, cart, xMark, chevronDown } from "../Assets/icons/icons";

import Logo from "../Assets/Navbar/logo.png";
import LogoWhite from "../Assets/Navbar/logo-white.png";

import CuratedBox from "../Assets/Navbar/coffee-curatedbox.png";
import HalfnDecafBox from "../Assets/Navbar/coffee-halfndecafbox.png";
import RoasterBox from "../Assets/Navbar/coffee-roasterbox.png";
import OfficeBox from "../Assets/Navbar/office.png";
import Gift from "../Assets/Navbar/gift.png";
import Accessories from "../Assets/Navbar/accessories.png";

const MenuMobile = [
  {
    section: "Coffee",
    items: [
      {
        title: "Curated Box",
        content: "The best variety of our curated coffees. Try them all!",
        image: CuratedBox,
      },
      {
        title: "Half Caff & Decaf Box",
        content: "Want less caffeine and more coffee? This box is for you.",
        image: HalfnDecafBox,
      },
      {
        title: "Roaster Boxes",
        content: "Love a specific Roaster? Shop all here!",
        image: RoasterBox,
      },
    ],
  },
  {
    section: "Office, Gifts & Accessories",
    items: [
      {
        title: "Office Box",
        content: "Experience the ultimate office coffee service with Cometeer.",
        image: OfficeBox,
      },
      {
        title: "Give a Gift",
        content: "Make any coffee lover melt with the gift of Cometeer.",
        image: Gift,
      },
      {
        title: "Accessories",
        content: "Elevate Your Coffee Experience",
        image: Accessories,
      },
    ],
  },
];

const Navbar = () => {
  //// Initialize States
  // Scrolling
  const [isTop, setIsTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);

  // Menu Opening
  const [menuOpening, setMenuOpening] = useState(false);

  //// Handlers
  // Scrolling
  const handleScroll = useCallback(() => {
    // if menu is opening, we dont want hide Navbar when scrolling
    if (menuOpening) {
      setIsScrollingUp(true);
      return;
    }

    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    if (currentScrollPosition < prevScrollPosition) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, menuOpening]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Menu Opening
  const menuIconClickHandler = () => {
    setMenuOpening(!menuOpening);
    setIsScrollingUp(true);
  };
  return (
    <div className="">
      <div
        className={`easy-out fixed left-[50%] z-50 w-[97%] translate-x-[-50%] transition-transform duration-500 ${isTop || isScrollingUp ? "top-[1rem]" : "translate-y-[-100px]"} `}
      >
        <div
          className={`${menuOpening && "transition-color duration-500 ease-in-out before:absolute before:-left-5 before:-top-5 before:-z-10 before:h-[110px] before:w-[1400px] before:bg-white"}`}
        ></div>
        <div
          className={`mx-auto grid min-w-full grid-cols-[1fr_auto_1fr] items-center justify-between rounded-full p-4 transition-colors duration-500 ease-in-out ${isTop ? "bg-transparent" : "bg-[#2c2b2b]"}  ${isTop && menuOpening && "bg-white"}`}
        >
          <div>
            <div className="ml-1 hidden items-center gap-6 text-white lg:flex">
              <button
                className="flex items-center justify-center gap-2 rounded-full border-[1px] bg-[white] px-4 py-1 text-xl font-semibold text-[#2c2b2b]
              hover:border-white hover:bg-[#2c2b2b] hover:text-white"
              >
                Try Cometeer <i>{chevronDown}</i>
              </button>
              <button className="flex items-center gap-2 rounded-full border-[1px] px-4 py-1 text-xl font-semibold hover:border-white">
                Learn <i>{chevronDown}</i>
              </button>
            </div>
            <button
              onClick={menuIconClickHandler}
              className={`ml-2 lg:hidden ${menuOpening && "cursor-default"} ${!isTop && menuOpening ? "text-[#2c2b2b]" : "text-white"}`}
            >
              {bar}
            </button>
          </div>
          <img
            src={isTop && menuOpening ? Logo : LogoWhite}
            alt="logo"
            width="182"
            height="40"
            className="scale-75 justify-self-center sm:scale-100"
          />
          <div className="content-center justify-self-end">
            {!menuOpening && (
              <>
                <button className="mr-2 text-white sm:mr-4">{account}</button>
                <button className="mr-2 text-white">{cart}</button>
              </>
            )}
            {menuOpening && (
              <button
                onClick={menuIconClickHandler}
                className={`mr-4 lg:hidden ${!isTop && "text-white"}`}
              >
                {xMark}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Navbar Mobile */}

      <div
        className={`fixed top-[100px] z-20 h-full min-h-full w-full overflow-y-auto bg-white transition-transform duration-500 ease-in-out  ${menuOpening ? "translate-x-0" : "-translate-x-full"}`}
      >
        {MenuMobile.map((section) => (
          <div key={section.section} className="p-4">
            <h3 className="mb-4 text-xl">{section.section}</h3>
            <ul>
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-4 rounded-lg border-[1px] border-[#c1bdb0] bg-[#e3dcc2] p-4 hover:border-2 hover:border-[#1a1a1a]"
                >
                  <div className="flex aspect-square w-[100px] items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[100px]"
                    />
                  </div>
                  <div>
                    <h1 className="mb-3 text-2xl font-bold">{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="ml-4 mt-4 space-y-6 text-xl font-semibold">
          <h2>Our Story</h2>
          <h2>How it Works</h2>
          <h2>Sustainability</h2>
          <h2>Roaster</h2>
        </div>

        <div className="ml-4 mt-8 space-y-4">
          <p>Store Locator</p>
          <p>Careers</p>
          <p>Referral Program</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
