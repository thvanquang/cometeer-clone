import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import Video from "../Assets/video.mp4";

// let prevScrollPosition = window.scrollY;

const Home = () => {
  // const [backgroundNavbar, setBackgroundNavbar] = useState(false);

  // const changeBackgroundNavbar = () => {
  //   const currentScrollPosition = window.scrollY;

  //   console.log(prevScrollPosition, currentScrollPosition);

  //   if (currentScrollPosition < prevScrollPosition) {
  //     console.log("up");

  //     setBackgroundNavbar(true);
  //     prevScrollPosition = currentScrollPosition;

  //     return;
  //   }

  //   if (currentScrollPosition > prevScrollPosition) {
  //     console.log("down");

  //     setBackgroundNavbar(false);
  //     prevScrollPosition = currentScrollPosition;
  //     return;
  //   }
  // };

  // window.addEventListener("scroll", changeBackgroundNavbar);
  // console.log(backgroundNavbar);
  return (
    <div className="">
      <Navbar background={backgroundNavbar} />
      <div className="-z-50 h-full w-full">
        <video
          playsInline={true}
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          preload="metadata"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className="h-28 bg-gray-100">hehe</div>
      <div className="h-28 bg-gray-200">hehe</div>
      <div className="h-28 bg-gray-300">hehe</div>
      <div className="h-28 bg-gray-400">hehe</div>
      <div className="h-28 bg-gray-300">hehe</div>
      <div className="h-28 bg-gray-400">hehe</div>
      <div className="h-28 bg-gray-300">hehe</div>
      <div className="h-28 bg-gray-400">hehe</div>
    </div>
  );
};

export default Home;
