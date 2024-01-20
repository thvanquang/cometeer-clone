// import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Triptych from "../Components/Triptych";
import ImageBullets from "../Components/ImageBullets";
import Carousel from "../Components/Carousel";
import Products from "../Components/Products";
import RoasterPartners from "../Components/RoasterPartners";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Triptych />
      <ImageBullets />
      <Carousel />
      <Products />
      <RoasterPartners />
    </div>
  );
};

export default Home;
