import { cars } from "./data";

export const getCarById = (id: string) => {
  return cars.find((car) => car.id === id);
};
