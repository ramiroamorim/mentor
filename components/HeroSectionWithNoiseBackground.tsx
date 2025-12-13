"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import FilloutForm from "./FilloutForm";
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
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-white px-5 py-20 md:py-40 dark:bg-black">
      <Background />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-5xl font-bold tracking-tight text-neutral-800 md:text-3xl lg:text-5xl dark:text-neutral-100"
        >
          Uma das maiores oportunidades do tráfego direto! <br /> Tráfego inteligente, e branding para seus infoprodutos...
        </motion.h2>
     

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col items-center gap-4 md:flex-row"
        >
          <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row">

            <button onClick={handleClick} className="rounded-lg bg-gradient-to-b from-red-600 to-red-700 px-6 py-3 text-base font-medium text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:from-red-700 hover:to-red-800 transition-all duration-200">
              AGENDAR MINHA REUNIÃO
            </button>
          </div>
        </motion.div>

        <div className="z-40 mt-12 flex w-full justify-center bg-white dark:bg-black">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="relative w-full overflow-hidden rounded-xl shadow-2xl [mask-image:linear-gradient(to_bottom,white,white_40%,transparent)]"
          >
            <img
              src="/images/dash-panel.webp"
              alt="Product screenshot"
              className="h-auto w-full object-cover"
              width={728}
              height={344}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
          </motion.div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] flex bg-black/80 rounded-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-6 text-3xl text-white z-[10000]"
          >
            ✕
          </button>
          <div className="w-full h-full">
            <FilloutForm />
          </div>
        </div>
      )}
    </div>
  );
}

const Badge = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative mx-auto mb-6 flex w-fit items-center justify-center overflow-hidden rounded-full p-px"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-transparent to-blue-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: "300px", height: "20px" }}
      />
      <div className="relative z-10 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
        {text}
      </div>
    </motion.div>
  );
};

const Background = () => {
  const [strips, setStrips] = useState<number[]>([]);
  useEffect(() => {
    const calculateStrips = () => {
      const viewportWidth = window.innerWidth;
      const stripWidth = 80;
      const numberOfStrips = Math.ceil(viewportWidth / stripWidth);
      setStrips(Array.from({ length: numberOfStrips }, (_, i) => i));
    };
    calculateStrips();
    window.addEventListener("resize", calculateStrips);
    return () => window.removeEventListener("resize", calculateStrips);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0 flex [mask-image:radial-gradient(circle_at_center,white_0%,white_30%,transparent_70%)]"
    >
      <Noise />
      {strips.map((index) => (
        <div
          key={index}
          className="h-full w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-400)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"
        />
      ))}
    </motion.div>
  );
};

const Noise = () => {
  return (
    <>
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: "url('/images/impossivel.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
    </>
  );
};
