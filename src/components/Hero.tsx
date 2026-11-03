import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Overline with Arena 8px dot */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full bg-[#E8D0A0] shrink-0"
                aria-hidden="true"
              />
              <span className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#16352A]/80 font-['Inter']">
                Comunicación y presencia digital para inmobiliarias
              </span>
            </div>

            {/* Playfair Display Headline */}
            <h1 className="hero-title text-[#16352A] font-medium text-balance">
              Estrategia digital integral <br className="hidden md:block" /> para inmobiliarias.
            </h1>

            {/* Inter Body Copy */}
            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#475569] font-['Inter'] max-w-2xl">
              Diseñamos y gestionamos un sistema de comunicación que conecta estrategia, identidad y contenido.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[15px] font-medium tracking-[-0.01em] text-[#FAF8F5] transition-colors hover:border-[#000000] hover:bg-[#000000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A]"
              >
                <span>Conocer los planes</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#E8D0A0]" />
              </a>

              <a
                href="#diseno-web"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-[rgba(22,53,42,0.3)] bg-transparent px-6 py-3.5 font-['Inter'] text-[15px] font-medium tracking-[-0.01em] text-[#16352A] transition-colors hover:border-[#16352A] hover:bg-[rgba(22,53,42,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A]"
              >
                <span>Explorar soluciones web</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#16352A]/60" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative border border-[rgba(22,53,42,0.10)] bg-white p-2 shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-[#FAF8F5]">
                <img
                  src="/images/hero_luxury_property_architecture_1793659764651.jpg"
                  alt="Propiedad residencial contemporánea de alto estándar con arquitectura en piedra travertino y piscina"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="px-3 pt-3 pb-2 flex items-center justify-between text-xs text-[#475569] font-['Inter']">
                <span className="font-medium text-[#16352A]">MARKIA Estudio</span>
                <span className="text-[11px] text-[#475569]/80">Estrategia digital inmobiliaria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structural 4-metric strip below hero */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[rgba(22,53,42,0.12)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#16352A]/70">Inversión mensual</span>
              <p className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A] tabular-nums">USD 900 — 1.600</p>
              <p className="text-xs text-[#475569]">Esquema formal 50% al iniciar y 50% al finalizar</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#16352A]/70">Volumen en feed</span>
              <p className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A] tabular-nums">8 a 16 piezas</p>
              <p className="text-xs text-[#475569]">Reels, carruseles de hasta 6 placas y post estáticos</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#16352A]/70">Historias en el mes</span>
              <p className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A] tabular-nums">30 a 40 historias</p>
              <p className="text-xs text-[#475569]">Flyers diseñados + pautas orgánicas orientadas</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#16352A]/70">Preparación previa</span>
              <p className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A] tabular-nums">15 días</p>
              <p className="text-xs text-[#475569]">Sin cargo adicional por la etapa de preparación inicial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
