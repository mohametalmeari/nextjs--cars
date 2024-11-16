"use client";

import { useTranslation } from "@/contexts/translation-provider";
import Image from "next/image";
import Link from "next/link";
import { LuCopyright } from "react-icons/lu";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];

export const Footer = () => {
  const { translate: t } = useTranslation();

  return (
    <footer className="bg-primary mt-20 px-res py-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 text-white">
        <div className="flex-[2] lg:flex-[1]">
          <Image src="/logo.svg" alt="RoadStar Motors" width={75} height={29} />
          <p className="my-5">{t("footer.description")}</p>
        </div>
        <div className="flex flex-col gap-2 flex-[1]">
          <h2 className="font-semibold">{t("Quick Links")}</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:underline">
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 flex-[2]">
          <h2 className="font-semibold">{t("Contact Us")}</h2>
          <ul>
            <li>
              {t("Address")}: {t("contact.location.address")}
            </li>
            <li>{t("Phone")}: 123-456-7890</li>
            <li>{t("Email")}: contact@example.com</li>
            <li>
              {t("Hours")}: {t("footer.working-hours")}
            </li>
          </ul>
        </div>
      </div>
      <p
        className="pt-20 text-white flex items-center gap-2 justify-center"
        style={{ direction: "ltr" }}
      >
        <LuCopyright /> {new Date().getFullYear()} RoadStar Motors. All rights
        reserved.
      </p>
    </footer>
  );
};
