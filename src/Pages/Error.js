import React from "react";
import { Link } from "react-router-dom";

import classes from "./Error.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.error_page}>
      <div className="ml-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="242"
          viewBox="0 0 268 242"
          fill="none"
        >
          <path
            d="M184.272 189.236C222.603 195.962 259.109 170.37 265.831 132.059C272.554 93.7481 246.933 57.2414 208.602 50.5147C199.475 48.911 190.46 49.2005 181.913 51.0047"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M183.226 15.2775L182.892 224.562"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M1.27545 15.2775C1.27545 6.21206 41.9216 1 92.2507 1C142.602 1 183.226 6.21206 183.226 15.2775"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M182.892 224.562C182.892 233.627 142.602 241 92.2507 241C41.8994 241 1.09741 233.65 1.09741 224.584"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M183.226 15.2775C183.226 24.343 142.58 30.0005 92.2507 30.0005C41.9216 30.0005 1.27545 24.3652 1.27545 15.2775"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M1.60935 224.562L1.27545 15.2775"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
          <path
            d="M135.434 99.9846L119.697 84.2371L90.7148 113.26L61.7105 84.2371L45.9729 99.9846L74.955 129.007L45.9729 158.03L61.7105 173.778L90.7148 144.755L119.697 173.778L135.434 158.03L106.452 129.007L135.434 99.9846Z"
            stroke="#F3F5E8"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </div>

      <h1 className="mb-2 text-4xl font-bold text-white">
        Sorry there's no coffee here.
      </h1>
      <p className="text-lg text-white">
        We're not sure what happened. Let's get you back.
      </p>

      <Link
        to="/"
        className="group flex items-center justify-between rounded-full bg-[#f5d577] text-black hover:bg-[#2b2c2c]"
      >
        <p className="px-8 py-6 text-2xl font-semibold text-[#2b2c2c] group-hover:text-white">
          Go back to home
        </p>
        <i className="relative mr-4 flex items-center overflow-hidden rounded-full bg-white p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute -left-[40px] h-8 w-8 transition-transform duration-300 ease-in-out  group-hover:translate-x-[47px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 transition-transform duration-300 ease-in-out  group-hover:translate-x-[100px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </i>
      </Link>
    </div>
  );
};

export default ErrorPage;
