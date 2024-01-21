// import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Triptych from "../Components/Triptych";
import ImageBullets from "../Components/ImageBullets";
import Carousel from "../Components/Carousel";
import Products from "../Components/Products";
import RoasterPartners from "../Components/RoasterPartners";
import ProductDescription from "../Components/ProductDescription";
import CometeerPeople from "../Components/CometeerPeople";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Triptych />
      <ImageBullets />
      <Carousel />
      <Products />
      <RoasterPartners />
      <ProductDescription />
      <CometeerPeople />
      <Banner />
    </div>
  );
};

export default Home;
