import { AchievementsSection } from "@/components/about/achievements-section";
import { CoreValuesSection } from "@/components/about/core-values-section";
import { OurStorySection } from "@/components/about/our-story-section";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection title="About Us" />
      <OurStorySection />
      <CoreValuesSection />
      <AchievementsSection />
    </main>
  );
}
