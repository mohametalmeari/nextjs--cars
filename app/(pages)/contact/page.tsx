import { FormSection } from "@/components/contact/form-section";
import { LocationSection } from "@/components/contact/location-section";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection title="Contact Us" />
      <FormSection />
      <LocationSection />
    </main>
  );
}
