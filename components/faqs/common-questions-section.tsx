"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const questions = [
  {
    question: "What financing options do you offer?",
    answer:
      "We offer flexible financing plans with competitive interest rates.",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Yes, we’ll provide a fair market value for your trade-in.",
  },
  {
    question: "Are the cars certified?",
    answer:
      "All our vehicles undergo a rigorous inspection process to ensure quality.",
  },
];

export const CommonQuestionsSection = () => {
  const [index, setIndex] = useState<null | number>(null);

  const handleChangeIndex = (value: number) => {
    setIndex((prev) => (value === prev ? null : value));
  };

  return (
    <section className="px-res py-10 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        Common Questions
      </h2>
      <div className="w-full mt-10 text-xl">
        {questions.map(({ question, answer }, i) => (
          <div key={i}>
            <div
              className="bg-black/80 border-t-2 p-5 text-white cursor-pointer flex items-center justify-between"
              onClick={() => handleChangeIndex(i)}
            >
              {question}
              <IoIosArrowForward
                className={`transition-all-500 ${
                  index === i ? "rotate-90" : ""
                }`}
              />
            </div>
            <div
              className={`flex items-center px-5 border-2 border-black/80 
                             transition-all-500 overflow-hidden 
                             ${index === i ? "h-20" : "h-0"}`}
            >
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
