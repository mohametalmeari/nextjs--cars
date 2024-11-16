"use client";

import Image from "next/image";
import { Button } from "../button";
import { IoCarSport } from "react-icons/io5";
import { useTranslation } from "@/contexts/translation-provider";

export const HeroSection = () => {
  const { translate: t, lang } = useTranslation();

  return (
    <section className="text-white h-[70vh] sm:h-screen mb-20">
      <Image
        src={"/home-banner.jpg"}
        width={1300}
        height={975}
        alt="car"
        className="absolute -z-50 inset-0 h-[70vh] w-full sm:h-screen object-cover object-[30%] md:object-[30%]"
        style={lang === "AR" ? { transform: "scaleX(-1)" } : {}}
      />
      <div className="pt-16 sm:pt-32 px-res">
        <div className="pt-12 flex flex-col items-start gap-12">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl leading-[150%] sm:leading-[150%] lg:leading-[150%]">
            {t("home.hero.title")}
          </h1>
          <h2 className="leading-[200%] font-semibold sm:text-2xl sm:leading-[200%]">
            {t("home.hero.subtitle")}
          </h2>
          <Button
            variant="primary"
            className="flex items-center gap-3"
            href="inventory"
          >
            {t("home.hero.button")}
            <IoCarSport className="text-2xl" />
          </Button>
        </div>
      </div>
    </section>
  );
};
