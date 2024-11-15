import Image from "next/image";
import { Button } from "../button";

const cars = [
  {
    id: "car_001",
    name: "2024 Toyota Camry XSE",
    price: 30000,
    description: "Stylish, fuel-efficient sedan with advanced safety features.",
    image:
      "https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dwc5c73b64/images/model/Camry/360/reservoir-blue/23_Camry_XSE_ReservoirBlue_4.webp",
  },
  {
    id: "car_002",
    name: "2023 Honda Accord EX",
    price: 28500,
    description:
      "Elegant midsize sedan with a spacious interior and exceptional reliability.",
    image:
      "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023HOC011931470_01_1280_WX.png",
  },
  {
    id: "car_003",
    name: "2024 Tesla Model 3 Long Range",
    price: 47000,
    description:
      "Electric sedan with impressive range, modern design, and cutting-edge technology.",
    image:
      "https://platform.cstatic-images.com/in/v2/stock_photos/78196678-1635-4c42-8601-73cc6b24b8eb/0d8d466f-dd46-4770-825c-7832d2e9121b.png",
  },
  {
    id: "car_004",
    name: "2023 BMW X5 xDrive40i",
    price: 61200,
    description:
      "Luxurious SUV offering a blend of performance, comfort, and innovation.",
    image:
      "https://orag-vehicle-images.s3.us-west-2.amazonaws.com/2023/BMW/X5/2023BMS190017_1280_01.png",
  },
  {
    id: "car_005",
    name: "2024 Ford Mustang GT",
    price: 41000,
    description:
      "Iconic sports car delivering thrilling performance and bold styling.",
    image:
      "https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=439075%2Ffront34%2Flg%2Fffe266",
  },
  {
    id: "car_006",
    name: "2023 Audi Q5 Premium",
    price: 45000,
    description:
      "Sophisticated compact SUV with a comfortable ride and cutting-edge features.",
    image:
      "https://platform.cstatic-images.com/in/v2/stock_photos/c6b2851f-882c-49f0-a2af-5460bd377f27/ac726ccd-67c6-4417-ad83-fe671ffecc1a.png",
  },
];

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
