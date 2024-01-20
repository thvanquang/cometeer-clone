import React from "react";

import { arrow } from "../Assets/icons/icons";

const ButtonArrow = ({ children, buttonStyle, arrowStyle }) => {
  return (
    <button
      className={`group flex items-center justify-center rounded-full ${buttonStyle}`}
    >
      {children}
      <i className={`mx-4 group-hover:animate-transition-right ${arrowStyle}`}>
        {arrow}
      </i>
    </button>
  );
};

export default ButtonArrow;
