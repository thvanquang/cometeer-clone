import React from "react";

const BackgroundScrollThrough = ({ image, children }) => {
  return (
    <div
      className="-z-10 h-[100vh] bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundScrollThrough;
