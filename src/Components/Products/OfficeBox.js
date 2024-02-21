import React, { useState, useEffect, useCallback } from "react";
import { Link as LinkScroll, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Products from "../../Utilities/Products";
import FullHalfDecaf from "../../Assets/OfficeBox/full-half-decaf.png";
import LightMediumDecaf from "../../Assets/OfficeBox/light-medium-decaf.png";
import MediumDarkDecaf from "../../Assets/OfficeBox/medium-dark-decaf.png";
import LightMediumDark from "../../Assets/OfficeBox/light-medium-dark.png";
import MediumDark from "../../Assets/OfficeBox/medium-dark.png";
import WhyYouGet0 from "../../Assets/OfficeBox/why-you-get0.png";
import WhyYouGet1 from "../../Assets/OfficeBox/why-you-get1.png";
import GetInTouch from "../../Assets/OfficeBox/get-in-touch.png";

import { arrow } from "../../Assets/icons/icons";

import classes from "./OfficeBox.module.css";

const BOXS = [
  {
    title: "Full, Half, & Decaf",
    image: FullHalfDecaf,
    description: [
      "Specialty Coffee Roasters from around the World",
      "Make any Drink from Iced Oat Milk Lattes to Pour-Over Quality Coffee",
      "Great for Offices With 20+ Employees",
    ],
  },
  {
    title: "Light, Medium & Decaf",
    image: LightMediumDecaf,
    description: [
      "Specialty Coffee Roasters from around the World",
      "Make any Drink from Iced Oat Milk Lattes to Pour-Over Quality Coffee",
      "Great for Offices With 20+ Employees",
    ],
  },
  {
    title: "Medium, Dark & Decaf",
    image: MediumDarkDecaf,
    description: [
      "Specialty Coffee Roasters from around the World",
      "Make any Drink from Iced Oat Milk Lattes to Pour-Over Quality Coffee",
      "Great for Offices With 20+ Employees",
    ],
  },
  {
    title: "Light, Medium & Dark",
    image: LightMediumDark,
    description: [
      "Specialty Coffee Roasters from around the World",
      "Make any Drink from Iced Oat Milk Lattes to Pour-Over Quality Coffee",
      "Great for Offices With 20+ Employees",
    ],
  },
  {
    title: "Medium & Dark",
    image: MediumDark,
    description: [
      "Specialty Coffee Roasters from around the World",
      "Make any Drink from Iced Oat Milk Lattes to Pour-Over Quality Coffee",
      "Great for Offices With 20+ Employees",
    ],
  },
];

const NAVBAR_ITEMS = [
  { name: "Why get cometeer for office", address: "why-get-cometeer" },
  { name: "Customer reviews", address: "customer-reviews" },
];

const WHY_YOU_GET = [
  {
    title: "Great for Team-Building",
    description:
      "World-class, incredibly convenient coffee brings a spark to everyday work. Great for remote team perks and in office coffee clubs.",
    image: WhyYouGet0,
  },
  {
    title: "Make Work a Latte More Delicious",
    description:
      "No more coffee trips or fancy machines that always seem broken. Make your favorite coffee and espresso beverages right in the office - no machines required.",
    image: WhyYouGet1,
  },
];

const OfficeBox = () => {
  //// State Manage
  // Product
  const [boxSelector, setBoxSelector] = useState("Full, Half, & Decaf");
  const boxSelected = BOXS.find((box) => box.title === boxSelector);
  // Navbar Handler
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [activedLink, setActivedLink] = useState(0);

  // Elements
  const [currentSlide, setCurrentSlide] = useState(0);

  //// Handler
  // Navbar
  const { ref: navbarRef } = useInView({
    threshold: 0,
    onChange: (inView) => {
      console.log(inView);
      if (prevScrollPosition === 0) {
        return;
      }

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

    // !!! hardcode
    if (window.innerWidth >= 1024) {
      setCurrentSlide(0);
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

  // Elements
  const prevSlide = () => {
    return setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };
  const nextSlide = () => {
    return setCurrentSlide(
      currentSlide === WHY_YOU_GET.length - 1
        ? WHY_YOU_GET.length - 1
        : currentSlide + 1,
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", setActivedHandler);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setActivedHandler);
    };
  }, [handleScroll]);

  return (
    <div className={classes.background}>
      <Products type={"office"} boxSelected={boxSelected}>
        <div className="mb-8 flex gap-2 overflow-hidden p-2 text-white">
          <button
            onClick={() => setBoxSelector("Full, Half, & Decaf")}
            className="h-20 w-20 overflow-hidden rounded-xl border-2 border-white bg-[#ece9d6] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="flex flex-col text-center text-xs font-semibold text-black">
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#ece9d6] py-[5px] text-xs font-semibold">
                  Full Caff,
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#e5ddc5] py-[4px] text-xs font-semibold">
                  Half Caff
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#d3ceb7] py-[5px] text-xs font-semibold">
                  & Decaf
                </span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Light, Medium & Decaf")}
            className="h-20 w-20 overflow-hidden rounded-xl border-2 border-white bg-[#a2775e] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="flex flex-col text-center text-xs font-semibold ">
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#a2775e] py-[5px] text-xs font-semibold">
                  Light,
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#804f34] py-[4px] text-xs font-semibold">
                  Medium &
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#ada895] py-[5px] text-xs font-semibold">
                  Decaf
                </span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Medium, Dark & Decaf")}
            className="h-20 w-20 overflow-hidden rounded-xl border-2 border-white bg-[#804f34] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="flex flex-col text-center text-xs font-semibold ">
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#804f34] py-[5px] text-xs font-semibold">
                  Medium,
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#422513] py-[4px] text-xs font-semibold">
                  Dark &
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#ada895] py-[5px] text-xs font-semibold">
                  Decaf
                </span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Light, Medium & Dark")}
            className="h-20 w-20 overflow-hidden rounded-xl border-2 border-white bg-[#a2775e] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div>
              <p className="flex flex-col text-center text-xs font-semibold ">
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#a2775e] py-[5px] text-xs font-semibold">
                  Light,
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#804f34] py-[4px] text-xs font-semibold">
                  Medium &
                </span>
                <span className="z-10 flex h-fit w-full items-center justify-center bg-[#412412] py-[5px] text-xs font-semibold">
                  Dark
                </span>
              </p>
            </div>
          </button>
          <button
            onClick={() => setBoxSelector("Medium & Dark")}
            className="h-20 w-20 overflow-hidden rounded-xl border-2 border-white bg-[#a1775e] p-0 outline outline-2 drop-shadow-lg transition-transform ease-out hover:-translate-y-1 focus:outline-black"
          >
            <div className="before:absolute  before:left-0 before:top-[50%] before:-z-10 before:aspect-square before:w-full before:bg-[#814f34] before:p-4 before:content-['']">
              <p className="font flex flex-col text-center text-xs leading-6">
                <span>Medium</span>
                <span>&</span>
                <span>Dark</span>
              </p>
            </div>
          </button>
        </div>

        <div className="mb-4">
          <select className="rounded-md border-2 border-[#dddedc] bg-[#f3f5e8] p-2 pr-60 transition-colors duration-200 ease-in-out focus:border-[#adadad]">
            <option>Delivery every 1 Weeks</option>
            <option>Delivery every 2 Weeks</option>
            <option selected>Delivery every 4 Weeks</option>
          </select>
        </div>
      </Products>

      {/* Navbar */}

      <div>
        <div ref={navbarRef} className="w-screen bg-transparent p-8"></div>
        <div
          className={`z-20 w-screen overflow-hidden bg-[#f7f0d3] p-6 ${fixedNavbar && !isScrollingUp && "fixed top-0"}`}
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
      </div>

      {/* Elements */}
      {/* Why Get Cometeer */}
      <Element name="why-get-cometeer">
        <div className="w-full overflow-hidden p-8">
          <h1 className="mb-8 text-3xl font-bold">
            Why you should get Cometeer for your office?
          </h1>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {WHY_YOU_GET.map((section, i) => (
              <div
                key={section.title}
                className="mt-10 min-w-full space-y-2 px-10 lg:mr-10 lg:min-w-[25%] lg:max-w-[25%] lg:px-0"
              >
                <div className="group relative w-full overflow-hidden rounded-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="aspect-square w-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>

          <div className="bottom-2 left-0 right-0 mt-8 flex items-center justify-between gap-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="rotate-180 rounded-full border border-[#a0a0a0]  p-3 active:opacity-50"
            >
              {arrow}
            </button>

            <div className="relative left-0 right-0 w-full">
              <div className="flex h-[2px] w-full items-center bg-[#2b2c2c] opacity-10"></div>

              {/* for mobile screen */}
              <div
                className={`absolute -top-[25%] h-[3px] w-[50%] bg-[#2b2c2c] transition-transform duration-300 ease-in `}
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
              ></div>
            </div>

            <button
              onClick={nextSlide}
              className="rounded-full border border-[#a0a0a0] p-3 active:opacity-50"
            >
              {arrow}
            </button>
          </div>
        </div>
      </Element>

      {/* Get in touch */}
      {/* Cometeer not complete this yet */}
      <Element name="">
        <div className="mt-10 flex flex-col-reverse gap-10 p-6 lg:flex-row lg:p-16">
          <div className="space-y-4 lg:w-1/2">
            <h1 className="text-4xl font-bold lg:flex lg:flex-col lg:text-5xl">
              <span>To learn more, </span>
              <span>get in touch.</span>
            </h1>
            <p>
              Join leading companies enjoying Cometeer to better their workplace
              culture and productivity.
            </p>
            <button className="group flex items-center justify-between gap-2 rounded-full bg-[#f5d577] hover:bg-black">
              <p className="px-8 py-4 text-xl font-semibold group-hover:text-white">
                Contact Us
              </p>
              <i className="relative mr-3 flex items-center overflow-hidden rounded-full bg-white p-2 text-black ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute -left-[20px] h-5 w-5  transition-transform duration-300  ease-in-out group-hover:translate-x-[27px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
                {/* hidden arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform duration-300  ease-in-out group-hover:translate-x-[100px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
                {/* arrow */}
              </i>
            </button>
          </div>

          <div className="lg:w-1/2">
            <img src={GetInTouch} alt="get-in-touch" className="rounded-2xl" />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default OfficeBox;
