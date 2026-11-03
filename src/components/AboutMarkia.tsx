import React from 'react';

export const AboutMarkia: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
              <span className="editorial-overline">Quiénes somos</span>
            </div>
            <h2 className="section-title text-[#16352A]">
              MARKIA: Aliados en la comunicación de tu inmobiliaria.
            </h2>
            <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
              Somos un equipo especializado en potenciar la presencia digital de firmas inmobiliarias que buscan profesionalismo y resultados concretos. No creemos en fórmulas mágicas, sino en un sistema de trabajo ordenado que combina estrategia, diseño y redacción para facilitar el vínculo con tus clientes.
            </p>
            <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
              Nuestro enfoque es simple: ordenar tu comunicación para que vos y tu equipo puedan concentrarse en lo que mejor saben hacer: cerrar operaciones.
            </p>
          </div>
          <div className="aspect-[16/10] overflow-hidden border border-[rgba(22,53,42,0.10)] shadow-sm">
            <img 
              src="/images/studio_creative_realestate_production_1793659766143.jpg" 
              alt="MARKIA Equipo y Estrategia" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
