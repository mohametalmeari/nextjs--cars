"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const FeaturedCarsSection = () => {
  return (
    <section className="px-res py-20 text-typography">
      <h2 className="font-semibold text-xl mb-5">Featured Cars</h2>
      <div className="flex flex-col lg:gap-10 lg:flex-row">
        <div className="flex-1 flex flex-col justify-center gap-5 lg:mb-8 text-2xl md:text-3xl lg:text-2xl xl:text-4xl border-t-8 border-y-primary py-5 lg:border-b-8">
          <p className="dev-leading-wide">
            Discover our top-selling models handpicked just for you.
          </p>
          <p className="dev-leading-wide">
            Premium quality, guaranteed satisfaction!
          </p>
        </div>
        <Slider />
      </div>
    </section>
  );
};

const Cars = [
  {
    src: "https://www.fleetalliance.co.uk/wp-content/uploads/2024/04/bmw-ix2-1024x724.jpg",
  },
  {
    src: "https://cfx-wp-images.imgix.net/2022/05/2022-Genesis-G80.jpeg?auto=compress%2Cformat&fit=scale&h=683&ixlib=php-3.3.1&w=1024&wpsize=large&s=be8801faff898a8bed565d8ada2d6678",
  },
];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev < Cars.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChangeIndex = (value: number) => {
    setIndex(value);
  };

  return (
    <div className="flex-1">
      <Image
        src={Cars[index].src}
        width={500}
        height={500}
        alt="car"
        className="aspect-[1.4] object-cover w-full"
      />

      <div className="flex gap-2 justify-center p-2">
        {Cars.map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full w-4 border-[0.175rem] border-primary transition-all-500 cursor-pointer ${
              index === i ? "bg-primary" : ""
            }`}
            onClick={() => handleChangeIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
