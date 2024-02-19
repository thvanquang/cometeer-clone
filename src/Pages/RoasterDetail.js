import React from "react";
import { useParams } from "react-router-dom";

const RoasterDetailPage = () => {
  const { roasterId } = useParams();

  return <div>{roasterId}</div>;
};

export default RoasterDetailPage;
