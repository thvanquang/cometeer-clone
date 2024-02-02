import React from "react";
import { checkSolid, fiveCoffeeBean } from "../../Assets/icons/icons";
import Spaceman from "../../Assets/Triptych/triptych-spaceman.png";

const REVIEWS = [
  {
    author: "Anne D.",
    avatar: Spaceman,
    verified: true,
    title: "Best mix",
    content: "Best mix",
  },
  {
    author: "Quinten P.",
    avatar: Spaceman,
    verified: true,
    title: " Never Tasted Pod Coffee So Good",
    content:
      "I can tell the roasting, brewing, and preserving of the coffee is top-notch. Even though the pricing works out to $2 - 2.50 per pod, it's premium quality. I tried adding the pod to 4-6oz of hot water and it tasted watered down. So I recommend using it in iced drinks. (Thanks James Hoffmann for the recommendation🤓)",
  },
  {
    author: "Samantha D.",
    avatar: Spaceman,
    verified: true,
    title: "Best Coffee Ever",
    content: "I love it!",
  },
  {
    author: "Megan H.",
    avatar: Spaceman,
    verified: true,
    title: "Very convenient way to enjoy",
    content: "Very convenient way to enjoy coffee. Highly recommend.",
  },
  {
    author: "Michele R.",
    avatar: Spaceman,
    verified: true,
    title: "nice mix",
    content:
      "A great selection of light-med-dark roasts. Perfect to sample various types and get an idea of what is available.",
  },
  {
    author: "Marilyn T.",
    avatar: Spaceman,
    verified: true,
    title: "Wonderful!",
    content: "Wonderful!",
  },
  {
    author: "Jake W.",
    avatar: Spaceman,
    verified: true,
    title: "Good deal",
    content: "Good deal",
  },
  {
    author: "Norma E.",
    avatar: Spaceman,
    verified: true,
    title: "Worth it",
    content: "So good!!",
  },
  {
    author: "Mami I.",
    avatar: Spaceman,
    verified: true,
    title: "love no waste",
    content: "it was so so good, beyond imagination",
  },
  {
    author: "Robyn V.",
    avatar: Spaceman,
    verified: true,
    title: "Love Cometeer coffee!",
    content: "Love Cometeer coffee!",
  },
];

const Reviews = () => {
  return (
    <div className="mt-8">
      <div className="left-0 right-0">
        {REVIEWS.map((review) => (
          <div
            key={review.author}
            className="border border-b-[#a0a0a0] py-8 last-of-type:border-b-0"
          >
            <div className="flex gap-2">
              <div className="relative flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-[#a0a0a0]">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-12 w-12"
                />
                <i className="absolute bottom-0 right-0 rounded-full bg-white text-green-500">
                  {checkSolid}
                </i>
              </div>

              <div>
                <h4 className="text-sm font-bold">{review.author}</h4>
                <p className="mb-2 text-sm text-[#a0a0a0]">
                  {review.verified ? "Verified Buyer" : " "}
                </p>
                <div>{fiveCoffeeBean}</div>
              </div>
            </div>

            <h2 className="text-lg font-bold">{review.title}</h2>
            <p className="mt-4">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
