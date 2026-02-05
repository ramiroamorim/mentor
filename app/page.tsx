
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
        <CtaNoise />
        <EmblaCarousel />
        <Profile />



    

   </div>
    </div>

  );
}