import React from 'react';
import { TIMELINE_STEPS } from '../data/budgetData';

export const ProcessAndPreparation: React.FC = () => {
  return (
    <section id="proceso" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Metodología & Cronograma</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Proceso de trabajo
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            El trabajo se organiza en un flujo previsible para que tu equipo conozca en todo momento el estado de los guiones, los diseños y las fechas de lanzamiento.
          </p>
        </div>

        {/* Featured Note with Editorial Tape: 15 Días de Preparación Inicial */}
        <div className="mb-16 max-w-4xl">
          <div className="editorial-tape p-6 md:p-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#16352A]">
                Criterio Clave de Inicio
              </span>
              <span className="text-xs text-[#16352A]/80 font-medium">Sin costo inicial adicional</span>
            </div>

            <p className="editorial-quote">
              “Contemplamos 15 días de preparación inicial previos al mes de publicaciones, a partir de la recepción del pago del 50% y de los materiales de la inmobiliaria.”
            </p>

            <p className="text-sm text-[#475569] font-['Inter'] leading-relaxed pt-1">
              Esta ventana de 15 días permite diagnosticar las plataformas, optimizar el perfil, redactar los guiones estratégicos, coordinar la filmación y diseñar las primeras piezas sin improvisaciones ni retrasos en el calendario.
            </p>
          </div>
        </div>

        {/* Numbered Editorial Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className={`p-6 border flex flex-col justify-between ${
                step.isPreparation
                  ? 'bg-[#FAF8F5] border-[#16352A]/30'
                  : 'bg-white border-[rgba(22,53,42,0.08)]'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[rgba(22,53,42,0.08)] pb-3">
                  <span className="font-playfair text-3xl font-normal text-[#16352A] tabular-nums">
                    {step.step}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#16352A]/70">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="mt-4 font-playfair text-lg font-medium text-[#16352A] leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs md:text-sm text-[#475569] leading-relaxed font-['Inter']">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Publications tactile preview */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF8F5] border border-[rgba(22,53,42,0.10)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 aspect-[4/3] overflow-hidden border border-[rgba(22,53,42,0.08)]">
              <img
                src="/src/assets/images/property_interior_living_detail_1793659765124.jpg"
                alt="Detalle arquitectónico de sala de estar en residencia de lujo con muros de piedra caliza y vistas a la terraza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[8%]"
              />
            </div>
            <div className="md:col-span-8 space-y-3">
              <span className="editorial-overline">Entrega & Ajustes</span>
              <h3 className="font-playfair text-2xl font-medium text-[#16352A]">
                Una ronda consolidada de ajustes por entrega mensual.
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed font-['Inter']">
                Para garantizar la agilidad del calendario de publicación y la excelencia editorial, la inmobiliaria recibe la grilla completa con antelación y realiza una devolución unificada de observaciones. Los carruseles incluyen hasta 6 placas y los reels hasta 60 segundos con edición estándar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
