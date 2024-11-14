import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mark T.",
    review:
      "Buying a car has never been this easy. The staff was incredibly helpful!",
  },
  {
    name: "Jane D.",
    review:
      "I bought my first car here, and the experience was fantastic. Highly recommended!",
  },
  {
    name: "Sarah L",
    review:
      "IAmazing service! Found the perfect car within my budget—highly recommend!",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="px-res py-20 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        Testimonials
      </h2>
      <div className="pt-10 grid gap-6 dev-grid-cols-dynamic w-full">
        {testimonials.map(({ name, review }, i) => (
          <div
            key={i}
            className="flex flex-col bg-black/80 px-5 py-10 rounded-2xl text-white"
          >
            <p className="italic mb-2">
              <FaQuoteLeft className="inline-block mr-2 text-sm" />
              <span>{review}</span>
              <FaQuoteRight className="inline-block ml-2 text-sm" />
            </p>
            <h3 className="font-semibold mt-auto">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
