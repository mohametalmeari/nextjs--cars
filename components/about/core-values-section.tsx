"use client";

import { useTranslation } from "@/contexts/translation-provider";

export const CoreValuesSection = () => {
  const { translate: t } = useTranslation();

  return (
    <section className="px-res py-10 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        {t("about.core-values.title")}
      </h2>
      <p className="pt-10 text-xl dev-leading-wide text-justify w-full max-w-[40rem]">
        <span className="font-bold">{t("about.core-values.value-point1")}</span>
        {t("about.core-values.content1")}
        <br />
        <br />
        <span className="font-bold">{t("about.core-values.value-point2")}</span>
        {t("about.core-values.content2")}
      </p>
    </section>
  );
};
