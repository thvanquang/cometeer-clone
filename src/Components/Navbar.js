import React from "react";

import { bar, account, cart } from "../Assets/icons/Navbar";
import Logo from "../Assets/logo.png";
import LogoWhite from "../Assets/logo-white.png";

const Navbar = ({ background }) => {
  return (
    <div className="sticky top-[16px] mt-4">
      <div
        className={`mx-auto grid w-[97%] grid-cols-[1fr_auto_1fr] items-center justify-between rounded-full bg-[#2c2b2b] p-4`}
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
