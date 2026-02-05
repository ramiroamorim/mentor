"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sendTrackingEvent } from '@/lib/trackingUtils';

 
export function CtaBack() {
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
    <section className="relative z-20 mx-auto my-20 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-slate-800 to-gray-900 sm:rounded-3xl md:my-40 md:grid-cols-2 dark:from-neutral-900">
      <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:right-60"></div>
      <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:right-40"></div>
      <div className="absolute -top-px right-10 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:right-80"></div>
      <div
        className="bg-noise absolute inset-0 h-full w-full [mask-image:radial-gradient(#fff,transparent,75%)] opacity-10"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
      <div className="relative overflow-hidden px-6 sm:rounded-2xl md:px-8">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 overflow-hidden rounded-2xl select-none"
          style={{
            mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
          }}
        ></div>

        <div className="relative px-0 py-10 sm:px-8 sm:pt-20 sm:pb-10 lg:px-10">
          <h2 className="text-left text-2xl font-semibold tracking-[-0.015em] text-balance text-white md:text-3xl lg:text-5xl">
           Mas porque ganhar em outras moedas?
          
          </h2>
          <p className="mt-8 max-w-[26rem] text-left text-base/6 text-neutral-200">
            No cenario atual o Real vem diminuindo ao longo dos anos em quanto o Dólar e o Euro
            só sobe então proque nao ganahr em moeda estrangeira?
          
            
          </p>

    
        </div>
      </div>
      <div className="relative flex h-full max-h-[200px] w-full gap-4 overflow-hidden px-4 md:max-h-[400px]">
        <Image
          src="/envato-labs-image-edit.webp"
          alt="cta-1"
          width={250}
          height={400}
          className="mt-4 h-full rounded-lg object-contain md:mt-0 md:rounded-none"
        />
        <Image
          src="/euro-new.png"
          alt="cta-2"
          width={300}
          height={500}
          className="mt-10 h-full rounded-lg object-cover object-top"
        />
      </div>
      <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:right-60"></div>
      <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:right-40"></div>
      <div className="absolute right-10 -bottom-px z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:right-80"></div>

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
    </section>
  );
}
