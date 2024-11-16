"use client";

import { useTranslation } from "@/contexts/translation-provider";

export const OurStorySection = () => {
  const { translate: t } = useTranslation();

  return (
    <section className="px-res py-10 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        {t("about.our-story.title")}
      </h2>
      <p className="pt-10 text-xl dev-leading-wide text-justify max-w-[40rem]">
        {t("about.our-story.content")}
      </p>
    </section>
  );
};
