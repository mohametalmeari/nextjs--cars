"use client";

import { useState } from "react";
import { Button } from "../button";
import { RiMailSendLine } from "react-icons/ri";
import { useTranslation } from "@/contexts/translation-provider";

export const FormSection = () => {
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const { translate: t } = useTranslation();

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    setSent(false);
    setMissingFields([]);
    if (!formData.name || !formData.email || !formData.message) {
      setMissingFields(
        Object.entries(formData)
          .filter(([, value]) => !value)
          .map(([key]) => key)
      );
      return;
    }

    console.log({ formData });
    setSent(true);
  };

  const handleChange = ({ target: { name } }: { target: { name: string } }) => {
    if (!missingFields.includes(name)) return;
    setMissingFields((prev) => prev.filter((field) => field !== name));
  };

  return (
    <section className="px-res py-10 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        {t("contact.form.title")}
      </h2>
      <form className="flex flex-col w-full gap-5 pt-10" onSubmit={handleSend}>
        <div className="contents md:flex md:gap-5">
          <input
            type="text"
            name="name"
            placeholder={t("Name", true) as string}
            className="md:flex-1"
            style={missingFields.includes("name") ? { borderColor: "red" } : {}}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("Email", true) as string}
            className="md:flex-1"
            style={
              missingFields.includes("email") ? { borderColor: "red" } : {}
            }
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          className="min-h-40"
          placeholder={t("Message", true) as string}
          style={
            missingFields.includes("message") ? { borderColor: "red" } : {}
          }
          onChange={handleChange}
        />
        <div className="contents md:flex md:items-center md:gap-5">
          <Button
            variant="secondary"
            className="md:w-fit px-8 uppercase flex items-center justify-center gap-3"
          >
            {t("Send")}
            <RiMailSendLine />
          </Button>
          {missingFields.length > 0 && (
            <p className="text-red-600 italic">Please fill in all fields</p>
          )}
          {sent && (
            <p className="text-green-600 italic">
              Your message has been sent successfully
            </p>
          )}
        </div>
      </form>
    </section>
  );
};
