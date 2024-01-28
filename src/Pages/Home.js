import React from "react";

import Header from "../Components/Header";
// import Triptych from "../Components/Triptych";
import ImageBullets from "../Components/ImageBullets";
import QuoteCarousel from "../Components/QuoteCarousel";
import Products from "../Components/Products";
import RoasterPartners from "../Components/RoasterPartners";
import ProductDescription from "../Components/ProductDescription";
import CometeerPeople from "../Components/CometeerPeople";
import Banner from "../Components/Banner";
import AwardCarousel from "../Components/AwardCarousel";
import MagazineComment from "../Components/MagazineComment";

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
