import React from 'react';
import { Video } from 'lucide-react';
import { INCLUDED_SERVICES } from '../data/budgetData';

export const IncludedServices: React.FC = () => {
  return (
    <section id="que-incluye" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Nuestra propuesta</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Qué incluye la gestión de redes
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Sostenemos la presencia digital de tu inmobiliaria con un sistema de trabajo profesional que abarca desde la estrategia hasta el reporte de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {INCLUDED_SERVICES.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-[#16352A]/30 font-['Inter'] tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-playfair text-xl font-medium text-[#16352A]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed font-['Inter'] pl-8 border-l border-[rgba(22,53,42,0.06)] ml-[5px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Filmmaker and coordination clarification */}
        <div className="mt-20 p-8 border border-[rgba(22,53,42,0.12)] bg-[#FAF8F5] flex flex-col md:flex-row items-center gap-8 rounded-3xl">
          <div className="md:w-1/3 aspect-square flex items-center justify-center">
            <Video className="w-12 h-12 text-[#16352A]" strokeWidth={1.25} />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h3 className="font-playfair text-2xl font-medium text-[#16352A]">Coordinación de grabación</h3>
            <p className="text-sm text-[#475569] leading-relaxed font-['Inter']">
              Todos nuestros planes contemplan la coordinación de una jornada mensual de grabación en tu oficina para capturar el contenido del mes. Es importante notar que los honorarios del filmmaker, los traslados y la producción técnica se cotizan por separado. Acordamos la duración de la jornada previamente según el volumen del plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
