// import React, { useState } from "react";
import Banner from "../Components/Banner";
import Carousel from "../Components/Carousel";
import ImageBullets from "../Components/ImageBullets";
import Navbar from "../Components/Navbar";
import Triptych from "../Components/Triptych";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Triptych />
      <ImageBullets />
      <Carousel />
    </div>
  );
};

export default Home;
