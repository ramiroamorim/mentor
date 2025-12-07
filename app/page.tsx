
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { HeroSectionWithNoiseBackground } from "@/components/HeroSectionWithNoiseBackground";
import { BentoGrid } from "@/components/BentoGrid";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import TradingViewWidget from "@/components/TradingViewWidget";
import { CtaBack } from "@/components/CtaBack";





export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <BackgroundLines />
      </div>
      <div className="relative z-10">

        <HeroSectionWithNoiseBackground />
        <BentoGrid />
        <EmblaCarousel />
        <CtaBack />
        <TradingViewWidget />
   </div>
    </div>
  );
}