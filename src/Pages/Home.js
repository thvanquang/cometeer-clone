// import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
// import Triptych from "../Components/Triptych";
import ImageBullets from "../Components/ImageBullets";
import QuoteCarousel from "../Components/QuoteCarousel";
import Products from "../Components/Products";
import RoasterPartners from "../Components/RoasterPartners";
import ProductDescription from "../Components/ProductDescription";
import CometeerPeople from "../Components/CometeerPeople";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      {/* <Triptych /> */}
      <ImageBullets />
      <QuoteCarousel />
      <Products />
      <RoasterPartners />
      <ProductDescription />
      <CometeerPeople />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
