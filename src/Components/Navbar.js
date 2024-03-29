import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { bar, account, cart, xMark, chevronDown } from "../Assets/icons/icons";

import Logo from "../Assets/Navbar/logo.png";
import LogoWhite from "../Assets/Navbar/logo-white.png";
import MobileMenuNavbar from "./MobileMenuNavbar";
import Dropdown from "./Dropdown";

const Navbar = ({ backgroundTransparentAtTop, textWhiteAtTop }) => {
  //// Initialize States
  // Scrolling
  const [isTop, setIsTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  // Menu Opening
  const [menuOpening, setMenuOpening] = useState(false);
  // Dropdown
  const [tryCometeerShowing, setTryCometeerShowing] = useState(false);
  const [learnShowing, setLearnShowing] = useState(false);

  //// Handlers
  // Scrolling
  const handleScroll = useCallback(() => {
    // if dropdown is showing, we dont want hide Navbar when scrolling
    if (tryCometeerShowing || learnShowing) {
      setIsScrollingUp(true);
      return;
    }
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
  }, [prevScrollPosition, menuOpening, learnShowing, tryCometeerShowing]);

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

  //// Logo Color
  let logoColor;
  // Normal case:
  logoColor = isTop ? Logo : LogoWhite;
  // Custom case:
  if (textWhiteAtTop) {
    logoColor = LogoWhite;
    if (menuOpening) {
      logoColor = isTop ? Logo : LogoWhite;
    }
  }

  return (
    <div
      className={`relative ${backgroundTransparentAtTop ? "" : "h-navbar bg-white"} `}
    >
      <div
        className={`easy-out fixed left-[50%] z-20 w-[97%] translate-x-[-50%] transition-transform duration-500 ${isTop || isScrollingUp ? "top-[1rem]" : "translate-y-[-100px]"} `}
      >
        <div
          className={`${menuOpening && "transition-color duration-500 ease-in-out before:absolute before:-left-5 before:-top-5 before:-z-10 before:h-navbar before:w-[1400px] before:bg-white"}`}
        ></div>
        <div
          className={`mx-auto grid min-w-full grid-cols-[1fr_auto_1fr] items-center justify-between rounded-full p-4 transition-colors duration-500 ease-in-out ${isTop ? "bg-transparent" : "bg-[#2c2b2b]"} ${isTop && menuOpening && "bg-white"}`}
        >
          <div>
            {/* Larger than Mobile screen */}
            <div className="ml-1 hidden items-center lg:flex lg:gap-8">
              <button
                onMouseEnter={() => setTryCometeerShowing(true)}
                onMouseLeave={() => setTryCometeerShowing(false)}
                className={`easy-in-out z-20 flex items-center gap-2 rounded-full border-[1px] border-transparent px-6 py-[2px]  transition-colors duration-500   ${!textWhiteAtTop && isTop ? "bg-[#2c2b2b] text-white hover:border-[#a0a0a0] hover:bg-[#f3f5e8] hover:text-[#2c2b2b]" : "bg-white text-[#2c2b2b] hover:border-white hover:bg-[#2c2b2b] hover:text-white"}`}
              >
                <p className="text-lg font-semibold">Try Cometeer</p>
                <i className={`${tryCometeerShowing ? "rotate-180" : ""}`}>
                  {chevronDown}
                </i>
              </button>
              {/* the space between button and dropdown; have it to keep dropdown show up when mouse leave button */}
              {tryCometeerShowing && (
                <div
                  onMouseEnter={() => setTryCometeerShowing(true)}
                  onMouseLeave={() => setTryCometeerShowing(false)}
                  className="fixed left-0 right-0 top-[20px] z-10 h-[80px] bg-transparent"
                ></div>
              )}

              <button
                onMouseEnter={() => setLearnShowing(true)}
                onMouseLeave={() => setLearnShowing(false)}
                className={`z-20 flex items-center gap-2 rounded-full border-[1px] border-transparent px-6 py-[2px] transition-colors duration-500 ease-in-out ${!textWhiteAtTop && isTop ? "hover:border-[#a0a0a0] hover:bg-[#f3f5e8]" : "text-white hover:border-white hover:bg-[#2c2b2b]"}`}
              >
                <p className="text-lg font-semibold"> Learn</p>
                <i className={`${learnShowing ? "rotate-180" : ""}`}>
                  {chevronDown}
                </i>
              </button>
              {/* the space between button and dropdown; have it to keep dropdown show up when mouse leave button */}
              {learnShowing && (
                <div
                  onMouseEnter={() => setLearnShowing(true)}
                  onMouseLeave={() => setLearnShowing(false)}
                  className="fixed left-0 right-0 top-[20px] z-10 h-[80px] bg-transparent"
                ></div>
              )}
            </div>

            {/* Mobile screen */}
            <button
              onClick={menuIconClickHandler}
              className={`ml-2 flex items-center lg:hidden ${menuOpening && "cursor-default"} ${isTop ? (menuOpening ? "text-white" : "text-[#2c2b2b]") : menuOpening ? "text-[#2c2b2b]" : "text-white"}
              ${textWhiteAtTop && isTop && "text-white"}`}
            >
              {bar}
            </button>
          </div>

          <Link to="/" className="z-20">
            <img
              src={logoColor}
              alt="logo"
              width="182"
              height="40"
              className="scale-75 justify-self-center sm:scale-100"
            />
          </Link>

          <div className="content-center justify-self-end ">
            {!menuOpening && (
              <div
                className={`flex gap-6 ${!textWhiteAtTop && isTop ? "text-[#2c2b2b]" : "text-white"}`}
              >
                <Link
                  to="/products/gift-card"
                  className={`relative hidden pr-1 font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-[1px] after:w-0 after:transition-all  after:duration-300 after:ease-in-out hover:after:w-full lg:block ${!textWhiteAtTop && isTop ? "after:bg-[#2b2c2c]" : "after:bg-white"}`}
                >
                  Give a Gift
                </Link>
                <button className="sm:mr-4">{account}</button>
                <button className="mr-4">{cart}</button>
              </div>
            )}
            {menuOpening && (
              <button
                onClick={menuIconClickHandler}
                className={`mr-4 flex items-center ${!isTop && "text-white"}`}
              >
                {xMark}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown for larger screen */}
      <Dropdown
        tryCometeerShowing={tryCometeerShowing}
        setTryCometeerShowing={setTryCometeerShowing}
        learnShowing={learnShowing}
        setLearnShowing={setLearnShowing}
      />

      {/* Menu Navbar Mobile */}
      <MobileMenuNavbar
        menuOpening={menuOpening}
        setMenuOpening={setMenuOpening}
      />
    </div>
  );
};

export default Navbar;
