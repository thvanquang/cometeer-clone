import React from "react";

import Bean from "../Assets/triptych-bean.png";
import Spaceman from "../Assets/triptych-spaceman.png";
import Cup from "../Assets/triptych-cup.png";

const TRIPTYCH = [
  {
    title: "FAST, SIMPLE & CLEAN",
    image: Bean,
    altText: "triptych-bean",
    content:
      "Prepare easily in minutes. No mess, no machines, no burning or bitterness.",
  },
  {
    title: "YOUR WAY. EVERY TIME",
    image: Spaceman,
    altText: "triptych-spaceman",
    content:
      "Great for hot & iced drinks. Makes coffees, lattes and so much more.",
  },
  {
    title: "GREAT ON THE GO",
    image: Cup,
    altText: "triptych-fast-cup",
    content: "Enjoy at work or on a trip. TSA approved & designed for travel.s",
  },
];

const Triptych = () => {
  return (
    <div className="flex max-w-[1320px] flex-nowrap overflow-scroll overflow-y-hidden">
      {TRIPTYCH.map((section) => (
        <div
          key={section.altText}
          className="flex min-w-[90%] max-w-[800px] items-center justify-center gap-8 border-r-[1px] border-black bg-[#f5d577] px-10 py-12 last:border-r-0 lg:min-w-min"
        >
          <img
            src={section.image}
            alt={section.altText}
            className="max-w-[50px]"
          />
          <div>
            <h6 className="mb-6">{section.title}</h6>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Triptych;
