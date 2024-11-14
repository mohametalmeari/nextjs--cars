import Image from "next/image";

interface Props {
  title: string;
}

export const HeroSection = ({ title }: Props) => {
  return (
    <section className="text-white h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] mb-10 flex flex-col justify-center">
      <Image
        src={"/banner.jpg"}
        width={1300}
        height={975}
        alt="car"
        className="absolute -z-50 inset-0 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-cover object-[30%] md:object-[30%]"
      />
      <div className="pt-16 px-res">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl sm:leading-[150%] lg:leading-[150%]">
          {title}
        </h1>
      </div>
    </section>
  );
};
