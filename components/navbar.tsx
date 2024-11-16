"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { MdLanguage, MdOutlineClose } from "react-icons/md";
import { useTranslation } from "@/contexts/translation-provider";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { lang, setLang, translate: t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "EN" ? "ltr" : "rtl";
  }, [lang]);

  const toggle = () => setOpen(!open);

  const toggleLang = () => setLang(lang === "EN" ? "AR" : "EN");

  return (
    <nav
      className="text-white h-16 flex justify-between items-center px-res absolute right-0 left-0 top-0"
      style={lang === "AR" ? { flexDirection: "row-reverse" } : {}}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="RoadStar Motors" width={75} height={29} />
      </Link>

      <Button
        variant="small"
        className="ml-auto mr-3 md:order-1 md:fixed md:top-0 md:right-0 md:mt-5 md:mr-10 flex items-center gap-1"
        onClick={toggleLang}
      >
        <MdLanguage className="text-xl" />
        {lang === "EN" ? "AR" : "EN"}
      </Button>

      <Button variant="ghost" onClick={toggle} className="md:hidden">
        <HiMenuAlt3 className="text-2xl" />
      </Button>

      <ul
        className={`fixed bg-primary inset-0 transition-all-500 text-white flex flex-col 
                    items-center py-20 ${!open ? "translate-x-full" : ""}   
                    md:static md:flex-row md:translate-x-0 md:bg-transparent
                    md:py-0 gap-10 md:gap-3 lg:gap-5 text-2xl md:text-sm lg:text-lg
                    `}
      >
        {links.map(({ href, label }) => (
          <li key={`${href}`}>
            <Link
              href={href}
              onClick={toggle}
              className="hover:bg-white/10 transition-all-500 rounded-lg px-2 pb-1"
            >
              {t(label)}
            </Link>
          </li>
        ))}

        <Button
          variant="ghost"
          onClick={toggle}
          className="absolute top-0 right-0 m-5 hover:bg-white/10 md:hidden"
        >
          <MdOutlineClose className="text-2xl" />
        </Button>
      </ul>
    </nav>
  );
};
