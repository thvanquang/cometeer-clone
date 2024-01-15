// import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import Video from "../Assets/video.mp4";

import { arrow } from "../Assets/icons/Home";

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

// let prevScrollPosition = window.scrollY;

const Home = () => {
  // const [backgroundNavbar, setBackgroundNavbar] = useState(false);

  // const changeBackgroundNavbar = () => {
  //   const currentScrollPosition = window.scrollY;

  //   console.log(prevScrollPosition, currentScrollPosition);

  //   if (currentScrollPosition < prevScrollPosition) {
  //     console.log("up");

  //     setBackgroundNavbar(true);
  //     prevScrollPosition = currentScrollPosition;

  //     return;
  //   }

  //   if (currentScrollPosition > prevScrollPosition) {
  //     console.log("down");

  //     setBackgroundNavbar(false);
  //     prevScrollPosition = currentScrollPosition;
  //     return;
  //   }
  // };

  // window.addEventListener("scroll", changeBackgroundNavbar);
  // console.log(backgroundNavbar);
  return (
    <div className="">
      <Navbar />

      {/* Banner */}
      <div className="-z-50 h-full w-full">
        <video
          playsInline={true}
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          preload="metadata"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div>
        <div>
          <h1>Earth's Best Coffee Comes from the Freezer</h1>
          <p>Precision-Brewed Coffee, Flash-Frozen for Unrivaled Flavor</p>
        </div>

        <button className="flex items-center gap-4 rounded-full bg-[#f5d577] px-10 py-2">
          TRY COMETEER {arrow}
        </button>
      </div>

      {/* Triptych */}
      <div className="flex max-w-[1320px] flex-nowrap  overflow-scroll">
        {TRIPTYCH.map((section) => (
          <div className="flex min-w-[90%] max-w-[800px] items-center justify-center gap-8 border-r-[1px] border-black bg-[#f5d577] p-10 last:border-r-0 lg:min-w-min">
            <img
              src={section.image}
              alt={section.altText}
              className="max-w-[50px]"
            />
            <div>
              <h6>{section.title}</h6>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
