import React from "react";
import ButtonArrowWithCircle from "../../Utilities/ButtonArrowWithCircle";

const Banner = () => {
  return (
    <div className="flex flex-col items-center bg-[#f5d577] p-10">
      <h1 className="mb-6 text-center text-2xl font-bold text-black lg:text-3xl xl:text-4xl">
        Try Earth's first hyper fresh coffee
      </h1>

      <ButtonArrowWithCircle
        content={"Get cometeer now"}
        bgNHover={"bg-black"}
        textColorNHover={"text-white"}
      />
    </div>
  );
};

export default Banner;
