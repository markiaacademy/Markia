import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { WEB_SOLUTIONS, WEB_PILLARS, WebSolutionItem } from '../data/budgetData';

interface WebDesignSectionProps {
  onSelectWebSolution: (solutionId: string) => void;
}

export const WebDesignSection: React.FC<WebDesignSectionProps> = ({ onSelectWebSolution }) => {
  const handlePresupuestar = (solutionId: string) => {
    onSelectWebSolution(solutionId);
    const formElement = document.getElementById('formulario-presupuesto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="diseno-web" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Arquitectura Digital</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Diseño y desarrollo web
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Diseñamos landing pages de alto impacto creadas exclusivamente para convertir visitantes en clientes y fidelizar tu cartera a largo plazo. Menos dispersión de catálogos masivos, mayor tasa de captación en exclusiva y retención de inversores.
          </p>
        </div>

        {/* Visual Showcase Card */}
        <div className="mb-16 border border-[rgba(22,53,42,0.10)] bg-[#FAF8F5] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 aspect-[4/3] overflow-hidden bg-white border border-[rgba(22,53,42,0.08)]">
              <img
                src="/images/web_design_realestate_showcase_1793660532408.jpg"
                alt="Diseño web inmobiliario minimalista presentado en laptop de diseñador en escritorio de piedra caliza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[4%]"
              />
            </div>
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#16352A]/70">
                Estrategia de Conversión & Retención
              </span>
              <h3 className="font-playfair text-2xl font-medium text-[#16352A]">
                Landing pages diseñadas para convertir visitas en propietarios e inversores fieles.
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed font-['Inter']">
                Los catálogos tradicionales con cientos de propiedades sufren altas tasas de rebote y dispersión. Nuestras landing pages concentran toda la atención en un objetivo comercial único: captar propietarios para vender en exclusiva, lanzar preventas de desarrollos o fidelizar clientes con oportunidades privadas.
              </p>
              
              {/* Button to request quote directly */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handlePresupuestar('landing-captacion')}
                  className="inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[14px] font-medium tracking-[-0.01em] text-[#FAF8F5] transition-colors hover:border-[#000000] hover:bg-[#000000]"
                >
                  <span>Presupuestar landing page</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E8D0A0]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WEB_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.08)] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(22,53,42,0.06)]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#16352A]/60">
                    Pilar {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                </div>
                <h4 className="mt-3 font-playfair text-lg font-medium text-[#16352A]">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs text-[#475569] leading-relaxed font-['Inter']">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Web Formats with direct Presupuestar action */}
        <div className="space-y-6">
          <div className="border-b border-[rgba(22,53,42,0.12)] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="editorial-overline">Formatos de Landing Pages</span>
              <h3 className="font-playfair text-2xl font-medium text-[#16352A] mt-1">
                Soluciones web a medida de tu inmobiliaria.
              </h3>
            </div>
            <p className="text-xs text-[#475569]">
              Cotización personalizada según alcance, objetivos de captación y fidelización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {WEB_SOLUTIONS.map((item: WebSolutionItem) => (
              <div
                key={item.id}
                className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.10)] p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#16352A]/70">
                    {item.tagline}
                  </span>
                  <h4 className="mt-2 font-playfair text-2xl font-medium text-[#16352A]">
                    {item.name}
                  </h4>
                  <p className="mt-3 text-xs md:text-sm text-[#475569] leading-relaxed font-['Inter']">
                    {item.description}
                  </p>

                  <div className="mt-4 pb-4 border-b border-[rgba(22,53,42,0.08)] text-xs text-[#16352A] font-medium flex items-center gap-1.5">
                    <span>Plazo de entrega estimado:</span>
                    <strong className="underline decoration-[#E8D0A0]">{item.timeline}</strong>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#16352A]/70 block">
                      Alcance incluido:
                    </span>
                    <ul className="space-y-2 text-xs text-[#475569] font-['Inter']">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#16352A] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Presupuestar Button */}
                <div className="mt-8 pt-6 border-t border-[rgba(22,53,42,0.08)]">
                  <button
                    type="button"
                    onClick={() => handlePresupuestar(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-none border border-[#16352A] bg-[#16352A] px-6 py-3.5 font-['Inter'] text-[13px] font-medium tracking-tight text-[#FAF8F5] hover:bg-black hover:border-black transition-colors"
                  >
                    <span>Presupuestar {item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E8D0A0]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner leading to Presupuestar */}
          <div className="mt-12 p-8 border border-[rgba(22,53,42,0.12)] bg-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-playfair text-xl md:text-2xl font-medium text-[#16352A] block">
                ¿Querés cotizar una landing page para tu inmobiliaria?
              </span>
              <p className="text-xs md:text-sm text-[#475569]">
                Completá los datos básicos de tu firma para coordinar una reunión de relevamiento y presupuesto personalizado.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handlePresupuestar('landing-captacion')}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[14px] font-medium text-[#FAF8F5] hover:bg-black transition-colors"
            >
              <span>Presupuestar landing page</span>
              <ArrowUpRight className="w-4 h-4 text-[#E8D0A0]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
