import React from 'react';
import { MarkiaLogo } from './MarkiaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-[#FAF8F5] pt-16 pb-12 border-t border-[rgba(232,208,160,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(250,248,245,0.12)]">
          {/* Brand & Isologo in Light variant */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D0A0]"
              aria-label="MARKIA - Ir al inicio"
            >
              <MarkiaLogo variant="light" width={100} />
              <span className="sr-only">MARKIA</span>
            </a>
            <p className="text-xs text-[#FAF8F5]/70 max-w-sm leading-relaxed font-['Inter']">
              Estrategia digital integral para inmobiliarias.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8D0A0] block">
              Navegación
            </span>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80 font-['Inter']">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#que-incluye" className="hover:text-white transition-colors">
                  Gestión de Redes
                </a>
              </li>
              <li>
                <a href="#diseno-web" className="hover:text-white transition-colors">
                  Diseño Web
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8D0A0] block">
              Canal Oficial
            </span>
            <p className="text-xs text-[#FAF8F5]/70 font-['Inter'] leading-relaxed">
              Consultas comerciales y recepción de materiales:
            </p>
            <p className="font-['Inter'] text-sm font-medium text-[#FAF8F5]">
              markia.academy@gmail.com
            </p>
            <p className="text-[11px] text-[#FAF8F5]/50 pt-2 font-['Inter']">
              Horario de atención: Lunes a Viernes de 09:00 a 18:00 hs.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF8F5]/50 font-['Inter']">
          <p>© {new Date().getFullYear()} MARKIA. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Presupuesto oficial y condiciones comerciales reservadas.
          </p>
        </div>
      </div>
    </footer>
  );
};
