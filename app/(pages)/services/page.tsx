import { HeroSection } from "@/components/hero-section";
import { MaintenanceServicesSection } from "@/components/services/maintenance-services-section";
import { TradeInProgramSection } from "@/components/services/trade-in-program-section";
import { VehicleFinancingSection } from "@/components/services/vehicle-financing-section";

export default function Page() {
  return (
    <main>
      <HeroSection title="Services" />
      <VehicleFinancingSection />
      <TradeInProgramSection />
      <MaintenanceServicesSection />
    </main>
  );
}
