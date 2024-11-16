"use client";

import { useTranslation } from "@/contexts/translation-provider";
import { testimonials } from "@/lib/translations";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const TestimonialsSection = () => {
  const { translate: t, lang } = useTranslation();

  const lang_ = lang as "EN" | "AR";

  return (
    <section className="px-res py-20 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        {t("home.testimonials.title")}
      </h2>
      <div className="pt-10 grid gap-6 dev-grid-cols-dynamic w-full">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col bg-black/80 px-5 py-10 rounded-2xl text-white"
          >
            <p className="italic mb-2">
              <FaQuoteLeft
                className="inline-block me-2 text-sm"
                style={lang === "AR" ? { transform: "scaleX(-1)" } : {}}
              />
              <span>{item[lang_].review}</span>
              <FaQuoteRight
                className="inline-block ms-2 text-sm"
                style={lang === "AR" ? { transform: "scaleX(-1)" } : {}}
              />
            </p>
            <h3 className="font-semibold mt-auto">{item[lang_].name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
