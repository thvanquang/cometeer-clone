import React from "react";

import { bar, account, cart } from "../Assets/icons/Navbar";
import Logo from "../Assets/logo.png";

const Navbar = ({ background }) => {
  return (
    <div
      className={`fixed mx-8 mt-4 flex w-[100%] items-center justify-between rounded-full ${background ? `bg-[#2c2b2b]` : `hidden`} p-4`}
    >
      <button className="text-white">{bar}</button>
      <img src={Logo} alt="logo" width="182" height="40" />
      <div>
        <button className="mr-2 text-white">{account}</button>
        <button className="text-white">{cart}</button>
      </div>
    </div>
  );
};

export default Navbar;
