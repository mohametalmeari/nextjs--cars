import Image from "next/image";
import { Button } from "../button";
import { IoCarSport } from "react-icons/io5";

export const HeroSection = () => {
  return (
    <section className="text-white h-[70vh] sm:h-screen">
      <Image
        src={"/home-banner.jpg"}
        width={1300}
        height={975}
        alt="car"
        className="absolute -z-50 inset-0 h-[70vh] w-full sm:h-screen object-cover object-[30%] md:object-[30%]"
      />
      <div className="pt-16 sm:pt-32 px-res">
        <div className="pt-12">
          <h1 className="text-4xl mb-12 sm:mb-20 font-bold sm:text-5xl lg:text-7xl sm:leading-[150%] lg:leading-[150%]">
            Drive Your Dreams <br /> Today!
          </h1>
          <h2 className="leading-[200%] font-semibold sm:text-2xl sm:leading-[200%] mb-12">
            Explore a wide range of cars
            <br />
            with unbeatable prices &
            <br />
            financing options.
          </h2>
          <Button variant="primary" className="flex items-center gap-3">
            Browse Cars
            <IoCarSport className="text-2xl" />
          </Button>
        </div>
      </div>
    </section>
  );
};
