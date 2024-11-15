"use client";

import Image from "next/image";

export const VehicleFinancingSection = () => {
  return (
    <section className="px-res py-20 text-typography">
      <h2 className="font-semibold text-xl mb-5">Vehicle Financing</h2>
      <div className="flex flex-col lg:gap-10 lg:flex-row">
        <div className="flex-1 flex flex-col justify-center gap-5 text-2xl md:text-3xl lg:text-2xl xl:text-4xl border-t-8 border-y-primary py-5 lg:border-b-8">
          <p className="dev-leading-wide">
            With flexible loan options, owning your dream car is easier than
            ever. Apply online today!
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={"/vehicle-financing.jpg"}
            width={500}
            height={500}
            alt="cars"
            className="aspect-[1.4] object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};
