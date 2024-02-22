import React from "react";
import { Link } from "react-router-dom";

import ButtonArrowWithCircle from "../../../Utilities/ButtonArrowWithCircle";
import BackgroundScrollThrough from "../../../Utilities/BackgroundScrollThrough";

import ThePerfectBrewBg from "../../../Assets/LearnOurStory/the-perfect-brew.png";

const TheResult = () => {
  return (
    <>
      <div className="px-8 py-16 md:px-24 lg:px-32">
        <h1 className="text-3xl font-bold md:text-5xl">The Result</h1>
        <div className="mt-10 gap-16 md:flex">
          <div className="">
            <h3 className="mb-6 text-2xl font-bold lg:text-3xl ">
              Setting a new standard for coffee
            </h3>
            <p className="mb-6">
              The magic of Cometeer is that it captures the complete flavor
              profile of just-brewed, artisanal coffee in a flash-frozen
              capsule, and it holds onto that freshness right up until you're
              ready to brew at home. No machines or gadgets. No grinding beans
              or measuring out scoops. Simply pop the frozen coffee puck into an
              empty mug and add 6 - 8 oz of hot water for the perfect cup.
              Every. Single. Time.
            </p>
            <Link to="/pages/how-it-works">
              <ButtonArrowWithCircle
                content={"Our recipes"}
                bgNHover={"bg-[#f5d577] hover:bg-[#2c2b2b]"}
                textColorNHover={"text-[#2c2b2b] hover:text-white"}
              />
            </Link>
          </div>
          <div className="mt-16 md:mt-0">
            <h3 className="mb-6 text-2xl font-bold lg:text-3xl">
              Simply the best
            </h3>
            <p className="mb-6">
              Knowing that the coffee could only be as good as the beans it came
              from, Roberts set out to share his invention with the country's
              best specialty coffee roasters. He sought out those who share the
              Cometeer values of fair trade, sustainable sourcing practices, and
              who used exemplary methods of roasting techniques. Cometeer
              partners with thirteen roasters—with more just around the corner.
            </p>
            <Link to="/roasters/birch-box">
              <ButtonArrowWithCircle
                content={"Meet out roasters"}
                bgNHover={"bg-[#f5d577] hover:bg-[#2c2b2b]"}
                textColorNHover={"text-[#2c2b2b] hover:text-white"}
              />
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="relative h-[50vh] overflow-hidden">
        <BackgroundScrollThrough image={ThePerfectBrewBg}>
          <div className="absolute inset-0 top-1/2 w-[40%] -translate-y-1/2 py-10 md:px-24 lg:px-32">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              The perfect brew
            </h1>
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-[#231f20] opacity-20 content-['']"></div>
        </BackgroundScrollThrough>
      </div>

      <div className="px-8 py-16 md:px-24 lg:px-32">
        <div className="mt-10">
          <h3 className="mb-6 text-2xl font-bold lg:text-3xl ">
            We spent a ton of time on the hard parts to make it super easy for
            you.
          </h3>
          <p className="mb-6">
            With our proprietary precision-brew system and future-forward
            cryogenic packaging method ( flash-frozen at -321 ºF!), Cometeer
            achieves a perfect—in taste and at the molecular level—balanced
            expression of coffee. Basically, it's a level of brewing perfection
            attained by only the greatest baristas. And we achieve it
            consistently, in every cup.
          </p>
          <p className="mb-6">
            Thanks to this very fast and extremely cold process, Cometeer keeps
            its freshly-brewed taste for months (and months and months). With no
            preservatives, as our ingredients are simply coffee and water.
          </p>
          <p className="mb-6">
            To date, Cometeer has delivered over 5 million cups of coffee.
            That's a lot of good mornings.
          </p>
          <Link to="/products/mixed-roast-box">
            <ButtonArrowWithCircle
              content={"Get started"}
              bgNHover={"bg-[#f5d577] hover:bg-[#2c2b2b]"}
              textColorNHover={"text-[#2c2b2b] hover:text-white"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TheResult;
