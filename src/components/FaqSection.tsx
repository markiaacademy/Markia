import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/budgetData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">FAQs</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Preguntas frecuentes
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Respuestas precisas a las consultas más habituales sobre pagos, preparación previa, filmaciones y entregables.
          </p>
        </div>

        {/* Accordions */}
        <div className="border-t border-[rgba(22,53,42,0.12)] divide-y divide-[rgba(22,53,42,0.08)]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-content-${index}`;
            const buttonId = `faq-btn-${index}`;

            return (
              <div key={index} className="py-5">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full text-left flex items-start justify-between gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16352A]"
                  >
                    <span className="font-playfair text-lg md:text-xl font-medium text-[#16352A] group-hover:text-black transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 mt-0.5 border border-[rgba(22,53,42,0.15)] group-hover:border-[#16352A] transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 text-[#16352A] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                        strokeWidth={1.25}
                      />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-4 text-sm md:text-[15px] leading-relaxed text-[#475569] font-['Inter'] max-w-3xl"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
