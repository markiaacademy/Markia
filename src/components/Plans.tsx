import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PLANS, PlanItem } from '../data/budgetData';

interface PlansProps {
  onSelectPlan: (planId: 'presencia' | 'autoridad' | 'premium') => void;
  selectedPlanId?: string;
}

export const Plans: React.FC<PlansProps> = ({ onSelectPlan, selectedPlanId }) => {
  return (
    <section id="planes" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Planes & Honorarios Mensuales</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Planes mensuales
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Todos los planes contemplan diagnóstico, planificación, redacción profesional, diseño gráfico, edición de reels, publicación en Instagram con adaptación a Facebook e informe mensual de rendimiento.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan: PlanItem) => {
            const isSelected = selectedPlanId === plan.id;
            const isAutoridad = plan.id === 'autoridad';
            const isPremium = plan.id === 'premium';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-white border transition-shadow duration-300 ${
                  isSelected
                    ? 'border-[#16352A] shadow-md ring-1 ring-[#16352A]'
                    : isAutoridad
                    ? 'border-[rgba(22,53,42,0.22)] shadow-sm'
                    : 'border-[rgba(22,53,42,0.10)] shadow-xs'
                } p-8 md:p-9`}
              >
                {/* Top Plan Information */}
                <div>
                  {/* Positioning note for Autoridad or Premium without pill capsules */}
                  {plan.positioningTag && (
                    <div className="mb-4 pb-3 border-b border-[rgba(22,53,42,0.08)]">
                      <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#16352A]">
                        {plan.positioningTag}
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#16352A]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-[#475569] leading-relaxed font-['Inter'] min-h-[42px]">
                    {plan.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="mt-6 pt-6 border-t border-[rgba(22,53,42,0.10)]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-playfair text-4xl font-semibold text-[#16352A] tabular-nums">
                        USD {plan.monthlyFee.toLocaleString('es-AR')}
                      </span>
                      <span className="text-sm text-[#475569] font-['Inter']">/ mes</span>
                    </div>

                    <div className="mt-2 text-xs font-medium text-[#16352A]/80 font-['Inter'] flex items-center gap-1.5 tabular-nums">
                      <span>Modalidad:</span>
                      <span className="underline decoration-[#E8D0A0] decoration-2 underline-offset-2">
                        USD {plan.initialPayment} al iniciar + USD {plan.finalPayment} al finalizar
                      </span>
                    </div>
                  </div>

                  {/* Metrics summary */}
                  <div className="mt-6 py-4 px-4 bg-[#FAF8F5] border border-[rgba(22,53,42,0.08)] grid grid-cols-2 gap-3 text-xs text-[#16352A]">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#475569]">Feed mensual</span>
                      <span className="font-semibold text-sm tabular-nums">{plan.totalFeedPosts} publicaciones</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#475569]">Historias</span>
                      <span className="font-semibold text-sm tabular-nums">{plan.totalStories} mensuales</span>
                    </div>
                    <div className="pt-2 border-t border-[rgba(22,53,42,0.06)]">
                      <span className="block text-[10px] uppercase tracking-wider text-[#475569]">Composición</span>
                      <span className="text-[11px] text-[#475569]">{plan.reels} reels · {plan.carousels} carruseles · {plan.staticPosts} post</span>
                    </div>
                    <div className="pt-2 border-t border-[rgba(22,53,42,0.06)]">
                      <span className="block text-[10px] uppercase tracking-wider text-[#475569]">Historias detalle</span>
                      <span className="text-[11px] text-[#475569]">{plan.storyFlyers} flyers · {plan.organicStories} orgánicas</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3.5">
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[#16352A]/70">
                      Entregables incluidos
                    </p>
                    <ul className="space-y-3 text-sm text-[#475569] font-['Inter']">
                      {plan.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#16352A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}

                      {/* Explicit mention of review type */}
                      <li className="flex items-start gap-2.5 pt-1 text-xs text-[#16352A]">
                        <span className="w-1.5 h-1.5 bg-[#E8D0A0] shrink-0 mt-1.5" />
                        <span><strong>Revisión:</strong> {plan.goalReview}</span>
                      </li>

                      {/* Exclusive premium deliverables if present */}
                      {isPremium && (
                        <>
                          <li className="flex items-start gap-2.5 text-xs text-[#16352A]">
                            <span className="w-1.5 h-1.5 bg-[#E8D0A0] shrink-0 mt-1.5" />
                            <span><strong>Recurso de valor:</strong> Guía, ebook (hasta 8 págs), checklist o landing page</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-[#16352A]">
                            <span className="w-1.5 h-1.5 bg-[#E8D0A0] shrink-0 mt-1.5" />
                            <span><strong>Capacitación:</strong> 1 sesión online mensual de hasta 60 min para agentes</span>
                          </li>
                          <li className="flex items-start gap-2.5 text-xs text-[#16352A]">
                            <span className="w-1.5 h-1.5 bg-[#E8D0A0] shrink-0 mt-1.5" />
                            <span><strong>Pauta:</strong> Coordinación de campañas con especialista</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button: Strictly rectangular, anti-pill */}
                <div className="mt-10 pt-6 border-t border-[rgba(22,53,42,0.10)]">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full inline-flex items-center justify-center gap-2.5 rounded-none px-7 py-3.5 font-['Inter'] text-[15px] font-medium tracking-[-0.01em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A] ${
                      isSelected
                        ? 'bg-black border border-black text-[#FAF8F5]'
                        : isAutoridad
                        ? 'bg-[#16352A] border border-[#16352A] text-[#FAF8F5] hover:bg-black hover:border-black'
                        : 'bg-transparent border border-[#16352A]/40 text-[#16352A] hover:bg-[#16352A]/5 hover:border-[#16352A]'
                    }`}
                  >
                    <span>{isSelected ? 'Plan preseleccionado' : `Seleccionar ${plan.name}`}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-4 w-4 ${isAutoridad || isSelected ? 'text-[#E8D0A0]' : 'text-[#16352A]'}`}
                    />
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#475569]">
                    Preselecciona este plan en la solicitud de presupuesto
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on cumulative volume */}
        <div className="mt-10 text-center text-xs text-[#475569] font-['Inter']">
          <p>
            * Nota operativa: Las cantidades de cada plan reemplazan a las del anterior; no se suman entre sí.
          </p>
        </div>
      </div>
    </section>
  );
};
