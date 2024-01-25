import React, { useEffect, useState } from "react";

import Wirecutter from "../Assets/MagazineComment/Wirecutter.png";
import BuzzFeed from "../Assets/MagazineComment/BuzzFeed.png";
import bonAppetit from "../Assets/MagazineComment/bon-appetit.png";

import classes from "./MagazineComment.module.css";

const Comments = [
  {
    name: "Wirecutter",
    comment: "Nothing short of transcendent.",
    logo: Wirecutter,
  },
  {
    name: "BuzzFeed",
    comment:
      "The different varieties of drinks you can make arehonestly incredible.",
    logo: BuzzFeed,
  },
  {
    name: "bon-appetit",
    comment: "Easiest way to enjoy a greatcup of coffee.",
    logo: bonAppetit,
  },
];

const MagazineComment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentSlide(0);
    });

    return window.removeEventListener("resize", () => {
      setCurrentSlide(0);
    });
  }, []);

  return (
    <div className={classes.carousel}>
      <div
        className="flex items-start pt-12 text-[#1a1a1a] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Comments.map((cmt) => (
          <div key={cmt.name} className=" min-w-full xl:min-w-[460px]">
            <div className="mx-auto flex max-w-[460px] flex-col items-center justify-center gap-4 p-4">
              <p className="text-center text-[32px] font-bold italic leading-10">
                {cmt.comment}
              </p>
              <img src={cmt.logo} alt={cmt.name} className="w-[115px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 right-0 xl:hidden">
        <div className="flex items-center justify-center gap-4">
          {Comments.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-4 w-4 rounded-full border-2 border-[#1a1a1a] transition-colors duration-200 ease-out ${currentSlide === i ? "bg-[#1a1a1a]" : "bg-opacity-50"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazineComment;
