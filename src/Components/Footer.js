import React, { useState } from "react";

import Logo from "../Assets/Navbar/logo-white.png";
import {
  arrow,
  chevronDown,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../Assets/icons/icons";

import classes from "./Footer.module.css";

const MENU = [
  { title: "Shop Coffee", items: ["Curated Box", "Roaster Box", "Decaf Box"] },
  {
    title: "Learn",
    items: [
      "FAQs",
      "Our Story",
      "How it Works",
      "Meet Our Roasters",
      "Sustainability",
    ],
  },
  {
    title: "Company",
    items: [
      "Contact Us",
      "Store Locator",
      "Careers",
      "Data Collection Opt-out",
      "Do not sell or share my personal information",
    ],
  },
  {
    title: "Share Cometeer",
    items: [
      "Refer a Friend",
      "Referral Terms of Service",
      "Gift Cometeer",
      "Cometeer for Office",
    ],
  },
];

const Footer = () => {
  const [sectionShowed, setSectionShowed] = useState([""]);

  // Check about primative value and revisit this again !!!
  const sectionClickHandler = (sectionClicked) => {
    const isShowing =
      sectionShowed.length > 0 ? sectionShowed.includes(sectionClicked) : false;

    const array = sectionShowed.length === 0 ? [] : sectionShowed;

    console.log(sectionShowed);

    if (isShowing) {
      const filteredArray = array.filter(
        (section) => section !== sectionClicked,
      );
      setSectionShowed(filteredArray);
    } else {
      array.push(sectionClicked);
      setSectionShowed(array);
    }

    console.log(sectionShowed);
  };

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

      <div className="mx-auto mb-8 justify-between lg:flex">
        {MENU.map((section) => (
          <div key={section.title} className="mb-10">
            <div
              onClick={() => {
                sectionClickHandler(section.title);
              }}
              className="flex w-full items-center justify-between py-6"
            >
              <h1 className="text-xl font-bold uppercase text-[#f5d577]">
                {section.title}
              </h1>
              <i className="text-white lg:hidden">{chevronDown}</i>
            </div>

            {sectionShowed.includes(section.title) && (
              <ul className={`space-y-1 text-white `}>
                {section.items.map((item) => (
                  <li key={item} className="cursor-pointer hover:opacity-80">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-6 lg:flex lg:items-center lg:justify-between lg:space-x-0 ">
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
