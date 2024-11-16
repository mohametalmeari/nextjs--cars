"use client";

import translations from "@/lib/translations";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Cairo } from "next/font/google";

const fontAr = Cairo({
  variable: "--font-ar",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
});

interface Props {
  children: React.ReactNode;
}

type ContextType = {
  lang: string;
  setLang: (lang: string) => void;
  translate: (key: string, string?: boolean) => React.ReactNode | string;
};

const Context = createContext<ContextType | null>(null);

export const TranslationProvider = ({ children }: Props) => {
  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    setLang(localStorage?.getItem("lang") || "AR");
  }, []);

  if (!lang) return;

  const translate = (key: string, string?: boolean) => {
    const text = translations[key]?.[lang.toLowerCase()] || "404";

    if (string) return text;

    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Context.Provider value={{ lang, setLang, translate }}>
      <div className={`${lang === "AR" && fontAr.className} contents`}>
        {children}
      </div>
    </Context.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("Context must be used within TranslationProvider");
  }

  return context;
};
