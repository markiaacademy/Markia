import React from 'react';
import { CONDITIONS_GROUPS } from '../data/budgetData';

export const Conditions: React.FC = () => {
  return (
    <section id="condiciones" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Pautas de Trabajo</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Condiciones de colaboración
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Transparencia desde el primer día. Estas pautas nos permiten trabajar de forma ordenada y cumplir con los plazos acordados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONDITIONS_GROUPS.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="font-playfair text-xl font-medium text-[#16352A] pb-3 border-b border-[rgba(22,53,42,0.12)]">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#475569] font-['Inter'] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8D0A0] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border-t border-[rgba(22,53,42,0.08)] text-center">
          <p className="text-xs text-[#475569] max-w-2xl mx-auto italic">
            El servicio de MARKIA se enfoca en el orden de la comunicación y la calidad visual de tu inmobiliaria; no constituye una garantía de resultados comerciales específicos.
          </p>
        </div>
      </div>
    </section>
  );
};
