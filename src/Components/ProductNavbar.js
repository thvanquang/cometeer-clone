import React, { useState, useEffect, useCallback } from "react";

import { Link as LinkScroll } from "react-scroll";

const ProductNavbar = ({ positionToFixedNavbar }) => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [shouldFixedNavbar, setShouldFixedNavbar] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;

    console.log(currentScrollPosition);
    console.log(positionToFixedNavbar);

    if (currentScrollPosition < prevScrollPosition) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }

    if (currentScrollPosition >= positionToFixedNavbar) {
      setShouldFixedNavbar(true);
    }

    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition, positionToFixedNavbar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`flex w-[100vw]  gap-4 bg-[#f7eabc] p-8 ${shouldFixedNavbar && !isScrollingUp && "fixed top-[1rem]"}`}
    >
      <LinkScroll
        className="rounded-full border-[1px] border-black px-4 py-2 uppercase hover:bg-[#f5d577]"
        to=""
      >
        Our Coffee Vs Them
      </LinkScroll>
      <LinkScroll
        className="rounded-full border-[1px] border-black px-4 py-2 uppercase hover:bg-[#f5d577]"
        to=""
      >
        What's in your order
      </LinkScroll>
      <LinkScroll
        className="rounded-full border-[1px] border-black px-4 py-2 uppercase hover:bg-[#f5d577]"
        to=""
      >
        Your Cometeer recipes
      </LinkScroll>
      <LinkScroll
        className="rounded-full border-[1px] border-black px-4 py-2 uppercase hover:bg-[#f5d577]"
        to=""
      >
        Customer reviews
      </LinkScroll>
      <LinkScroll
        className="rounded-full border-[1px] border-black px-4 py-2 uppercase hover:bg-[#f5d577]"
        to=""
      >
        FAQs
      </LinkScroll>
    </div>
  );
};

export default ProductNavbar;
