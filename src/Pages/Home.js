import React from "react";

import Header from "../Components/Home/Header";
// import Triptych from "../Components/Home/Triptych";
import ImageBullets from "../Components/Home/ImageBullets";
import QuoteCarousel from "../Components/Home/QuoteCarousel";
import Products from "../Components/Products";
import RoasterPartners from "../Components/Home/RoasterPartners";
import ProductDescription from "../Components/Home/ProductDescription";
import CometeerPeople from "../Components/Home/CometeerPeople";
import Banner from "../Components/Home/Banner";
import AwardCarousel from "../Components/Home/AwardCarousel";
import MagazineComment from "../Components/Home/MagazineComment";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Triptych /> */}
      <ImageBullets />
      <QuoteCarousel />
      <AwardCarousel />
      <MagazineComment />
      <Products />
      <RoasterPartners />
      <ProductDescription />
      <CometeerPeople />
      <Banner />
    </div>
  );
};

export default HomePage;
