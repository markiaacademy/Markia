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
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Soluciones Web</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Diseño y desarrollo web
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Creamos landing pages de alto impacto diseñadas para facilitar las consultas de tus potenciales clientes y presentar la propuesta de tu inmobiliaria con claridad.
          </p>
        </div>

        {/* Visual Showcase Card */}
        <div className="mb-16 border border-[rgba(22,53,42,0.10)] bg-[#FAF8F5] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 aspect-[4/3] overflow-hidden bg-white border border-[rgba(22,53,42,0.08)]">
              <img
                src="/images/web_design_realestate_showcase_1793660532408.jpg"
                alt="Diseño web inmobiliario minimalista"
                className="w-full h-full object-cover grayscale-[4%]"
              />
            </div>
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/60">
                Estrategia de Conversión
              </span>
              <h3 className="font-playfair text-2xl font-medium text-[#16352A]">
                Páginas diseñadas para facilitar el contacto directo.
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed font-['Inter']">
                Concentramos la atención en un objetivo comercial único: captar propietarios, lanzar preventas o fidelizar clientes con oportunidades privadas.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WEB_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.08)] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.06)]">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/40">
                    Pilar {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                </div>
                <h4 className="mt-4 font-playfair text-xl font-medium text-[#16352A]">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed font-['Inter']">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {WEB_SOLUTIONS.map((item: WebSolutionItem) => (
              <div
                key={item.id}
                className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.10)] p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/60">
                    {item.tagline}
                  </span>
                  <h4 className="mt-3 font-playfair text-2xl font-medium text-[#16352A]">
                    {item.name}
                  </h4>
                  <p className="mt-4 text-sm text-[#475569] leading-relaxed font-['Inter']">
                    {item.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-[rgba(22,53,42,0.08)] text-[11px] uppercase tracking-wider font-bold text-[#16352A]">
                    <span>Entrega: {item.timeline}</span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/40 block">
                      Funcionalidades posibles:
                    </span>
                    <ul className="space-y-3 text-sm text-[#475569] font-['Inter']">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16352A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[rgba(22,53,42,0.08)]">
                  <button
                    type="button"
                    onClick={() => handlePresupuestar(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-none bg-[#16352A] px-6 py-4 font-['Inter'] text-[13px] font-bold uppercase tracking-widest text-[#FAF8F5] hover:bg-black transition-all"
                  >
                    <span>Presupuestar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-[rgba(22,53,42,0.12)] bg-[#FAF8F5]/50 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#16352A]">Nota sobre integraciones y soporte</h4>
            <p className="text-xs text-[#475569] leading-relaxed max-w-4xl">
              Las integraciones con CRM, los accesos privados y otras funcionalidades especiales se definen y cotizan según el alcance del proyecto. El costo de hosting, dominio y mantenimiento anual son responsabilidad del cliente según las condiciones acordadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
