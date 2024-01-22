import React from "react";

import Logo from "../Assets/Navbar/logo-white.png";
import {
  arrow,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../Assets/icons/icons";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={Logo} alt="logo" className="mx-auto mb-12 h-[71px] w-[320px]" />

      <div className="mx-auto mb-16 flex w-full items-center justify-between rounded-lg bg-[#f5d577] p-8">
        <div>
          <h1 className="text-2xl font-black uppercase">
            Join out mailing list
          </h1>
          <p>Receive special offers delivered directly in your inbox.</p>
        </div>

        {/* edit form and button type */}
        <form className="flex w-[30em] justify-between rounded-full bg-white p-2">
          <input
            placeholder="Email Address"
            className="ml-2 w-full placeholder:text-[#bfbebe]"
          />
          <button className="rounded-full bg-[#2b2c2c] p-5 text-white">
            {arrow}
          </button>
        </form>
      </div>

      <div className="mx-auto flex justify-between ">
        <div>
          <h1 className="mb-4 text-xl font-bold uppercase text-[#f5d577]">
            Shop Coffee
          </h1>
          <ul className="space-y-1 text-white">
            <li className="cursor-pointer hover:opacity-80">Curated Box</li>
            <li className="cursor-pointer hover:opacity-80">Roaster Box</li>
            <li className="cursor-pointer hover:opacity-80">Decaf Box</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold uppercase text-[#f5d577]">
            Learn
          </h1>
          <ul className="space-y-1 text-white">
            <li className="cursor-pointer hover:opacity-80">FAQs</li>
            <li className="cursor-pointer hover:opacity-80">Our Story</li>
            <li className="cursor-pointer hover:opacity-80">How it Works</li>
            <li className="cursor-pointer hover:opacity-80">
              Meet Our Roasters
            </li>
            <li className="cursor-pointer hover:opacity-80">Sustainability</li>
          </ul>
        </div>

        <div className="mb-20">
          <h1 className="mb-4 text-xl font-bold uppercase text-[#f5d577]">
            COMPANY
          </h1>
          <ul className="space-y-1 text-white">
            <li className="cursor-pointer hover:opacity-80">Contact Us</li>
            <li className="cursor-pointer hover:opacity-80">Store Locator</li>
            <li className="cursor-pointer hover:opacity-80">Careers</li>
            <li className="cursor-pointer hover:opacity-80">
              Data Collection Opt-out
            </li>
            <li className="cursor-pointer hover:opacity-80">
              Do not sell or share my personal information
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold uppercase text-[#f5d577]">
            SHARE COMETEER
          </h1>
          <ul className="space-y-1 text-white">
            <li className="cursor-pointer hover:opacity-80">Refer a Friend</li>
            <li className="cursor-pointer hover:opacity-80">
              Referral Terms of Service
            </li>
            <li className="cursor-pointer hover:opacity-80">Gift Cometeer</li>
            <li className="cursor-pointer hover:opacity-80">
              Cometeer for Office
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <h2 className="font-semibold uppercase text-[#f5d577]">
            Stay connected
          </h2>
          <div className="flex items-center justify-center gap-4 text-white ">
            <button>{facebookIcon}</button>
            <button>{twitterIcon}</button>
            <button>{instagramIcon}</button>
            <button>{youtubeIcon}</button>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-white">
          <button className="hover:opacity-80">Terms and Conditions</button>
          <button className="hover:opacity-80">Privacy Policy</button>
          <button className="hover:opacity-80">Refund Policy</button>
          <span>
            © 2024 <button className="hover:opacity-80">Cometeer</button>Inc.,
            All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
