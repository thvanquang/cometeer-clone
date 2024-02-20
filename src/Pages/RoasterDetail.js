import React from "react";
import { useParams } from "react-router-dom";

import { ROASTERS } from "../Components/Roasters/roasterInformation";

import RoasterProduct from "../Components/Roasters/RoasterProduct";
import RoasterDescriptions from "../Components/Roasters/RoasterDescriptions";

const RoasterDetailPage = () => {
  const { roasterId } = useParams();

  const roasterSelected = ROASTERS.find((roaster) => roaster.id === roasterId);

  return (
    <div>
      <RoasterProduct roasterSelected={roasterSelected} />
      <RoasterDescriptions roasterSelected={roasterSelected} />
    </div>
  );
};

export default RoasterDetailPage;
