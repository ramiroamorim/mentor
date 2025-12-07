
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

        {/* Texto introdutório do carrossel */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center border border-white rounded-lg p-6">
            Olhe alguns de meus resultados do mês passado
          </h2>
        </div>

        <EmblaCarousel />
        <CtaBack />
        <TradingViewWidget />
   </div>
    </div>
  );
}