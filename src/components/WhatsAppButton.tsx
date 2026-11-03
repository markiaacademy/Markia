import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5491131936613';
  const message = encodeURIComponent('Hola MARKIA, vengo desde la web de presupuestos y me gustaría realizar una consulta.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#16352A] text-[#FAF8F5] rounded-full shadow-lg border border-[#E8D0A0]/40 hover:bg-black hover:border-[#E8D0A0] transition-all hover:scale-110 active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#16352A] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-bold py-2 px-3 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#E8D0A0]/30 font-['Inter'] shadow-xl">
        Consultas Directas
      </span>
    </a>
  );
};
