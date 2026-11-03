import React from 'react';
import { ArrowDown, ArrowUpRight, Share2, Globe } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Servicios</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Servicios para inmobiliarias
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Reorganizamos la presencia digital de tu firma en dos ejes complementarios: la construcción de reputación recurrente en redes y la sede digital donde se captan y convierten las propiedades.
          </p>
        </div>

        {/* Dual Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service 1: Community Management */}
          <div className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.08)]">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#16352A]/70">
                  Servicio 01
                </span>
                <span className="p-2 border border-[rgba(22,53,42,0.12)] bg-white text-[#16352A]">
                  <Share2 className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A]">
                Community Management & Contenidos Inmobiliarios
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] font-['Inter']">
                Estrategia editorial para Instagram y Facebook, producción y edición de reels, carruseles de valor, gestión diaria de comentarios y 1 sesión mensual de grabación en tu propia oficina.
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#16352A] font-['Inter']">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Planes mensuales desde USD 900 (Modalidad 50/50)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>8 a 16 posteos en feed + 30 historias producidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>15 días de preparación inicial sin cargo adicional</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(22,53,42,0.08)]">
              <a
                href="#community-management"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[14px] font-medium tracking-[-0.01em] text-[#FAF8F5] transition-colors hover:border-[#000000] hover:bg-[#000000]"
              >
                <span>Ver planes de Community Management</span>
                <ArrowDown aria-hidden="true" className="h-4 w-4 text-[#E8D0A0]" />
              </a>
            </div>
          </div>

          {/* Service 2: Web Design */}
          <div className="bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,53,42,0.08)]">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#16352A]/70">
                  Servicio 02
                </span>
                <span className="p-2 border border-[rgba(22,53,42,0.12)] bg-white text-[#16352A]">
                  <Globe className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#16352A]">
                Diseño Web & Landing Pages de Conversión
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-[#475569] font-['Inter']">
                Landing pages y embudos estratégicos para captar propietarios en exclusiva, canalizar solicitudes de tasación y fidelizar a tu cartera de inversores con oportunidades privadas, sin la dispersión de catálogos masivos.
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#16352A] font-['Inter']">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Landing de captación de propietarios y tasaciones online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Embudos monoproducto para lanzamientos de preventa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8D0A0]" />
                  <span>Portales privados de fidelización y club de inversores</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(22,53,42,0.08)]">
              <a
                href="#diseno-web"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-none border border-[rgba(22,53,42,0.3)] bg-transparent px-7 py-3.5 font-['Inter'] text-[14px] font-medium tracking-[-0.01em] text-[#16352A] transition-colors hover:border-[#16352A] hover:bg-[#16352A]/5"
              >
                <span>Ver soluciones de landing pages</span>
                <ArrowDown aria-hidden="true" className="h-4 w-4 text-[#16352A]/60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
