import { FrequentlyAskedQuestions } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { SpotlightLogoCloud } from "@/components/logos-cloud";
import { ContactFormGridWithDetails } from "@/components/contact-form";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { HeroSectionWithNoiseBackground } from "@/components/HeroSectionWithNoiseBackground";




export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <BackgroundLines />
      </div>
      <div className="relative z-10">
    
        <HeroSectionWithNoiseBackground />
        <Hero />
        <SpotlightLogoCloud />
        <Features />
        <FrequentlyAskedQuestions />
        <ContactFormGridWithDetails />
        <MacbookScroll />
      </div>
    </div>
  );
}