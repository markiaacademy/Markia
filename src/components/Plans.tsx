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
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Gestión de Redes</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Planes mensuales
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Elegí el nivel de gestión que tu inmobiliaria necesita. Todos los planes incluyen diagnóstico, redacción profesional, diseño de piezas y edición de reels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan: PlanItem) => {
            const isSelected = selectedPlanId === plan.id;
            const isAutoridad = plan.id === 'autoridad';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-white border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#16352A] shadow-md ring-1 ring-[#16352A]'
                    : isAutoridad
                    ? 'border-[rgba(22,53,42,0.22)] shadow-sm'
                    : 'border-[rgba(22,53,42,0.10)] shadow-xs'
                } p-8 md:p-10`}
              >
                <div>
                  {plan.positioningTag && (
                    <div className="mb-6 pb-4 border-b border-[rgba(22,53,42,0.08)]">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]">
                        {plan.positioningTag}
                      </span>
                    </div>
                  )}

                  <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#16352A]">
                    {plan.name}
                  </h3>

                  <p className="mt-4 text-sm text-[#475569] leading-relaxed font-['Inter']">
                    {plan.description}
                  </p>

                  <div className="mt-8 pt-8 border-t border-[rgba(22,53,42,0.10)]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-playfair text-4xl font-semibold text-[#16352A] tabular-nums">
                        USD {plan.monthlyFee.toLocaleString('es-AR')}
                      </span>
                      <span className="text-sm text-[#475569] font-['Inter']">/ mes</span>
                    </div>

                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[#16352A]/60 font-['Inter'] flex items-center gap-1.5">
                      <span>Modalidad: USD {plan.initialPayment} + {plan.finalPayment}</span>
                    </div>
                  </div>

                  {/* Metric Strip */}
                  <div className="mt-8 py-5 px-5 bg-[#FAF8F5] border border-[rgba(22,53,42,0.06)] space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#475569]">Feed mensual</span>
                      <span className="font-semibold text-sm tabular-nums text-[#16352A]">{plan.totalFeedPosts} piezas</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#475569]">Historias</span>
                      <span className="font-semibold text-sm tabular-nums text-[#16352A]">{plan.totalStories} totales</span>
                    </div>
                    <div className="pt-3 border-t border-[rgba(22,53,42,0.06)] grid grid-cols-1 gap-2">
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        • {plan.storyFlyers} flyers diseñados<br />
                        • {plan.organicStories} historias orgánicas guiadas
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#16352A]/40">
                      Entregables destacados
                    </p>
                    <ul className="space-y-3.5 text-sm text-[#475569] font-['Inter']">
                      {plan.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#16352A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[rgba(22,53,42,0.10)]">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full inline-flex items-center justify-center gap-2.5 rounded-none px-7 py-4 font-['Inter'] text-[14px] font-bold uppercase tracking-widest transition-all ${
                      isSelected
                        ? 'bg-black text-[#FAF8F5]'
                        : isAutoridad
                        ? 'bg-[#16352A] text-[#FAF8F5] hover:bg-black'
                        : 'bg-transparent border border-[#16352A]/30 text-[#16352A] hover:bg-[#16352A]/5 hover:border-[#16352A]'
                    }`}
                  >
                    <span>{isSelected ? 'Elegido' : 'Seleccionar'}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-[#475569] font-['Inter']">
          <p>* El volumen de publicaciones reemplaza al del plan anterior, no se acumula.</p>
        </div>
      </div>
    </section>
  );
};
