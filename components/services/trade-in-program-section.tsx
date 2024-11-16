"use client";

import { useTranslation } from "@/contexts/translation-provider";
import Image from "next/image";

export const TradeInProgramSection = () => {
  const { translate: t } = useTranslation();

  return (
    <div className="bg-primary/5">
      <section className="px-res py-20 text-typography">
        <h2 className="font-semibold text-xl mb-5 lg:w-1/2 lg:ms-auto lg:ps-5">
          {t("services.trade-in-program.title")}
        </h2>
        <div className="flex flex-col lg:gap-10 lg:flex-row">
          <div className="flex-1 flex flex-col justify-center gap-5 text-2xl md:text-3xl lg:text-2xl xl:text-4xl border-t-8 border-y-primary py-5 lg:border-b-8 lg:order-2">
            <p className="dev-leading-wide">
              {t("services.trade-in-program.content")}
            </p>
          </div>
          <div className="flex-1 lg:order-1">
            <Image
              src={"/trade-in-program.jpg"}
              width={500}
              height={500}
              alt="cars"
              className="aspect-[1.4] object-cover w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
