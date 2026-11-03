import React, { useState } from 'react';
import { Check, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/budgetData';

interface ComparisonTableProps {
  onSelectPlan: (planId: 'presencia' | 'autoridad' | 'premium') => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="comparativa-detallada" className="py-12 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[rgba(22,53,42,0.15)] hover:border-[#16352A] transition-all"
          >
            <span className="font-playfair text-lg font-medium text-[#16352A]">
              {isExpanded ? 'Ocultar detalles comparativos' : 'Comparar todos los detalles'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#16352A]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#16352A] animate-bounce" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-12 space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
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
                    </th>
                    <th className="py-5 px-6 font-playfair text-xl font-medium text-[#16352A] w-1/5 text-center bg-[rgba(232,208,160,0.15)] border-x border-[rgba(22,53,42,0.08)]">
                      Autoridad
                    </th>
                    <th className="py-5 px-6 font-playfair text-xl font-medium text-[#16352A] w-1/5 text-center">
                      Impulso · Premium
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
                          ) : (
                            row.presencia
                          )}
                        </td>

                        <td className={`py-4 px-6 text-center tabular-nums bg-[rgba(232,208,160,0.08)] border-x border-[rgba(22,53,42,0.08)] ${isPriceRow || isPaymentRow ? 'font-semibold text-[#16352A]' : 'text-[#16352A]'}`}>
                          {row.autoridad === 'Incluida' ? (
                            <span className="inline-flex items-center justify-center gap-1 text-[#16352A] font-medium">
                              <Check className="w-4 h-4 text-[#16352A]" /> Incluida
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
                          ) : (
                            row.premium
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#475569] leading-relaxed">
              <div className="p-6 border border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
                <h4 className="font-semibold text-[#16352A] mb-2 uppercase tracking-wider">Historias Orgánicas Guiadas</h4>
                <p>Corresponden a pautas e ideas que te damos para el contenido cotidiano de tu equipo. No equivalen a piezas gráficas diseñadas. La dinámica de captura, entrega y publicación se acuerda al inicio según la estructura de tu inmobiliaria.</p>
              </div>
              <div className="p-6 border border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
                <h4 className="font-semibold text-[#16352A] mb-2 uppercase tracking-wider">Producción Audiovisual</h4>
                <p>Todos los planes incluyen la coordinación de una jornada mensual de grabación en tu oficina. Es importante aclarar que los honorarios del filmmaker, los traslados y la producción técnica se cotizan por separado.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
