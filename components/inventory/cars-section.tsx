import Image from "next/image";
import { Button } from "../button";
import { cars } from "@/lib/data";

export const CarsSection = () => {
  return (
    <section className="px-res py-10 text-typography flex flex-col items-center">
      <h2 className="font-semibold text-xl pb-5 text-center border-b-4 border-b-primary w-full max-w-[15rem]">
        Cars Inventory
      </h2>
      <div className="grid xl:grid-cols-2 mt-10 gap-5">
        {cars.map(({ id, name, price, description, image }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row bg-primary/5 p-5 rounded-2xl"
          >
            <div className="sm:border-r-2 flex-1 order-1 sm:-order-1">
              <div className="h-full flex flex-col gap-3 justify-between sm:mr-5">
                <h3 className="font-bold">{name}</h3>
                <p className="italic">{description}</p>
                <p>${price.toLocaleString("en-US")}</p>
                <Button variant="secondary" href={`/inventory/${id}`}>
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full h-full">
              <div className="h-full sm:ml-5 max-w-80 mx-auto">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
