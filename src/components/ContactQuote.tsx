import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Check, Copy, AlertCircle, Loader2 } from 'lucide-react';
import { PLANS, WEB_SOLUTIONS } from '../data/budgetData';

interface ContactQuoteProps {
  selectedServiceType?: 'cm' | 'web' | 'ambos' | 'asesoramiento';
  selectedPlanId?: string;
  onServiceSelect?: (serviceType: 'cm' | 'web' | 'ambos' | 'asesoramiento', planOrSolutionId?: string) => void;
}

export const ContactQuote: React.FC<ContactQuoteProps> = ({
  selectedServiceType = 'cm',
  selectedPlanId = 'autoridad',
  onServiceSelect,
}) => {
  const [serviceCategory, setServiceCategory] = useState<'cm' | 'web' | 'ambos' | 'asesoramiento'>(
    selectedServiceType
  );
  const [chosenOption, setChosenOption] = useState<string>(selectedPlanId);

  const [name, setName] = useState('');
  const [realEstate, setRealEstate] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [objective, setObjective] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCategorySwitch = (cat: 'cm' | 'web' | 'ambos' | 'asesoramiento') => {
    setServiceCategory(cat);
    if (cat === 'cm') {
      setChosenOption('autoridad');
    } else if (cat === 'web') {
      setChosenOption('landing-captacion');
    } else if (cat === 'ambos') {
      setChosenOption('integral');
    } else {
      setChosenOption('asesoramiento');
    }
    if (onServiceSelect) {
      onServiceSelect(cat);
    }
  };

  const getServiceDetailsText = () => {
    if (serviceCategory === 'cm') {
      const plan = PLANS.find((p) => p.id === chosenOption) || PLANS[1];
      return `Community Management - Plan ${plan.name} (USD ${plan.monthlyFee}/mes · 50% inicio USD ${plan.initialPayment} + 50% fin USD ${plan.finalPayment})`;
    } else if (serviceCategory === 'web') {
      const sol = WEB_SOLUTIONS.find((w) => w.id === chosenOption) || WEB_SOLUTIONS[0];
      return `Diseño Web - ${sol.name} (${sol.timeline})`;
    } else if (serviceCategory === 'ambos') {
      return 'Servicio Integral (Community Management recurrente + Landing Page de Conversión / Fidelización)';
    } else {
      return 'Asesoramiento personalizado para definir escala y servicios';
    }
  };

  const getProposalSummaryText = () => {
    const serviceDetails = getServiceDetailsText();

    return `SOLICITUD DE PROPUESTA - MARKIA
----------------------------------------
Inmobiliaria: ${realEstate || '[Nombre de la inmobiliaria]'}
Contacto: ${name || '[Nombre del responsable]'}
Email: ${email || '[Correo electrónico]'}
WhatsApp: ${whatsapp || '[No indicado]'}
Servicio de interés: ${serviceDetails}
Objetivo: ${objective || 'Fortalecer la presencia, captación de propietarios y fidelización de clientes'}

CONDICIONES GENERALES:
- Modalidad 50% al iniciar y 50% al finalizar
- 15 días de preparación inicial
- Enfoque arquitectónico y riguroso sin costes ocultos`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getProposalSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error('No se pudo copiar al portapapeles', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !realEstate.trim() || !email.trim()) {
      setErrorMessage('Por favor completá los campos obligatorios marcados con (*).');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      to_email: 'markia.academy@gmail.com',
      from_name: name,
      user_name: name,
      reply_to: email,
      user_email: email,
      real_estate: realEstate,
      inmobiliaria: realEstate,
      whatsapp: whatsapp || 'No especificado',
      telefono: whatsapp || 'No especificado',
      service_type: serviceCategory,
      service_details: getServiceDetailsText(),
      servicio_seleccionado: getServiceDetailsText(),
      objective: objective || 'No especificado',
      mensaje: objective || 'No especificado',
      summary: getProposalSummaryText(),
      resumen_propuesta: getProposalSummaryText(),
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // En entorno de previsualización o si faltan las credenciales en .env
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.info(
          'EmailJS: Configuración lista. Para envíos reales completá VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY en .env.'
        );
      }
      setSubmitStatus('success');
    } catch (err) {
      console.error('Error al enviar la solicitud mediante EmailJS:', err);
      setSubmitStatus('error');
      setErrorMessage(
        'Hubo un problema al enviar la solicitud. Verificá tu conexión o copiá el texto con el botón inferior.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setName('');
    setRealEstate('');
    setEmail('');
    setWhatsapp('');
    setObjective('');
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="formulario-presupuesto" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Iniciar Coordinación</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Solicitar presupuesto
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Seleccioná entre Community Management, Desarrollo Web o una solución integral. Completá el formulario para enviarnos tu solicitud directamente. Te responderemos a la brevedad con la propuesta formal.
          </p>
        </div>

        {/* Centered Form Container */}
        <div className="max-w-3xl mx-auto bg-white border border-[rgba(22,53,42,0.10)] p-8 md:p-10 shadow-xs">
          {submitStatus === 'success' ? (
            <div className="space-y-6 py-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#16352A]/5 flex items-center justify-center border border-[#16352A]/15">
                <Check className="w-7 h-7 text-[#16352A]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair text-2xl font-normal text-[#16352A]">
                  ¡Solicitud enviada con éxito!
                </h3>
                <p className="text-sm text-[#475569] max-w-lg mx-auto font-['Inter'] leading-relaxed">
                  Muchas gracias, <strong className="text-[#16352A]">{name}</strong>. Hemos recibido los datos de{' '}
                  <strong className="text-[#16352A]">{realEstate}</strong> para la solicitud de{' '}
                  <strong className="text-[#16352A]">{getServiceDetailsText()}</strong>. Te responderemos a la brevedad a{' '}
                  <span className="underline text-[#16352A]">{email}</span>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center justify-center gap-2 rounded-none border border-[#16352A] bg-[#16352A] px-6 py-3 font-['Inter'] text-sm font-medium text-[#FAF8F5] hover:bg-[#000000] transition-colors"
                >
                  Enviar otra solicitud
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 rounded-none border border-[rgba(22,53,42,0.2)] bg-transparent px-5 py-3 font-['Inter'] text-sm font-medium text-[#16352A] hover:bg-[#FAF8F5] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#16352A]" />
                      <span>Copia guardada</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#16352A]/70" />
                      <span>Copiar resumen para registro</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Service Type Segmented Selection (Anti-pill rectangular buttons) */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-3">
                  1. Seleccioná el servicio que necesitás
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCategorySwitch('cm')}
                    className={`p-3 text-center border text-xs font-medium transition-all ${
                      serviceCategory === 'cm'
                        ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                        : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                    }`}
                  >
                    Community Management
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch('web')}
                    className={`p-3 text-center border text-xs font-medium transition-all ${
                      serviceCategory === 'web'
                        ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                        : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                    }`}
                  >
                    Diseño Web
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch('ambos')}
                    className={`p-3 text-center border text-xs font-medium transition-all ${
                      serviceCategory === 'ambos'
                        ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                        : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                    }`}
                  >
                    CM + Web Integral
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch('asesoramiento')}
                    className={`p-3 text-center border text-xs font-medium transition-all ${
                      serviceCategory === 'asesoramiento'
                        ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                        : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                    }`}
                  >
                    Asesoramiento
                  </button>
                </div>
              </div>

              {/* Sub-options for Community Management */}
              {serviceCategory === 'cm' && (
                <div className="pt-1">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-2.5">
                    Plan mensual de Community Management:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {PLANS.map((plan) => {
                      const isSelected = chosenOption === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setChosenOption(plan.id)}
                          className={`text-left p-3.5 border transition-all ${
                            isSelected
                              ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                              : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-playfair text-sm font-medium">{plan.name}</span>
                            <span className={`text-xs tabular-nums ${isSelected ? 'text-[#E8D0A0]' : 'text-[#475569]'}`}>
                              ${plan.monthlyFee}
                            </span>
                          </div>
                          <span className={`block text-[10px] mt-1 ${isSelected ? 'text-[#FAF8F5]/70' : 'text-[#475569]'}`}>
                            {plan.totalFeedPosts} posts · {plan.totalStories} historias
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Sub-options for Web Design */}
              {serviceCategory === 'web' && (
                <div className="pt-1">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-2.5">
                    Formato de landing page:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {WEB_SOLUTIONS.map((sol) => {
                      const isSelected = chosenOption === sol.id;
                      return (
                        <button
                          key={sol.id}
                          type="button"
                          onClick={() => setChosenOption(sol.id)}
                          className={`text-left p-3.5 border transition-all ${
                            isSelected
                              ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A]'
                              : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A]'
                          }`}
                        >
                          <span className="font-playfair text-sm font-medium block">{sol.name}</span>
                          <span className={`block text-[10px] mt-1 ${isSelected ? 'text-[#E8D0A0]' : 'text-[#475569]'}`}>
                            {sol.timeline}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Combined notice */}
              {serviceCategory === 'ambos' && (
                <div className="p-4 bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] text-xs text-[#475569] leading-relaxed">
                  <p className="font-medium text-[#16352A] mb-1">Estrategia integral (Redes + Landing Page de Conversión):</p>
                  <p>Coordinaremos la puesta en marcha de tu landing page de captación o fidelización junto con la planificación mensual de contenidos y filmación en oficina para una identidad unificada.</p>
                </div>
              )}

              {/* Advisory notice */}
              {serviceCategory === 'asesoramiento' && (
                <div className="p-4 bg-[#FAF8F5] border border-[rgba(22,53,42,0.12)] text-xs text-[#475569] leading-relaxed">
                  <p className="font-medium text-[#16352A] mb-1">Relevamiento inicial sin compromiso:</p>
                  <p>Analizaremos tu público objetivo, zona y objetivos de captación o fidelización para recomendarte la combinación más eficiente.</p>
                </div>
              )}

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label htmlFor="input-name" className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Martín Larrea"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] placeholder:text-[#475569]/50 focus:border-[#16352A] focus:outline-none focus:ring-1 focus:ring-[#16352A]"
                  />
                </div>

                <div>
                  <label htmlFor="input-realestate" className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-1.5">
                    Inmobiliaria *
                  </label>
                  <input
                    id="input-realestate"
                    type="text"
                    required
                    value={realEstate}
                    onChange={(e) => setRealEstate(e.target.value)}
                    placeholder="Ej. Inmobiliaria Norte"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] placeholder:text-[#475569]/50 focus:border-[#16352A] focus:outline-none focus:ring-1 focus:ring-[#16352A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="input-email" className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-1.5">
                    Correo electrónico *
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contacto@inmobiliaria.com"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] placeholder:text-[#475569]/50 focus:border-[#16352A] focus:outline-none focus:ring-1 focus:ring-[#16352A]"
                  />
                </div>

                <div>
                  <label htmlFor="input-whatsapp" className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-1.5">
                    WhatsApp (opcional)
                  </label>
                  <input
                    id="input-whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] placeholder:text-[#475569]/50 focus:border-[#16352A] focus:outline-none focus:ring-1 focus:ring-[#16352A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-objective" className="block text-xs uppercase tracking-wider font-semibold text-[#16352A] mb-1.5">
                  Objetivo principal o detalles adicionales (opcional)
                </label>
                <textarea
                  id="input-objective"
                  rows={3}
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="Ej. Buscamos profesionalizar las redes de la firma y crear una landing page para captar propietarios y fidelizar inversores..."
                  className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] placeholder:text-[#475569]/50 focus:border-[#16352A] focus:outline-none focus:ring-1 focus:ring-[#16352A]"
                />
              </div>

              {/* Error Message if any */}
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 space-y-3">
                {/* Main Enviar Solicitud Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-8 py-4 font-['Inter'] text-[15px] font-medium tracking-[-0.01em] text-[#FAF8F5] transition-all hover:border-[#000000] hover:bg-[#000000] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A] shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#E8D0A0]" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#E8D0A0]" />
                      <span>Enviar solicitud</span>
                    </>
                  )}
                </button>

                {/* Subtle Copy Backup Action */}
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-xs text-[#475569] hover:text-[#16352A] inline-flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#16352A]" />
                        <span className="font-medium text-[#16352A]">¡Datos copiados al portapapeles!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 opacity-60" />
                        <span>O copiar el texto de la solicitud al portapapeles</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
