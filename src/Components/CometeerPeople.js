import React, { useState } from "react";

import GeorgeHowell from "../Assets/CometeerPeople/GeorgeHowell.png";
import DavidChang from "../Assets/CometeerPeople/DavidChang.png";
import JamesHoffmann from "../Assets/CometeerPeople/JamesHoffmann.png";

const People = [
  {
    name: "George Howell",
    title: "Coffee Roaster",
    quote: "Cometeer will do for coffee what the bottle did for wine.",
    image: GeorgeHowell,
  },
  {
    name: "David Chang",
    title: "Michelin Star Chef",
    quote:
      "I've always loved pour over coffee but didn't have the time or expertise needed to make it correctly. Cometeer makes great coffee more accessible for me.",
    image: DavidChang,
  },
  {
    name: "James Hoffmann",
    title: "World Barista Champion",
    quote:
      "What made me so excited about Cometeer was that finally great coffee had no barriers of equipment, or skills. Drinking some of the very best coffee in the world is now incredibly easy.",
    image: JamesHoffmann,
  },
];

const CometeerPeople = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? People.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === People.length - 1 ? 0 : currentSlide + 1);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    }
    if (event.key === "ArrowRight") {
      nextSlide();
    }
  });

  return (
    <div className="my-8 text-[#1a1a1a]">
      <h1 className="mb-4 text-center text-[40px]">
        By coffee people, for coffee people
      </h1>

      <div className="relative overflow-hidden pb-20 lg:pb-8">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {People.map((people) => (
            <div
              key={people.name}
              className="p-4 lg:w-full [@media(max-width:1024px)]:min-w-full 
             "
            >
              <div className="mx-auto max-w-[460px] p-4">
                <img
                  src={people.image}
                  alt={people.name}
                  className="mb-4 w-full"
                />
                <h2 className="text-[32px] font-bold">{people.name}</h2>
                <p className="mb-2 text-xs uppercase tracking-[0.2rem]">
                  {people.title}
                </p>
                <p className="italic">{people.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 lg:hidden">
          {People.map((_, i) => (
            <button
              key={i}
              className={`h-4 w-4 rounded-full border-2 border-[#1a1a1a] ${i === currentSlide ? "bg-[#1a1a1a]" : "bg-none"}`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CometeerPeople;
