import React from "react";

import CounterCulture from "../../Assets/RoasterPartners/counter-culture.png";
import BirdRock from "../../Assets/RoasterPartners/bird-rock.png";
import GeorgeHowell from "../../Assets/RoasterPartners/george-howell.png";
import Equator from "../../Assets/RoasterPartners/equator.png";
import Birch from "../../Assets/RoasterPartners/birch.png";
import JoeCoffee from "../../Assets/RoasterPartners/joe-coffee.png";
import RedBay from "../../Assets/RoasterPartners/red-bay.png";
import GGet from "../../Assets/RoasterPartners/gget.png";
import Klatch from "../../Assets/RoasterPartners/klatch.png";
import Onyx from "../../Assets/RoasterPartners/onyx.png";
import SquareMile from "../../Assets/RoasterPartners/square-mile.png";
import BlackWhite from "../../Assets/RoasterPartners/black-white.png";

import ButtonArrow from "../../Utilities/ButtonArrow";

const Roasters = [
  {
    name: "counter-culture-box",
    logo: CounterCulture,
    bgColor: "bg-[#6067ae]",
  },
  { name: "bird-rock-box", logo: BirdRock, bgColor: "bg-[#2b6f79]" },
  { name: "george-howell-box", logo: GeorgeHowell, bgColor: "bg-[#233747]" },
  { name: "equator-box", logo: Equator, bgColor: "bg-[#b94a48]" },
  { name: "birch-box", logo: Birch, bgColor: "bg-[#3b3836]" },
  { name: "joe-coffee-box", logo: JoeCoffee, bgColor: "bg-[#1189a9]" },
  { name: "red-bay-box", logo: RedBay, bgColor: "bg-[#262c33]" },
  { name: "go-get-em-tiger-box", logo: GGet, bgColor: "bg-[#bd62a6]" },
  { name: "klatch-box", logo: Klatch, bgColor: "bg-[#cb8439]" },
  { name: "onyx-box", logo: Onyx, bgColor: "bg-[#999366]" },
  { name: "square-mile-box", logo: SquareMile, bgColor: "bg-[#003258]" },
  { name: "black-white-box", logo: BlackWhite, bgColor: "bg-[#000]" },
  { name: "intelligentsia-box", logo: "", bgColor: "bg-[#ca2a22]" },
];

const RoasterPartners = () => {
  return (
    <div className="bg-[#2c2b2b] px-6 py-20 text-center ">
      <div className="mb-6 text-white">
        <h1 className="mb-2 text-5xl font-extrabold">
          The best specialty roasters
        </h1>
        <p>
          We partner with award-winning small batch roasters—who wouldn't trust
          their beans to just anyone.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-2 p-4">
        {Roasters.map((roaster) => (
          <div
            key={roaster.name}
            className={`flex max-w-[166px] items-center justify-center rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-70 md:aspect-square md:p-8 ${roaster.bgColor}`}
          >
            <img src={roaster.logo} alt={roaster.name} className="w-fit" />
          </div>
        ))}
      </div>

      <ButtonArrow
        buttonStyle={"px-6 py-4 bg-[#f5d577] hover:bg-[#ddbf6d] mx-auto my-4"}
      >
        <p className="uppercase tracking-widest">Explore roasters</p>
      </ButtonArrow>
    </div>
  );
};

export default RoasterPartners;
