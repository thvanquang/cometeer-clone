import React, { useRef, useState } from "react";

import SusCarousel0 from "../../../Assets/LearnSustainability/SusCarousel0.png";
import SusCarousel1 from "../../../Assets/LearnSustainability/SusCarousel1.png";
import SusCarousel2 from "../../../Assets/LearnSustainability/SusCarousel2.png";
import { arrow } from "../../../Assets/icons/icons";
import CarouselLearnPages from "../../../Utilities/CarouselLearnPages";

const CAROUSEL = [
  {
    title: "Responsible and Thoughtful Sourcing",
    image: SusCarousel0,
    content:
      "We take our role in the coffee community seriously and only partner with roasters who embrace direct trade sourcing. This means cutting out the intermediary and working directly with coffee producers. Doing so ensures farmers and their teams are paid higher prices. Oftentimes, the pay is even higher than they might earn through Fair Trade certification programs.",
  },
  {
    title: "Process with Purpose",
    image: SusCarousel1,
    content:
      "Little known facts about coffee beans: they start to go stale as soon as they're exposed to oxygen, usually in a matter of weeks. And grounds lose their freshness hours after they're ground. Through first-class sourcing and proprietary brewing techniques - we brew each bean at peak freshness - our optimized extraction process ensures that no bean goes to waste because it's gone bad or was poorly brewed.",
  },
  {
    title: "Compost every ground",
    image: SusCarousel2,
    content:
      "Our sustainability efforts don't stop there. We compost 100% of all spent coffee grounds. In 2022 alone we sent over ONE MILLION pounds to local composting farms outside our Gloucester, MA factory.",
  },
];

const AboutSustainability = () => {
  return (
    <div className="px-12 pb-8">
      <CarouselLearnPages CAROUSEL={CAROUSEL} />
    </div>
  );
};

export default AboutSustainability;
