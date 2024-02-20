import React from "react";

const RoasterDescriptions = ({ roasterSelected }) => {
  return (
    <div className="space-y-10 p-10">
      <div className="flex gap-28">
        <h1 className="w-full text-2xl font-bold md:text-3xl lg:text-4xl">
          {roasterSelected.roasterDescription0.title}
        </h1>
        <p className="text-lg">
          {roasterSelected.roasterDescription0.description}
        </p>
      </div>

      <div>
        <img
          src={roasterSelected.roasterImage}
          alt={roasterSelected.roasterImageAnnotation}
          className="rounded-xl"
        />
        <p className="mt-4 text-xs">{roasterSelected.roasterImageAnnotation}</p>
      </div>

      <div className="mx-auto w-[75%]">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {roasterSelected.roasterDescription1.title}
        </h1>
        <p className="mt-8 text-lg">
          {roasterSelected.roasterDescription1.description}
        </p>
      </div>
    </div>
  );
};

export default RoasterDescriptions;
