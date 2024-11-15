import { CommonQuestionsSection } from "@/components/faqs/common-questions-section";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection title="FAQs" />
      <CommonQuestionsSection />
    </main>
  );
}
