import React from "react";

import FreshCoffee from "../../../Assets/LearnSustainability/FreshCoffee.png";
import PlanetFriendly from "../../../Assets/LearnSustainability/PlanetFriendly.png";
import Recycling0 from "../../../Assets/LearnSustainability/Recycling0.png";
import Recycling1 from "../../../Assets/LearnSustainability/Recycling1.png";

const ProductSustainability = () => {
  return (
    <div className="p-8">
      <div className="lg:px-24">
        <div className="flex flex-col items-center gap-14 md:flex-row">
          <div className="w-full">
            <h1 className="w-[60%] text-2xl font-bold md:text-3xl lg:text-5xl">
              Coffee That Stays Fresh
            </h1>
            <p className="mt-8">
              We're team fresh coffee. From the beans we use for brewing to what
              ends up in our capsules, keeping everything fresh is our top
              priority. And it's made to last. Unlike coffee you buy in a bag,
              our frozen coffee capsules stay incredibly delicious for three
              years. So go ahead, stock up, and make a perfect cup every time.
              You'll never pour a pot of cold, burnt, coffee down the drain
              again.
            </p>
          </div>
          <img
            src={FreshCoffee}
            alt="fresh-coffee"
            className="aspect-square w-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-20 flex flex-col-reverse items-center gap-14 md:flex-row">
          <img
            src={PlanetFriendly}
            alt="fresh-coffee"
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <div className="w-full">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
              Planet Friendly
            </h1>
            <p className="mt-8">
              We aim to reduce waste wherever we can. And since our 100%
              aluminum capsules are clean of spent grounds, unlike with K-Cups
              or Nespresso, they can be easily recycled at home. No shipping
              spent pods to a recycling center. Even our packaging is
              environmentally friendly. The insulation that comes in your box is
              made from kraft paper which can be sorted with cardboard. During
              the repulping stage, the bio-based material dissolves and the
              valuable fibers are retained for use in creating new paper-based
              products. So end to end, we've got the planet in mind.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-[#f5d577] px-8 py-20 xl:px-24">
        <div className="items-center gap-12 md:flex">
          <div className="w-full lg:w-[60%]">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Once you've prepared your Cometeer, remember recycling.
            </h2>
            <p className="my-8">
              Just rinse your capsule and toss in recycling, lid and all. Place
              your box shipper and sleeves with curbside recycling. It's that
              easy.
            </p>
            <img src={Recycling0} alt="recycling" />
          </div>

          <div className="mt-10 md:mt-0">
            <img
              src={Recycling1}
              alt="recycling"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSustainability;
