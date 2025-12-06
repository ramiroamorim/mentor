"use client";

import { useState } from "react";
import FilloutForm from "./FilloutForm";
import { Button } from "./button";
import { sendTrackingEvent } from '@/lib/trackingUtils'; 

export function FilloutModalButton() {
  const [open, setOpen] = useState(false);

  
  const handleClick = () => {
    setOpen(true);
    
    sendTrackingEvent('ViewContent', {
      content_name: 'start_form',
      content_category: 'form-open',
      content_type: 'button-click',
      value: 1
    });
    
    console.log('track_form_open');
  };

  return (
    <>
      {/* Botão com o mesmo estilo que você já usa */}
      <Button
        onClick={handleClick} // ← agora funciona!
        variant="primary"
        className="w-full sm:w-auto sm:px-6 h-12 rounded-full flex items-center justify-center whitespace-nowrap"
      >
        Me aplicar a uma vaga!
      </Button>

      {/* Modal fullscreen com o formulário */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex bg-black/80 rounded-lg">
          {/* Botão de fechar */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-6 text-3xl text-white"
          >
            ✕
          </button>

          <div className="w-full h-full">
            <FilloutForm />
          </div>
        </div>
      )}
    </>
  );
}