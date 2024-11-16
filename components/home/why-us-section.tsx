"use client";

import { useTranslation } from "@/contexts/translation-provider";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const WhyUsSection = () => {
  const { translate: t } = useTranslation();

  const list = [
    t("home.why-us.list1"),
    t("home.why-us.list2"),
    t("home.why-us.list3"),
    t("home.why-us.list4"),
  ];

  return (
    <div className="bg-primary/5">
      <section className="px-res py-20 text-typography">
        <h2 className="font-semibold text-xl mb-5 lg:w-1/2 lg:ms-auto lg:ps-5">
          {t("home.why-us.title")}
        </h2>
        <div className="flex flex-col lg:gap-10 lg:flex-row">
          <div className="flex-1 flex flex-col justify-center gap-5 text-xl xl:text-2xl border-t-8 border-y-primary py-5 lg:border-b-8 lg:order-2">
            {list.map((text, index) => (
              <p
                key={index}
                className="dev-leading-wide flex items-center gap-4"
              >
                <FaCheck />
                {text}
              </p>
            ))}
          </div>
          <div className="flex-1 lg:order-1">
            <Image
              src={"/why-choose-us.jpg"}
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
