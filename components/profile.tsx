"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { sendTrackingEvent } from '@/lib/trackingUtils';

export function Profile() {
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
    <div className="w-full max-w-7xl mx-auto my-5 md:my-10 py-5 md:py-10 px-4 md:px-8">
      <div className="text-balance relative z-20 mx-auto mb-8 max-w-4xl text-center">
        <h2
          className={cn(
            "block text-3xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]",
            "bg-clip-text text-transparent pb-2"
          )}
        >
          Quem será seu mentor nesta jornada?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto px-1">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="profile-image">
            <Image
              src="/imagem-carro-placa.jpeg"
              alt="Carro"
              width={400}
              height={300}
              className="rounded-lg shadow-2xl w-full max-w-sm h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-base md:text-lg ">
            Ramiro Amorim é um jovem empresário que descobriu o mercado de infoprodutos globais no final do ano de 2023! Desde então sua vida mudou completamente.
            <br />
            Já faturou 4.8 Milhões de reais nos últimos meses com uma estratégia pouco conhecida sobre vendas de infoprodutos no tráfego direto multi moedas.
            <br />
            Em 2022 teve sua empresa totalmente falida e sem recursos para continuar no ramo de vendas e trocas de veículos usados.
            <br />
            Então conheceu o mercado de infoprodutos globais e resolveu apostar tudo que havia sobrado neste mercado...
            <br />
            Então em alguns meses conseguiu sair do absoluto zero e faturar milhões sem aparecer e agora quer compartilhar este conhecimento com pessoas dedicadas a conhecer este modelo de negócio.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button onClick={handleClick} className="rounded-lg bg-gradient-to-b from-red-600 to-red-700 px-10 py-2 text-md font-bold text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:from-red-700 hover:to-red-800 transition-all duration-200">
              AGENDAR MINHA REUNIÃO
            </button>
          </div>
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
         
        </div>
      )}
    </div>
  );
}
