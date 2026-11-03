import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/budgetData';

export const ProcessAndPreparation: React.FC = () => {
  return (
    <section id="proceso" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Metodología</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Nuestro proceso de trabajo
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Trabajamos de forma ordenada para que vos y tu equipo tengan previsibilidad total sobre los contenidos y lanzamientos.
          </p>
        </div>

        {/* Highlighted Note */}
        <div className="mb-16 max-w-4xl bg-[#FAF8F5] border border-[rgba(22,53,42,0.08)] p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/40">Preparación Inicial</span>
              <p className="font-playfair text-xl text-[#16352A]">15 días de planificación previa sin cargo adicional.</p>
            </div>
            <p className="text-xs text-[#475569] max-w-sm leading-relaxed font-['Inter']">
              Esta ventana nos permite diagnosticar tus redes, redactar los guiones estratégicos y diseñar las primeras piezas sin improvisaciones.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.step}
              className={`p-8 border flex flex-col justify-between rounded-3xl ${
                step.isPreparation
                  ? 'bg-[#FAF8F5] border-[#16352A]/20'
                  : 'bg-white border-[rgba(22,53,42,0.08)]'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[rgba(22,53,42,0.08)] pb-4">
                  <span className="font-playfair text-3xl font-normal text-[#16352A] tabular-nums">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/50">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="mt-6 font-playfair text-xl font-medium text-[#16352A] leading-snug">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm text-[#475569] leading-relaxed font-['Inter']">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-[rgba(22,53,42,0.12)] bg-[#FAF8F5]/30 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 aspect-square flex items-center justify-center">
              <ClipboardCheck className="w-12 h-12 text-[#16352A]" strokeWidth={1.25} />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="font-playfair text-2xl font-medium text-[#16352A]">Orden y agilidad</h3>
              <p className="text-sm text-[#475569] leading-relaxed font-['Inter']">
                Para sostener la calidad editorial, recibís la planificación completa con antelación y realizás una devolución unificada de ajustes. Así, mantenemos la presencia constante de tu marca sin fricciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
