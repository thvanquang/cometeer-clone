import React, { useState } from "react";

const ProductWhatYouGet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);

  return (
    <div className="w-full p-8">
      <h1 className="mb-8 text-3xl font-bold">What's in Your Order</h1>

      <div className="relative w-full overflow-hidden rounded-2xl border border-[#a0a0a0] bg-[#f7f0d3] px-4 py-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="min-w-full max-w-full">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">
                32 Frozen Capsules Ship on Dry Ice to Your Door
              </h1>
              <p>
                Coffee brewed from the best beans sourced from award winning
                Roasters.
              </p>
            </div>

            <div>
              <video
                playsInline={true}
                autoPlay="true"
                loop={false}
                muted="muted"
                preload="metadata"
              >
                <source
                  src={
                    "https://cdn.shopify.com/videos/c/o/v/0bec71a21b224b50b8cacb699be661df.webm"
                  }
                  type="video/webm"
                ></source>
              </video>
            </div>
          </div>

          <div className="min-w-full">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">
                Transfer Your Little Frozen Pucks of Deliciousness to the
                Freezer
              </h1>
              <p>
                Cometeer preserves freshly brewed peak flavor for months and
                months and months.
              </p>
            </div>

            <div>
              <video
                playsInline={true}
                autoPlay="true"
                loop={false}
                muted="muted"
                preload="metadata"
              >
                <source
                  src={
                    "https://cdn.shopify.com/videos/c/o/v/ddf830f450d44cc39a322bb84ecdb072.webm"
                  }
                  type="video/webm"
                ></source>
              </video>
            </div>
          </div>

          <div className="min-w-full">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">
                Make Hot or Iced Coffees and Lattes in Seconds
              </h1>
              <p>No machine required - just melt and enjoy the perfect cup.</p>
            </div>

            <div>
              <video
                playsInline={true}
                autoPlay="true"
                loop={false}
                muted="muted"
                preload="metadata"
              >
                <source
                  src={
                    "https://cdn.shopify.com/videos/c/o/v/8c192d1221da4b4d9b53d99c2bdaccba.webm"
                  }
                  type="video/webm"
                ></source>
              </video>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-around">
          <button
            onClick={prevSlide}
            className="rounded-full bg-slate-600 p-2 active:bg-slate-300"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-slate-600 p-2 active:bg-slate-300"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductWhatYouGet;
