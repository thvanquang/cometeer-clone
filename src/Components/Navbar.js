import React, { useCallback, useEffect, useState } from "react";

import { bar, account, cart } from "../Assets/icons/icons";
import LogoWhite from "../Assets/Navbar/logo-white.png";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);

  const handleScroll = useCallback(() => {
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
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`fixed left-[50%]  z-50 w-[97%] translate-x-[-50%] ${isTop || isScrollingUp ? "top-[1rem]" : "translate-y-[-100px]"} easy-out transition-transform duration-500 `}
    >
      <div
        className={`mx-auto grid min-w-full grid-cols-[1fr_auto_1fr] items-center justify-between rounded-full transition-colors duration-300 ease-out ${isTop ? "bg-transparent" : "bg-[#2c2b2b]"} p-4`}
      >
        <button className="ml-2 text-white">{bar}</button>
        <img
          src={LogoWhite}
          alt="logo"
          width="182"
          height="40"
          className="scale-75 justify-self-center sm:scale-100"
        />
        <div className="justify-self-end">
          <button className="mr-2 text-white sm:mr-4">{account}</button>
          <button className="mr-2 text-white">{cart}</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
