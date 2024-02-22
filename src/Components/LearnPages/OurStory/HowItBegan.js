import React from "react";

import Image0 from "../../../Assets/LearnOurStory/how-it-began-0.png";
import Image1 from "../../../Assets/LearnOurStory/how-it-began-1.png";
import Image2 from "../../../Assets/LearnOurStory/how-it-began-2.png";

const HowItBegan = () => {
  return (
    <div className="mt-20 grid gap-10 p-10 lg:grid-cols-2">
      <h2 className="text-center text-2xl font-bold md:text-3xl  lg:text-4xl">
        We believe in exceptional coffee. That's why everything we do works
        towards creating massive positive change in the coffee-verse, from farm
        to cup. The result is more fair, more sustainable, more future-forward,
        and of course, more delicious.
      </h2>

      <img
        src={Image0}
        alt="coffee-machine"
        className="w-full lg:row-start-2"
      />

      <img
        src={Image1}
        alt="coffee-testing"
        className="self-center rounded-xl lg:row-start-2"
      />
      <div className="self-center justify-self-end text-start lg:row-start-3 lg:w-[85%]">
        <h1 className="text-3xl font-bold md:text-5xl">How it all began</h1>
        <p className="mt-6 text-lg">
          Cometeer cofounder Matt Roberts was a sugar-and-cream, hold-the-coffee
          kind of guy. That is until one day when he experienced coffee so
          artfully brewed that he could enjoy it black. He put down his
          drive-through coffee and never looked back.
        </p>
      </div>

      <img
        src={Image2}
        alt="Cometeer cofounder Matt Roberts"
        className="aspect-[1.2] h-full rounded-xl object-cover lg:row-start-3 lg:w-[84%]"
      />
    </div>
  );
};

export default HowItBegan;
