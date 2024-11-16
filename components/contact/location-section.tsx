"use client";

import { useTranslation } from "@/contexts/translation-provider";

export const LocationSection = () => {
  const { translate: t } = useTranslation();

  return (
    <section className="px-res pt-10 pb-28 -mb-20 text-typography flex flex-col items-center bg-primary/5">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        {t("contact.location.title")}
      </h2>
      <ul className="pt-10 text-xl dev-leading-wide text-justify">
        <li>
          <span className="font-semibold">{t("Address")}: </span>
          {t("contact.location.address")}
        </li>
        <li>
          <span className="font-semibold">{t("Phone")}: </span>
          123-456-7890
        </li>
        <li>
          <span className="font-semibold">{t("Email")}: </span>
          contact@example.com
        </li>
      </ul>
    </section>
  );
};
