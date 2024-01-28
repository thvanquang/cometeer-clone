import React, { useState } from "react";
import { Link } from "react-router-dom";

import CuratedBox from "../Assets/Navbar/coffee-curatedbox.png";
import HalfnDecafBox from "../Assets/Navbar/coffee-halfndecafbox.png";
import RoasterBox from "../Assets/Navbar/coffee-roasterbox.png";
import OfficeBox from "../Assets/Navbar/office-dropdown.png";
import Gift from "../Assets/Navbar/gift.png";
import Accessories from "../Assets/Navbar/accessories.png";

import OurStory from "../Assets/Navbar/learn-Our-Story.png";
import HowItWork from "../Assets/Navbar/learn-How-it-Works.png";
import Sustainability from "../Assets/Navbar/learn-Sustainability.png";
import OurRoasters from "../Assets/Navbar/learn-Our-Roaster.png";

const TryCometeerDropdown = [
  {
    section: "Coffee",
    id: 0,
    items: [
      {
        title: "Curated Box",
        content: "The best variety of our curated coffees. Try them all!",
        image: CuratedBox,
        urlAddress: "mixed-roast-box",
      },
      {
        title: "Half Caff & Decaf Box",
        content: "Want less caffeine and more coffee? This box is for you.",
        image: HalfnDecafBox,
        urlAddress: "half-caff-box",
      },
      {
        title: "Roaster Boxes",
        content: "Love a specific Roaster? Shop all here!",
        image: RoasterBox,
        urlAddress: "intelligentsia-box",
      },
    ],
  },
  {
    section: "Office",
    id: 1,
    items: [
      {
        title: "Office Box",
        content: "Experience the ultimate office coffee service with Cometeer.",
        image: OfficeBox,
        urlAddress: "office-box-1",
      },
    ],
  },
  {
    section: "Gifts & Accessories",
    id: 2,
    items: [
      {
        title: "Give a Gift",
        content: "Make any coffee lover melt with the gift of Cometeer.",
        image: Gift,
        urlAddress: "gift-card",
      },
      {
        title: "Accessories",
        content: "Elevate Your Coffee Experience",
        image: Accessories,
        urlAddress: "/collection/accessories",
      },
    ],
  },
];

const LearnDropdown = [
  {
    title: "Our Story",
    content: "We are making coffee better so you can make your coffee better.",
    image: OurStory,
  },
  {
    title: "How it Work",
    content:
      "We're creating a new kind of ritual in coffee. It's called melting.",
    image: HowItWork,
  },
  {
    title: "Sustainability",
    content: "Our process is uniquely suited to reducing waste, at every step.",
    image: Sustainability,
  },
  {
    title: "Roasters",
    content:
      "We work with world renowned coffee roasters. Let us introduce you!",
    image: OurRoasters,
  },
];

const Dropdown = ({
  tryCometeerShowing,
  setTryCometeerShowing,
  learnShowing,
  setLearnShowing,
}) => {
  const [sectionSelected, setSectionSelected] = useState(0);

  const mouseEnterHandler = (id) => {
    setSectionSelected(id);
  };

  return (
    <div>
      {/* Try Cometeer Dropdown */}
      <div
        onMouseEnter={() => setTryCometeerShowing(true)}
        onMouseLeave={() => setTryCometeerShowing(false)}
        className={`fixed left-[50%] top-[110px] z-20 w-[92vw] -translate-x-[50%] rounded-2xl border-[1px] border-[#c1bdb0] bg-white p-6  ${tryCometeerShowing ? "block" : "hidden"}`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-4 p-6 text-xl">
            {TryCometeerDropdown.map((section) => (
              <button
                key={section.id}
                onMouseEnter={() => {
                  mouseEnterHandler(section.id);
                }}
                className={`rounded-full px-5 py-2 text-xl ${sectionSelected === section.id ? "bg-[#2b2c2c] text-white" : ""}`}
              >
                {section.section}
              </button>
            ))}
          </div>

          <div className="flex w-[65vw] justify-start">
            {TryCometeerDropdown.map((section) => (
              <ul
                key={section.id}
                className={` flex-wrap justify-start gap-4 ${sectionSelected === section.id ? "flex" : "hidden"}`}
              >
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    to={
                      item.title === "Accessories"
                        ? item.urlAddress
                        : `/products/${item.urlAddress}`
                    }
                    className="flex h-[140px] w-[410px] items-center gap-4 rounded-lg border-[1px] border-[#c1bdb0] bg-[#e3dcc2] p-4 hover:border-2 hover:border-[#1a1a1a]"
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
                  </Link>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Learn Dropdown */}
      <div
        onMouseEnter={() => setLearnShowing(true)}
        onMouseLeave={() => setLearnShowing(false)}
        className={`fixed left-[50%] top-[110px] z-20 w-[92vw] -translate-x-[50%] rounded-2xl border-[1px] border-[#c1bdb0] bg-white p-8 ${learnShowing ? "block" : "hidden"}`}
      >
        <div className="flex gap-6 p-4">
          {LearnDropdown.map((section) => (
            <div
              key={section.title}
              className="transition-opacity duration-300 ease-in-out hover:opacity-80"
            >
              <img
                src={section.image}
                alt={section.title}
                className="mb-8 rounded-lg"
              />
              <div>
                <h1 className="mb-4 text-3xl font-bold">{section.title}</h1>
                <p className="text-sm">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
