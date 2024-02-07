import React from "react";
import { Link } from "react-router-dom";

import CuratedBox from "../Assets/Navbar/coffee-curatedbox.png";
import HalfnDecafBox from "../Assets/Navbar/coffee-halfndecafbox.png";
import RoasterBox from "../Assets/Navbar/coffee-roasterbox.png";
import OfficeBox from "../Assets/Navbar/office.png";
import Gift from "../Assets/Navbar/gift.png";
import Accessories from "../Assets/Navbar/accessories.png";
import ReferFriend from "../Assets/Navbar/refer-a-friend.png";

const MenuMobile = [
  {
    section: "Coffee",
    items: [
      {
        title: "Curated Box",
        content: "The best variety of our curated coffees. Try them all!",
        image: CuratedBox,
        urlAddress: "/products/mixed-roast-box",
      },
      {
        title: "Half Caff & Decaf Box",
        content: "Want less caffeine and more coffee? This box is for you.",
        image: HalfnDecafBox,
        urlAddress: "/products/half-caff-box",
      },
      {
        title: "Roaster Boxes",
        content: "Love a specific Roaster? Shop all here!",
        image: RoasterBox,
        urlAddress: "/products/houseplant-box-1",
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
        urlAddress: "/products/office-box-1",
      },
      {
        title: "Give a Gift",
        content: "Make any coffee lover melt with the gift of Cometeer.",
        image: Gift,
        urlAddress: "/products/gift-card",
      },
      {
        title: "Accessories",
        content: "Elevate Your Coffee Experience",
        image: Accessories,
        urlAddress: "/collections/accessories",
      },
    ],
  },
  {
    section: "Refer a Friend",
    items: [
      {
        title: "Refer A Friend",
        content: "",
        image: ReferFriend,
        urlAddress: "/pages/rewards",
      },
    ],
  },
];

const MobileMenuNavbar = ({ menuOpening, setMenuOpening }) => {
  return (
    <div
      className={`fixed top-[100px] z-20 h-full min-h-full w-full overflow-y-auto bg-white transition-transform duration-500 ease-in-out lg:hidden  ${menuOpening ? "translate-x-0" : "-translate-x-full"}`}
    >
      {MenuMobile.map((section) => (
        <div key={section.section} className="p-4">
          <h3 className="mb-4 text-xl">{section.section}</h3>
          <ul>
            {section.items.map((item) => (
              <Link
                key={item.title}
                to={item.urlAddress}
                onClick={() => setMenuOpening(false)}
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
              </Link>
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
  );
};

export default MobileMenuNavbar;
