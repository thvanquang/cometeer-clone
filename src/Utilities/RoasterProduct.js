import React from "react";

import ButtonArrow from "./ButtonArrow";

const RoasterProduct = ({ roasterSelected }) => {
  const productSubtitle = "32 Cups Total, 2 Unique Coffees";

  return (
    <div className="mx-auto gap-4 p-6">
      <div className="relative min-w-[50%] justify-center gap-4 overflow-y-visible md:grid md:grid-cols-2">
        {/* For larger than mobile screen */}
        <div className="row-span-full mx-[-1rem] mb-4 [@media(max-width:768px)]:hidden">
          <figure className="col-span-full  justify-self-center p-8">
            <img
              src={roasterSelected.productImage}
              alt={roasterSelected.title}
              className="w-full rounded-lg object-cover"
            />
          </figure>
        </div>

        <div className="sticky top-16 ml-4 mt-4">
          <div className="mb-4">
            <h2 className="mb-2 text-[52px] font-extrabold">
              {roasterSelected.title}
            </h2>
            <h3 className="text-base">{productSubtitle}</h3>
          </div>

          {/* for mobile screen */}
          <div className="mx-[-1rem] md:hidden">
            <figure className="col-span-full justify-center self-center justify-self-center">
              <img
                src={roasterSelected.productImage}
                alt={roasterSelected.title}
                className="min-w-auto"
              />
            </figure>
          </div>

          <div className="mb-6">
            {roasterSelected.imageListStyle ? (
              <div className="mt-20">
                <p className="uppercase tracking-wide">Included in your box:</p>
                <ul className="space-y-2">
                  {roasterSelected.productDescription.map((des) => (
                    <li key={des.title} className="flex gap-3">
                      <img
                        src={roasterSelected.imageListStyle}
                        alt={des.title}
                        className="max-w-[80px] object-contain"
                      />
                      <div>
                        <h4 className="font-semibold">{des.title}</h4>
                        <p>{des.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>{roasterSelected.productDescription}</div>
            )}

            <div className="mt-12 max-w-[420px]">
              <div className="mb-2">
                <form action="#">
                  <ButtonArrow
                    buttonStyle={`bg-[#f5d577] px-4 py-3 hover:bg-[#ddbf6d] h-full w-full`}
                  >
                    <p className="mr-3 text-sm font-semibold uppercase">
                      Membership
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <span
                        className="text-[#8c7c4d]"
                        style={{ textDecoration: "line-through" }}
                      >
                        $84.00
                      </span>
                      <span>$64.00</span>
                    </div>
                  </ButtonArrow>
                </form>
              </div>

              <ButtonArrow
                buttonStyle={
                  "px-4 py-3 h-full w-full text-[#808080] hover:bg-[#2c2b2b] hover:border-0 hover:text-white border-black border-[1px]"
                }
                arrowStyle={"text-[#2c2b2b] group-hover:text-white"}
              >
                <p className="mr-3 text-sm font-semibold uppercase group-hover:text-[#7a7d7d]">
                  One time purchase
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="group-hover:text-[#7a7d7d]">$84.00</span>
                </div>
              </ButtonArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoasterProduct;
