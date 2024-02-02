import React, { useState } from "react";
import { plus } from "../../Assets/icons/icons";

const FAQS = [
  {
    q: "What happens if the capsules melt?",
    a: "Capsules can be refrozen if not used immediately. Liquid capsules maintain peak flavor for up to 24 hours at room temperature or 3 days in the refrigerator. That's why Cometeer is great for on the go. Pro tip: we're TSA approved!",
  },
  {
    q: "How sustainable is it?",
    a: "We created a curbside-recyclable aluminum capsule, and didn't stop there — all of our packaging and shipping materials are recyclable. And, because we deal with the grounds on our end — by composting them — the capsules are easy to just drop in the recycling when you're done with them. We also completely eliminate waste from beans or ground coffee going stale on-shelf and optimize the yield of each bean (so nothing is wasted from poor brewing).",
  },
  {
    q: "Is this instant or freeze-dried coffee?",
    a: "No. It's coffee in its purest form, carefully brewed at 10x strength and then frozen at the peak of flavor. Instant coffee is regular coffee that's been dehydrated, removing most of the flavor and aroma compounds that make coffee taste so delicious and complex.",
  },
  {
    q: "What's with the name?",
    a: "Comets are frozen, forward-moving, and impactful. Just like us.",
  },
];

const FAQs = () => {
  const [questionClicked, setQuestionClicked] = useState(NaN);

  const clickHandler = (i) => {
    if (questionClicked === i) {
      return setQuestionClicked(NaN);
    }

    setQuestionClicked(i);
  };

  return (
    <div className="px-6 py-14">
      <h1 className="text-4xl font-bold">FAQs</h1>

      <div className="mt-8">
        {FAQS.map((faq, i) => (
          <div className="mt-2 first-of-type:mt-0">
            <div
              onClick={() => clickHandler(i)}
              className="flex items-center justify-between rounded-lg border border-[#a0a0a0] bg-[#f7f0d3] p-4 lg:py-6"
            >
              <p className="text-xl">{faq.q}</p>
              <i>{plus}</i>
            </div>
            <div
              className={`mt-3 rounded-lg bg-[#633922] px-4 py-8 transition duration-500 ${questionClicked === i ? "max-h-fit" : "hidden"}`}
              // style={{
              //   transition:
              //     "max-height .5s ease-in-out, opacity .2s ease-in-out",
              // }}
            >
              <p className="text-xl text-[#f7f0d3] ">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
