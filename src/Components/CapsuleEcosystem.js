import React from "react";

import Feature0 from "../Assets/ProductWhatYouGet/icon-0.png";
import Feature0hover from "../Assets/ProductWhatYouGet/icon-0-hover.png";
import Feature1 from "../Assets/ProductWhatYouGet/icon-1.png";
import Feature1hover from "../Assets/ProductWhatYouGet/icon-1-hover.png";
import Feature2 from "../Assets/ProductWhatYouGet/icon-2.png";
import Feature2hover from "../Assets/ProductWhatYouGet/icon-2-hover.png";
import Feature3 from "../Assets/ProductWhatYouGet/icon-3.png";
import Feature3hover from "../Assets/ProductWhatYouGet/icon-3-hover.png";

const PRODUCT_FEATURES = [
  {
    title: "100% COMPOSTED GROUNDS",
    content:
      "We send all spent grinds from our factory to local composting farms.",
    image: Feature0,
    imageHover: Feature0hover,
  },
  {
    title: "LESS FOOD WASTE",
    content:
      "Cometeer has a 3 year shelf life. No more waste from stale beans, poor brewing, or pouring out leftover cold coffee pots.",
    image: Feature1,
    imageHover: Feature1hover,
  },
  {
    title: "NO GROUNDS IN OUR CAPSULES",
    content:
      "Our capsules contain brewed and flash frozen coffee extract which means no grounds to rinse in order to recycle!",
    image: Feature2,
    imageHover: Feature2hover,
  },
  {
    title: "RECYCLABLE MATERIAL",
    content:
      "Our aluminum capsule and shipping materials are all curbside recyclable. Even the lids!",
    image: Feature3,
    imageHover: Feature3hover,
  },
];

const CapsuleEcosystem = () => {
  return (
    <div className="my-8 grid grid-cols-2 justify-center gap-4 lg:flex">
      {PRODUCT_FEATURES.map((section) => (
        <div
          key={section.title}
          className="group w-full space-y-3 p-8 text-center"
        >
          <div className="relative mx-auto h-[3.125rem] w-[3.125rem]">
            <img
              src={section.image}
              alt={section.title}
              className="transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            <img
              src={section.imageHover}
              alt={section.title}
              className="absolute top-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          </div>
          <h2 className="mx-auto w-[80%] text-xl font-bold uppercase">
            {section.title}
          </h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CapsuleEcosystem;
