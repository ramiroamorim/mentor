"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { sendTrackingEvent } from '@/lib/trackingUtils';
export function HeroSectionWithNoiseBackground() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    sendTrackingEvent('ViewContent', {
      content_name: 'start_form',
      content_category: 'form-open',
      content_type: 'button-click',
      value: 1
    });
  };

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-white px-4 py-19 md:py-35 dark:bg-black">
    

      <div className="relative z-4 mx-auto w-full max-w-3xl">
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl lg:text-5xl dark:text-neutral-100"
        >
          Uma das maiores oportunidades do tráfego direto! <br /> Tráfego inteligente, e branding para seus infoprodutos...
        </motion.h2>
     

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col items-center gap-2 md:flex-row"
        >
          <div className="mt-12 flex w-full flex-col justify-center gap-6 sm:flex-row">

            <button onClick={handleClick} className="rounded-md bg-gradient-to-b from-red-600 to-red-700 px-3 py-2 text-base font-bold text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:from-red-700 hover:to-red-800 transition-all duration-200">
              AGENDAR MINHA REUNIÃO
            </button>
          </div>
        </motion.div>

        
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] flex bg-black/80 rounded-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-6 text-3xl text-white z-[10000]"
          >
            ✕
          </button>
         
        </div>
      )}
    </div>
  );
}




