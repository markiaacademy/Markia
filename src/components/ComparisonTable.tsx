import React from 'react';
import { Check, Minus, ArrowUpRight } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/budgetData';

interface ComparisonTableProps {
  onSelectPlan: (planId: 'presencia' | 'autoridad' | 'premium') => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectPlan }) => {
  return (
    <section id="comparador" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Comparativa Rigurosa</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Comparativa de planes
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Transparencia técnica sin letra chica. Verificá qué incluye cada nivel de servicio para tomar una decisión fundamentada para tu inmobiliaria.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-[rgba(22,53,42,0.12)] bg-[#FAF8F5]">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[rgba(22,53,42,0.12)] bg-[#FAF8F5]">
                <th className="py-5 px-6 font-['Inter'] text-xs uppercase tracking-wider font-semibold text-[#16352A]/80 w-1/3">
                  Concepto / Entregable
                </th>
                <th className="py-5 px-6 font-playfair text-xl font-medium text-[#16352A] w-1/5 text-center">
                  Presencia
                  <span className="block font-['Inter'] text-xs text-[#475569] font-normal mt-1 tabular-nums">USD 900 / mes</span>
                </th>
                <th className="py-5 px-6 font-playfair text-xl font-medium text-[#16352A] w-1/5 text-center bg-[rgba(232,208,160,0.15)] border-x border-[rgba(22,53,42,0.08)]">
                  Autoridad
                  <span className="block font-['Inter'] text-xs text-[#16352A] font-medium mt-1 tabular-nums">USD 1.200 / mes</span>
                </th>
                <th className="py-5 px-6 font-playfair text-xl font-medium text-[#16352A] w-1/5 text-center">
                  Impulso · Premium
                  <span className="block font-['Inter'] text-xs text-[#475569] font-normal mt-1 tabular-nums">USD 1.600 / mes</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(22,53,42,0.08)] text-sm font-['Inter']">
              {COMPARISON_ROWS.map((row, index) => {
                const isPriceRow = index === 0;
                const isPaymentRow = index === 1;

                return (
                  <tr
                    key={row.concept}
                    className={`transition-colors hover:bg-white/60 ${
                      index % 2 === 0 ? 'bg-white/30' : 'bg-transparent'
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-[#16352A]">
                      {row.concept}
                    </td>

                    <td className={`py-4 px-6 text-center tabular-nums ${isPriceRow || isPaymentRow ? 'font-semibold text-[#16352A]' : 'text-[#475569]'}`}>
                      {row.presencia === 'Incluida' ? (
                        <span className="inline-flex items-center justify-center gap-1 text-[#16352A] font-medium">
                          <Check className="w-4 h-4 text-[#16352A]" /> Incluida
                        </span>
                      ) : row.presencia === 'No' ? (
                        <span className="text-slate-400 font-light flex items-center justify-center">
                          <Minus className="w-4 h-4" />
                        </span>
                      ) : (
                        row.presencia
                      )}
                    </td>

                    <td className={`py-4 px-6 text-center tabular-nums bg-[rgba(232,208,160,0.08)] border-x border-[rgba(22,53,42,0.08)] ${isPriceRow || isPaymentRow ? 'font-semibold text-[#16352A]' : 'text-[#16352A]'}`}>
                      {row.autoridad === 'Incluida' ? (
                        <span className="inline-flex items-center justify-center gap-1 text-[#16352A] font-medium">
                          <Check className="w-4 h-4 text-[#16352A]" /> Incluida
                        </span>
                      ) : row.autoridad === 'No' ? (
                        <span className="text-slate-400 font-light flex items-center justify-center">
                          <Minus className="w-4 h-4" />
                        </span>
                      ) : (
                        row.autoridad
                      )}
                    </td>

                    <td className={`py-4 px-6 text-center tabular-nums ${isPriceRow || isPaymentRow ? 'font-semibold text-[#16352A]' : 'text-[#475569]'}`}>
                      {row.premium === 'Incluida' ? (
                        <span className="inline-flex items-center justify-center gap-1 text-[#16352A] font-medium">
                          <Check className="w-4 h-4 text-[#16352A]" /> Incluida
                        </span>
                      ) : row.premium.startsWith('Sí') ? (
                        <span className="font-medium text-[#16352A]">{row.premium}</span>
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                );
              })}

              {/* Action row at bottom of table */}
              <tr className="bg-white border-t border-[rgba(22,53,42,0.12)]">
                <td className="py-5 px-6 font-semibold text-xs uppercase tracking-wider text-[#16352A]/80">
                  Acción
                </td>
                <td className="py-5 px-6 text-center">
                  <button
                    type="button"
                    onClick={() => onSelectPlan('presencia')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-[rgba(22,53,42,0.3)] text-xs font-medium text-[#16352A] hover:border-[#16352A] hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span>Elegir Presencia</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </td>
                <td className="py-5 px-6 text-center bg-[rgba(232,208,160,0.12)] border-x border-[rgba(22,53,42,0.08)]">
                  <button
                    type="button"
                    onClick={() => onSelectPlan('autoridad')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#16352A] border border-[#16352A] text-xs font-medium text-[#FAF8F5] hover:bg-black hover:border-black transition-colors"
                  >
                    <span>Elegir Autoridad</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E8D0A0]" />
                  </button>
                </td>
                <td className="py-5 px-6 text-center">
                  <button
                    type="button"
                    onClick={() => onSelectPlan('premium')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-[#16352A] text-xs font-medium text-[#16352A] hover:bg-black hover:text-white transition-colors"
                  >
                    <span>Elegir Premium</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Premium Scope Note */}
        <div className="mt-8 p-6 border border-[rgba(22,53,42,0.10)] bg-[#FAF8F5] space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#16352A]">
            Detalle del Alcance Impulso · Premium
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#475569] leading-relaxed">
            <div>
              <p className="font-semibold text-[#16352A] mb-1">Recurso de valor mensual:</p>
              <p>Un recurso mensual a elegir entre: guía especializada, ebook de hasta 8 páginas, checklist descargable o landing de una página con estructura convenida. Incluye enfoque, redacción, diseño y una ronda de ajustes con información validada.</p>
            </div>
            <div>
              <p className="font-semibold text-[#16352A] mb-1">Capacitación mensual para agentes:</p>
              <p>Una sesión online mensual de hasta 60 minutos con material y resolución de consultas. Temas abordados: comunicación, marca personal, generación de contenido inmobiliario, redes y herramientas digitales aplicadas.</p>
            </div>
            <div>
              <p className="font-semibold text-[#16352A] mb-1">Coordinación de pauta publicitaria:</p>
              <p>Coordinación estratégica de pauta publicitaria con especialista. No incluye ejecución técnica independiente ni honorarios del especialista de pauta ni la inversión en anuncios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
