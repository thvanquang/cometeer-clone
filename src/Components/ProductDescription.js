import React from "react";

import Recyclable from "../Assets/ProductDescription/recyclable.png";
import LessFoodWaste from "../Assets/ProductDescription/less-food-waste.png";
import CompostedGround from "../Assets/ProductDescription/composted-ground.png";

const Descriptions = [
  {
    title: "Fully recyclable",
    description:
      "Our first-of-its-kind aluminum capsule is completely recyclable—no need to rinse out grounds.",
    image: Recyclable,
  },
  {
    title: "Less food waste",
    description:
      "No more waste from stale beans, poor brewing, or pouring out leftover cold coffee pots.",
    image: LessFoodWaste,
  },
  {
    title: "100% composted grounds",
    description:
      "We send all the spent grounds from our coffee to a local composting company.",
    image: CompostedGround,
  },
];

const ProductDescription = () => {
  return (
    <div className="mb-10 px-16 py-14">
      <h1 className="mb-12 text-center text-[52px]">
        Unrivaled flavor, sustainably
      </h1>
      <ul className="items-center justify-center gap-4 sm:grid sm:grid-cols-2 [@media(min-width:892px)]:flex">
        {Descriptions.map((description) => (
          <li
            key={description.title}
            className="mb-6 flex flex-col items-center justify-center gap-4"
          >
            <img src={description.image} alt={description.title} />
            <h2 className="text-sm font-medium uppercase tracking-[0.2rem]">
              {description.title}
            </h2>
            <p className="text-center">{description.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDescription;
