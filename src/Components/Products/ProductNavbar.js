import React, { useState, useEffect, useCallback } from "react";

import { Link as LinkScroll } from "react-scroll";
import { useInView } from "react-intersection-observer";

import classes from "./ProductNavbar.module.css";

const NAVBAR_ITEMS = [
  {
    name: "Our Coffee Vs Them",
    address: "comparament",
  },
  {
    name: "What's in your order",
    address: "what-in-your-order",
  },
  {
    name: "Your Cometeer recipes",
    address: "cometeer-recipes",
  },
  {
    name: "Customer reviews",
    address: "customer-reviews",
  },
  {
    name: "FAQs",
    address: "faqs",
  },
];

const ProductNavbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [activedLink, setActivedLink] = useState(0);

  const { ref: intersectionRef } = useInView({
    threshold: 0,
    onChange: (inView) => {
      // khi scroll xuống qua khỏi ProductNavbar thì mới bắt đầu fixed
      // khi scroll lên, Navbar bị ẩn đi, inView cũng chuyển thành false...

      console.log(inView);

      if (!isScrollingUp && !inView) {
        setFixedNavbar(true);
      }

      if (isScrollingUp && !inView) {
        setFixedNavbar(false);
      }
    },
  });

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition < prevScrollPosition) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition]);

  const setActivedHandler = (i) => {
    if (window.innerWidth >= 900) {
      return setActivedLink(0);
    } else {
      return setActivedLink(i);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setActivedHandler);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setActivedHandler);
    };
  }, [handleScroll]);

  //FIXME
  return (
    <>
      {/* this creat to mark position of navbar when it static; so when can use it to check when to fixed navbar on screen.
    because when scroll, navbar hidding, onChange trigger. that why we need a static postion... */}
      <div ref={intersectionRef} className="w-screen bg-transparent p-8"></div>
      <div
        className={`z-20 w-screen overflow-hidden bg-[#f7f0d3] p-8  ${fixedNavbar && !isScrollingUp && "fixed top-0"}`}
      >
        <div
          className="flex min-w-full flex-nowrap gap-4 transition-transform duration-300 ease-in"
          style={{
            transform: `translateX(-${(activedLink <= 2 ? activedLink : 2) * 20}%)`,
          }}
        >
          {NAVBAR_ITEMS.map((item, i) => (
            <LinkScroll
              key={item.name}
              activeClass={classes.active}
              onSetActive={() => setActivedHandler(i)}
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="min-w-fit rounded-full border-[1px] border-black px-5 py-2 uppercase hover:bg-[#f5d577] hover:text-[#2b2c2c] lg:py-2"
              to={item.address}
            >
              {item.name}
            </LinkScroll>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
