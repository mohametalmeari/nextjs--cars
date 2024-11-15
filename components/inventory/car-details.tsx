import { getCarById } from "@/lib/actions";
import Image from "next/image";

interface Props {
  id: string;
}

export const CarDetails = ({ id }: Props) => {
  const car = getCarById(id);

  if (!car) {
    return (
      <section className="px-res py-10 text-typography flex flex-col items-center">
        <p className="text-2xl font-semibold capitalize">Car not found</p>
      </section>
    );
  }

  return (
    <section className="px-res py-10 text-typography">
      <h1 className="font-bold text-2xl mb-10">{car.name}</h1>
      <div className="xl:flex">
        <div className="xl:order-1 flex-1">
          <Image
            src={car.image}
            width={1000}
            height={600}
            alt={car.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col text-xl gap-6 leading-9">
          <div>
            <h2 className="font-semibold">Overview:</h2>
            <p className="mx-8">{car.overview}</p>
          </div>
          <div>
            <h2 className="font-semibold">Specifications:</h2>
            <ul className="mx-8">
              {car.specifications?.map(({ key, value }) => (
                <li key={key}>
                  <span className="italic">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Pricing and Financing:</h2>
            <p className="mx-8">
              Starting at ${car.price.toLocaleString("en-US")} or $
              {Math.floor((car.price * 1.2) / 48)}/month with approved credit
              for 48 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
