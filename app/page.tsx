
'use client';

import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { HeroSectionWithNoiseBackground as Hero } from "@/components/Hero";

import { EmblaCarousel } from "@/components/EmblaCarousel";
import { CtaBack as CtaNoise } from "@/components/CtaNoise";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <BackgroundLines />
      </div>
      <div className="relative z-10">

        <Hero />
     


        {/* Texto introdutório do carrossel */}
        <div className="max-w-1xl mx-auto px-3 sm:px-4 lg:px-8 py-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center border border-white rounded-lg p-6">
            Olhe alguns de meus resultados do mês passado
          </h2>
        </div>

        <EmblaCarousel />
        <CtaNoise />
        <Profile />



    

   </div>
    </div>

  );
}