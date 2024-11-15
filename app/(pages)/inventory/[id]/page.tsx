import { HeroSection } from "@/components/hero-section";
import { CarDetails } from "@/components/inventory/car-details";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <HeroSection title="Car Details" />
      <CarDetails id={id} />
    </main>
  );
}
