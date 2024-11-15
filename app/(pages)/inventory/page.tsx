import { HeroSection } from "@/components/hero-section";
import { CarsSection } from "@/components/inventory/cars-section";

export default function Page() {
  return (
    <main>
      <HeroSection title="Inventory" />
      <CarsSection />
    </main>
  );
}
