import React, { useState } from "react";

import GiftCardImage from "../../Assets/GiftCard/gift-card.png";
import BestBean from "../../Assets/ProductsUtility/best-beans.png";
import Spaceman from "../../Assets/ProductsUtility/spaceman.png";
import Delivery from "../../Assets/ProductsUtility/delivery.png";
import { check } from "../../Assets/icons/icons";

const GiftCard = () => {
  const [formClicked, setFormClicked] = useState(true);

  const formClickeHandler = () => {
    setFormClicked(!formClicked);
  };
  return (
    <div className="mx-auto gap-4 px-6 py-10">
      <div className="relative min-w-[50%] justify-center gap-4 overflow-y-visible md:grid md:grid-cols-2">
        {/* For larger than mobile screen */}
        <div className="row-span-full mx-[-1rem] mb-4 grid grid-cols-6 lg:space-y-3 [@media(max-width:768px)]:hidden">
          <figure className="col-span-full  justify-self-center p-8">
            <img
              src={GiftCardImage}
              alt="gift-card-cometeer"
              className="aspect-[3/2] w-full object-cover"
            />
          </figure>

          <div className="col-span-2 flex aspect-square min-w-24 justify-center rounded-lg">
            <img src={BestBean} alt="Bean" className="max-h-[105px]" />
          </div>
          <div className="col-span-2 col-start-3 flex aspect-square min-w-24  justify-center rounded-lg">
            <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
          </div>
          <div className="col-span-2 col-start-5 flex aspect-square min-w-24 justify-center rounded-lg">
            <img src={Delivery} alt="Cup" className="max-h-[105px]" />
          </div>
        </div>

        <div className="sticky top-16 ml-8 mt-4">
          <div className="mb-4">
            <h2 className="mb-2 text-[52px] font-extrabold">
              Cometeer Gift Card
            </h2>
          </div>

          {/* for mobile screen */}
          <div className="mx-[-1rem] mb-4 grid grid-cols-6 md:hidden">
            <figure className="col-span-full justify-center self-center justify-self-center">
              <img
                src={GiftCardImage}
                alt="gift-card-cometeer"
                className="min-w-auto"
              />
            </figure>
            <div className="col-span-2 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={BestBean} alt="Bean" className="max-h-[105px]" />
            </div>
            <div className="col-span-2 col-start-3 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={Spaceman} alt="Spaceman" className="max-h-[105px]" />
            </div>
            <div className="col-span-2 col-start-5 flex aspect-square min-w-24 justify-center rounded-lg">
              <img src={Delivery} alt="Cup" className="max-h-[105px]" />
            </div>
          </div>

          <div className="w-[95%] space-y-14">
            <p>
              Whether you're looking to show appreciation or some love, Cometeer
              is the perfect gift.
            </p>
            <p>
              *This will work on all products on our site, however, it will not
              be applicable if you have an existing subscription already that
              you want to apply to your next interval order.{" "}
            </p>
          </div>

          <div className="mt-6 flex w-[68%] flex-col gap-4">
            <label
              onClick={formClickeHandler}
              className="ml-2 flex cursor-pointer items-center gap-2"
            >
              <div className="aspect-square rounded-full border-[1px] border-[#aaaaa6] p-1">
                <i className={!formClicked && "opacity-0"}>{check}</i>
              </div>
              <span>I want to send this as a gift</span>
            </label>

            <div className={`flex flex-col gap-4 ${!formClicked && "hidden"}`}>
              <input
                type="email"
                placeholder="Recipient Email"
                required
                className="rounded-md border-2 border-[#dddedc] bg-[#f3f5e8] p-2 transition-colors duration-500 ease-in-out placeholder:text-[#dddedc] focus:border-[#a3a3a3] focus:outline-none"
              ></input>
              <input
                type="text"
                placeholder="Recipient Name (optional)"
                className="rounded-md border-2 border-[#dddedc] bg-[#f3f5e8] p-2 transition-colors duration-500 ease-in-out placeholder:text-[#dddedc] focus:border-[#a3a3a3] focus:outline-none"
              ></input>
              <textarea
                placeholder="Message (optional)"
                maxLength={200}
                rows={4}
                className="rounded-md border-2 border-[#dddedc] bg-[#f3f5e8] p-2 transition-colors duration-500 ease-in-out placeholder:text-[#dddedc] focus:border-[#a3a3a3] focus:outline-none"
              ></textarea>
              <label>200 characters max</label>
            </div>
          </div>

          <button className="mt-2 w-[70%] rounded-full bg-black bg-opacity-65 px-6 py-4">
            <p className="text-center text-xs font-medium uppercase tracking-wide text-white">
              Add to Order $100.00
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
