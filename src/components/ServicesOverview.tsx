import React from 'react';
import { Share2, Globe, ArrowDown } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Nuestros ejes</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Soluciones para inmobiliarias
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Ordenamos tu comunicación digital en dos frentes clave: la gestión recurrente de tu marca en redes y el desarrollo de landing pages de conversión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service 1: Community Management */}
          <div className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] p-8 md:p-10 flex flex-col justify-between hover:shadow-sm transition-shadow rounded-3xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.08)]">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/60">
                  Eje 01
                </span>
                <span className="p-2 border border-[rgba(22,53,42,0.12)] bg-white text-[#16352A] rounded-xl">
                  <Share2 className="w-4 h-4" strokeWidth={1.25} />
                </span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A]">
                Gestión de Redes & Contenidos
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] font-['Inter']">
                Estrategia editorial, diseño de piezas, edición de reels y coordinación de grabación en oficina. Sostenemos tu presencia para que vos te concentres en vender.
              </p>

              <div className="pt-2 space-y-3 text-xs text-[#16352A] font-['Inter']">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Planes mensuales desde USD 900</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>8 a 16 publicaciones mensuales en feed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>30 a 40 historias según el plan</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[rgba(22,53,42,0.08)]">
              <a
                href="#que-incluye"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[13px] font-bold uppercase tracking-widest text-[#FAF8F5] transition-colors hover:bg-black"
              >
                <span>Ver qué incluye</span>
                <ArrowDown className="h-4 w-4 text-[#E8D0A0]" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Service 2: Web Design */}
          <div className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] p-8 md:p-10 flex flex-col justify-between hover:shadow-sm transition-shadow rounded-3xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.08)]">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/60">
                  Eje 02
                </span>
                <span className="p-2 border border-[rgba(22,53,42,0.12)] bg-white text-[#16352A] rounded-xl">
                  <Globe className="w-4 h-4" strokeWidth={1.25} />
                </span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A]">
                Landing Pages de Conversión
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] font-['Inter']">
                Desarrollamos páginas de objetivo único para facilitar solicitudes de tasación, presentar emprendimientos o fidelizar a tu cartera de inversores.
              </p>

              <div className="pt-2 space-y-3 text-xs text-[#16352A] font-['Inter']">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Cotización personalizada según el alcance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Enfoque total en el contacto directo vía WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[rgba(22,53,42,0.08)]">
              <a
                href="#diseno-web"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[rgba(22,53,42,0.3)] bg-transparent px-7 py-3.5 font-['Inter'] text-[13px] font-bold uppercase tracking-widest text-[#16352A] transition-colors hover:bg-[rgba(22,53,42,0.05)]"
              >
                <span>Ver soluciones web</span>
                <ArrowDown className="h-4 w-4 text-[#16352A]/60" strokeWidth={1.25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
