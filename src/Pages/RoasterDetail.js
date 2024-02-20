import React from "react";
import { useParams } from "react-router-dom";

import RoasterProduct from "../Utilities/RoasterProduct";

import HouseplantProduct from "../Assets/RoastersDetail/HouseplantProduct.png";
import HouseplantListStyle from "../Assets/RoastersDetail/HouseplantListStyle.png";
import HouseplantRoaster from "../Assets/RoastersDetail/HouseplantRoaster.png";

const ROASTERS = [
  {
    title: "Houseplant Box",
    productImage: HouseplantProduct,
    imageListStyle: HouseplantListStyle,
    productDescription: [
      {
        title: "Bean There Done That",
        description:
          "A single-origin medium roast from Aricha Adorsi, Ethiopia with notes of peach, sweet tea, and orange.",
      },
      {
        title: "Get Roasted",
        description:
          "A flagship blend from Central America with notes of dark chocolate, cashew, and baking spice.",
      },
    ],
    roasterImage: HouseplantRoaster,
    roasterImageAnnotation: "Seth Rogen - Co-Founder of Houseplant",
    roasterDescription: [
      {
        title: "A shared passion for maximal flavor—and minimal effort",
        description:
          "Seth Rogen and Evan Goldberg just launched Houseplant Coffee to share what they love: seriously good coffee from single-origin farms around the world. And they've partnered with Cometeer to make it absurdly easy to enjoy. Impeccably brewed and flash-frozen to capture the unique personality of each roast—at peak flavor and freshness.",
      },
      {
        title: "Fuel your daily ritual with Houseplant Coffee",
        description:
          "For Seth, coffee is a ritual. The complex aroma. The perfect mug. For Evan, it's life-giving fuel on a chaotic morning with the kids. Whatever your approach, we think you'll love Houseplant's latest roasts, brewed to perfection and flash frozen—so you can just melt to enjoy in seconds. Hot, iced, or latte.",
      },
    ],
  },
];

const RoasterDetailPage = () => {
  const { roasterId } = useParams();

  return (
    <div>
      <RoasterProduct roasterSelected={ROASTERS[0]} />
    </div>
  );
};

export default RoasterDetailPage;
