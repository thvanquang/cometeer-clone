import React from "react";

import Logo from "../../Assets/Navbar/logo.png";

const ProductComparament = () => {
  return (
    <div className="w-full overflow-y-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Our Coffee vs Them</h1>

      <div className="flex w-full min-w-[1000px] items-end justify-center text-center text-xl font-normal">
        <div className="min-w-[9.375rem] flex-1 rounded-s-2xl border-y border-l border-[#a0a0a0] bg-[#e3dcc2] text-start font-semibold">
          <div className="flex h-[102px] items-center  border-b border-[#a0a0a0] p-4 lg:p-6">
            Price per cup
          </div>
          <div className="flex h-[102px] items-center  border-b border-[#a0a0a0] p-4 lg:p-6">
            Special machine required
          </div>
          <div className="flex h-[102px] items-center  border-b border-[#a0a0a0] p-4 lg:p-6">
            Coffee Format
          </div>
          <div className="flex h-[102px] items-center  border-b border-[#a0a0a0] p-4 lg:p-6">
            100% Curbside Recyclable
          </div>
          <div className="flex h-[102px] items-center  p-4 lg:p-6">
            Primary trade source
          </div>
        </div>

        <div className="min-w-[8.75rem] flex-1 rounded-ss-2xl border-y border-l border-[#a0a0a0] bg-[#f5d577]">
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4">
            <img
              src={Logo}
              alt="Cometeer Logo"
              className="h-full max-h-[44px] w-auto"
            />
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            $2
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            No
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Hyper fresh coffee extract
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Yes
          </div>
          <div className="flex h-[102px] items-center justify-center p-4 lg:p-6">
            Specialty direct trade
          </div>
        </div>

        <div className="min-w-[8.75rem] flex-1 border-y border-l border-[#a0a0a0] bg-[#e3dcc2]">
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 font-bold lg:p-6">
            Corner Cafe
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            $2.55 or more
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            No
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Finely ground, stale
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Yes
          </div>
          <div className="flex h-[102px] items-center justify-center p-4 lg:p-6">
            Commodity
          </div>
        </div>

        <div className="min-w-[8.75rem] flex-1 border-y border-l border-[#a0a0a0] bg-[#e3dcc2]">
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 font-bold lg:p-6">
            Espresso Pods
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            $1 or more
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Yes - $130 or more
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Finely ground, stale
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            No
          </div>
          <div className="flex h-[102px] items-center justify-center p-4 lg:p-6">
            Commodity
          </div>
        </div>

        <div className="min-w-[8.75rem] flex-1 rounded-e-2xl border border-[#a0a0a0] bg-[#e3dcc2]">
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 font-bold lg:p-6">
            Coffee Pods
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Less than $1
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Yes - $50 or more
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            Finely ground, stale
          </div>
          <div className="flex h-[102px] items-center justify-center border-b border-[#a0a0a0] p-4 lg:p-6">
            No
          </div>
          <div className="flex h-[102px] items-center justify-center p-4 lg:p-6">
            Commodity
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparament;
