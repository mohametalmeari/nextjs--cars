import { HeroSection } from "@/components/hero-section";
import { CarDetails } from "@/components/inventory/car-details";

interface Props {
  params: { id: string };
}

export default function Page({ params: { id } }: Props) {
  return (
    <main>
      <HeroSection title="Car Details" />
      <CarDetails id={id} />
    </main>
  );
}
