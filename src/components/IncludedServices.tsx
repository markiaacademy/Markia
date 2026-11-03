import React from 'react';
import { INCLUDED_SERVICES } from '../data/budgetData';

export const IncludedServices: React.FC = () => {
  return (
    <section id="community-management" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
              <span className="editorial-overline">Community Management Inmobiliario</span>
            </div>
            <h2 className="section-title text-[#16352A]">
              Community Management inmobiliario
            </h2>
            <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter'] max-w-2xl">
              Independientemente de la escala elegida, cada cuenta recibe el mismo rigor arquitectónico en diagnóstico, diseño, copywriting, edición audiovisual y programación.
            </p>
          </div>

          <div className="lg:col-span-4 text-xs text-[#475569] border-l border-[rgba(22,53,42,0.15)] pl-5 space-y-1">
            <span className="font-semibold text-[#16352A] block uppercase tracking-wider text-[11px]">Canales principales</span>
            <p>Instagram con adaptación sistemática del mismo contenido al formato óptimo de Facebook.</p>
          </div>
        </div>

        {/* Bento Grid with Core Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INCLUDED_SERVICES.map((item, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={item.title}
                className="bg-white border border-[rgba(22,53,42,0.08)] p-7 flex flex-col justify-between hover:border-[rgba(22,53,42,0.2)] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.06)]">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#16352A]/60">
                      Fase {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  </div>

                  <h3 className="mt-4 font-playfair text-xl font-medium text-[#16352A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#475569] leading-relaxed font-['Inter']">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(22,53,42,0.04)] text-[11px] text-[#16352A]/70 uppercase tracking-wider font-medium">
                  {isFirst ? 'Etapa diagnóstica' : 'Producción recurrente'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Proof Card with Office Recording Photography */}
        <div className="mt-14 border border-[rgba(22,53,42,0.10)] bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 aspect-[4/3] overflow-hidden bg-[#FAF8F5] border border-[rgba(22,53,42,0.08)]">
              <img
                src="/images/filmmaker_edge_recording_session_1793660333128.jpg"
                alt="Filmmaker en el margen registrando con cámara profesional a un equipo inmobiliario en sala de reuniones con vistas arquitectónicas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[4%]"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#16352A]/70">
                Coordinación presencial
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A]">
                Sesión de grabación mensual en tu oficina.
              </h3>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed font-['Inter']">
                Cada mes estructuramos y coordinamos una sesión de filmación en la sede de la inmobiliaria para capturar a los agentes y los testimonios con guiones precisos. Los honorarios del filmmaker, traslados y producción técnica se cotizan por separado, acordando la duración de la sesión previamente.
              </p>
              <div className="pt-2 text-xs text-[#16352A] font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" />
                <span>Incluida de forma transversal en Presencia, Autoridad e Impulso Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
