import React from 'react';
import { CONTRACT_CONDITIONS } from '../data/budgetData';

export const Conditions: React.FC = () => {
  return (
    <section id="como-trabajamos" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Pautas de Colaboración</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Cómo trabajamos
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Criterios claros que protegen la calidad de la entrega, los tiempos del equipo y la previsibilidad financiera de tu inmobiliaria.
          </p>
        </div>

        {/* Conditions 2-column editorial grid */}
        <div className="border border-[rgba(22,53,42,0.12)] bg-white divide-y divide-[rgba(22,53,42,0.08)]">
          <div className="p-6 bg-[#FAF8F5] border-b border-[rgba(22,53,42,0.10)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#16352A]">
              Criterios operativos del servicio acordado
            </span>
            <span className="text-xs text-[#475569]">
              Sin costos imprevistos ni cargos de alta inventados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(22,53,42,0.08)]">
            {/* Column 1 */}
            <div className="p-6 md:p-8 space-y-4">
              {CONTRACT_CONDITIONS.slice(0, 10).map((condition, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#475569] leading-relaxed font-['Inter']">
                  <span className="font-playfair font-normal text-xs text-[#16352A] tabular-nums shrink-0 pt-0.5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{condition}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="p-6 md:p-8 space-y-4">
              {CONTRACT_CONDITIONS.slice(10).map((condition, idx) => (
                <div key={idx + 10} className="flex items-start gap-3 text-xs md:text-sm text-[#475569] leading-relaxed font-['Inter']">
                  <span className="font-playfair font-normal text-xs text-[#16352A] tabular-nums shrink-0 pt-0.5">
                    {String(idx + 11).padStart(2, '0')}.
                  </span>
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#FAF8F5] text-xs text-[#475569] text-center border-t border-[rgba(22,53,42,0.08)]">
            El servicio de MARKIA se enfoca en la construcción de marca, calidad visual y arquitectura de contenidos; no constituye garantía de cantidad específica de captaciones o ventas.
          </div>
        </div>
      </div>
    </section>
  );
};
