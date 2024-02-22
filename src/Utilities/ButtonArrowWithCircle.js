import React from "react";

const ButtonArrowWithCircle = ({ content, bgNHover, textColorNHover }) => {
  return (
    <button
      className={`group flex items-center justify-between gap-2 rounded-full text-black ${bgNHover}`}
    >
      <p className={`px-8 py-4 text-lg font-semibold ${textColorNHover}`}>
        {content}
      </p>
      <i className="relative mr-3 flex items-center overflow-hidden rounded-full bg-white p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute -left-[20px] h-5 w-5 transition-transform duration-300 ease-in-out  group-hover:translate-x-[27px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        {/* hidden arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 transition-transform duration-300 ease-in-out  group-hover:translate-x-[100px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        {/* arrow */}
      </i>
    </button>
  );
};

export default ButtonArrowWithCircle;
