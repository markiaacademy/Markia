import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
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
    let defaultOption = '';
    if (cat === 'cm') defaultOption = 'autoridad';
    else if (cat === 'web') defaultOption = 'landing-captacion';
    else if (cat === 'ambos') defaultOption = 'integral';
    else defaultOption = 'asesoramiento';
    
    setChosenOption(defaultOption);
    if (onServiceSelect) {
      onServiceSelect(cat, defaultOption);
    }
  };

  const getServiceDetailsText = () => {
    if (serviceCategory === 'cm') {
      const plan = PLANS.find((p) => p.id === chosenOption) || PLANS[1];
      return `Community Management - Plan ${plan.name} (USD ${plan.monthlyFee}/mes · Inicial USD ${plan.initialPayment} + Final USD ${plan.finalPayment})`;
    } else if (serviceCategory === 'web') {
      const sol = WEB_SOLUTIONS.find((w) => w.id === chosenOption) || WEB_SOLUTIONS[0];
      return `Diseño Web - ${sol.name}`;
    } else if (serviceCategory === 'ambos') {
      return 'Servicio Integral (Redes + Landing Page)';
    } else {
      return 'Asesoramiento personalizado';
    }
  };

  const getProposalSummaryText = () => {
    const serviceDetails = getServiceDetailsText();

    return `SOLICITUD DE PRESUPUESTO - MARKIA
----------------------------------------
Inmobiliaria: ${realEstate || '[Nombre]'}
Contacto: ${name || '[Nombre]'}
Email: ${email || '[Email]'}
WhatsApp: ${whatsapp || '[No indicado]'}
Servicio elegido: ${serviceDetails}
Objetivo: ${objective || '[No indicado]'}

CONDICIONES:
- 50% al iniciar y 50% al finalizar
- 15 días de preparación inicial
- Producción técnica por separado`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getProposalSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error('Error al copiar', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedRealEstate = realEstate.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedRealEstate || !trimmedEmail) {
      setErrorMessage('Por favor completá los campos obligatorios (*).');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const SERVICE_ID = 'service_5fyu33a';
    const TEMPLATE_ID = 'template_j5excm7';
    const PUBLIC_KEY = 'qLX4T__AKzH3vnaqC';

    const templateParams = {
      to_email: 'markia.academy@gmail.com',
      from_name: trimmedName,
      user_name: trimmedName,
      reply_to: trimmedEmail,
      user_email: trimmedEmail,
      real_estate: trimmedRealEstate,
      inmobiliaria: trimmedRealEstate,
      whatsapp: (whatsapp || 'No especificado').trim(),
      service_type: serviceCategory,
      service_details: getServiceDetailsText(),
      objective: (objective || 'No especificado').trim(),
      summary: getProposalSummaryText(),
    };

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
        const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        console.log('Éxito EmailJS:', result.status, result.text);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.warn('Faltan claves de EmailJS, simulando éxito.');
      }
      setSubmitStatus('success');
    } catch (err: any) {
      console.error('Error EmailJS:', err);
      setSubmitStatus('error');
      const detail = err?.text || err?.message || 'Error desconocido';
      setErrorMessage(`Error al enviar: ${detail}.`);
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

  // Sync chosenOption with selectedPlanId prop
  React.useEffect(() => {
    if (selectedPlanId) {
      setChosenOption(selectedPlanId);
    }
  }, [selectedPlanId]);

  // Sync serviceCategory with selectedServiceType prop
  React.useEffect(() => {
    if (selectedServiceType) {
      setServiceCategory(selectedServiceType);
    }
  }, [selectedServiceType]);

  return (
    <section id="formulario-presupuesto" className="py-20 md:py-28 border-t border-[rgba(22,53,42,0.08)] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8D0A0]" aria-hidden="true" />
            <span className="editorial-overline">Iniciar consulta</span>
          </div>

          <h2 className="section-title text-[#16352A]">
            Solicitar presupuesto
          </h2>

          <p className="text-[16px] leading-relaxed text-[#475569] font-['Inter']">
            Completá los datos de tu inmobiliaria. Te enviaremos una propuesta formal ajustada a tus necesidades y objetivos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-[rgba(22,53,42,0.10)] p-8 md:p-10 shadow-xs rounded-3xl">
          {submitStatus === 'success' ? (
            <div className="space-y-6 py-6 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#16352A]/5 flex items-center justify-center border border-[#16352A]/15">
                <Check className="w-7 h-7 text-[#16352A]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-playfair text-2xl font-normal text-[#16352A]">
                  Solicitud enviada
                </h3>
                <p className="text-sm text-[#475569] max-w-lg mx-auto font-['Inter'] leading-relaxed">
                  Gracias, <strong className="text-[#16352A]">{name}</strong>. Hemos recibido tu interés en <strong className="text-[#16352A]">{getServiceDetailsText()}</strong> para <strong className="text-[#16352A]">{realEstate}</strong>. Te contactaremos pronto.
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center justify-center gap-2 rounded-none bg-[#16352A] px-6 py-3 font-['Inter'] text-sm font-medium text-[#FAF8F5] hover:bg-black transition-colors"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#16352A] mb-4">
                  1. ¿Qué servicio te interesa?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'cm', label: 'Redes Sociales' },
                    { id: 'web', label: 'Diseño Web' },
                    { id: 'ambos', label: 'Integral' },
                    { id: 'asesoramiento', label: 'Asesoramiento' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySwitch(cat.id as any)}
                      className={`p-3 text-center border text-[11px] font-bold uppercase tracking-tight transition-all ${
                        serviceCategory === cat.id
                          ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A] rounded-xl'
                          : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A] rounded-xl'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Sub-options */}
              {serviceCategory === 'cm' && (
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#475569]">
                    Plan de Community Management:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PLANS.map((plan) => {
                      const isSelected = chosenOption === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setChosenOption(plan.id)}
                          className={`text-left p-4 border transition-all ${
                            isSelected
                              ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A] rounded-xl'
                              : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A] rounded-xl'
                          }`}
                        >
                          <span className="font-playfair text-sm font-medium block">{plan.name}</span>
                          <span className={`block text-[11px] mt-1 tabular-nums ${isSelected ? 'text-[#E8D0A0]' : 'text-[#475569]'}`}>
                            USD {plan.monthlyFee} / mes
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {serviceCategory === 'web' && (
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#475569]">
                    Tipo de solución web:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {WEB_SOLUTIONS.map((sol) => {
                      const isSelected = chosenOption === sol.id;
                      return (
                        <button
                          key={sol.id}
                          type="button"
                          onClick={() => setChosenOption(sol.id)}
                          className={`text-left p-4 border transition-all ${
                            isSelected
                              ? 'bg-[#16352A] text-[#FAF8F5] border-[#16352A] rounded-xl'
                              : 'bg-[#FAF8F5] text-[#16352A] border-[rgba(22,53,42,0.15)] hover:border-[#16352A] rounded-xl'
                          }`}
                        >
                          <span className="font-playfair text-sm font-medium block leading-snug">{sol.name}</span>
                          <span className={`block text-[10px] mt-1 uppercase tracking-wider font-bold ${isSelected ? 'text-[#E8D0A0]' : 'text-[#475569]'}`}>
                            Cotización a medida
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 3. Personal Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="input-name" className="block text-xs uppercase tracking-wider font-bold text-[#16352A]">
                    Nombre y Apellido *
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] focus:border-[#16352A] focus:outline-none rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="input-realestate" className="block text-xs uppercase tracking-wider font-bold text-[#16352A]">
                    Inmobiliaria *
                  </label>
                  <input
                    id="input-realestate"
                    type="text"
                    required
                    value={realEstate}
                    onChange={(e) => setRealEstate(e.target.value)}
                    placeholder="Nombre de la firma"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] focus:border-[#16352A] focus:outline-none rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="input-email" className="block text-xs uppercase tracking-wider font-bold text-[#16352A]">
                    Email *
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contacto@inmobiliaria.com"
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] focus:border-[#16352A] focus:outline-none rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="input-whatsapp" className="block text-xs uppercase tracking-wider font-bold text-[#16352A]">
                    WhatsApp
                  </label>
                  <input
                    id="input-whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+54 9 ..."
                    className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] focus:border-[#16352A] focus:outline-none rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="input-objective" className="block text-xs uppercase tracking-wider font-bold text-[#16352A]">
                  Comentarios u objetivos (Opcional)
                </label>
                <textarea
                  id="input-objective"
                  rows={3}
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="Contanos brevemente qué buscás resolver..."
                  className="w-full bg-[#FAF8F5] border border-[rgba(22,53,42,0.18)] px-4 py-3 text-sm text-[#16352A] focus:border-[#16352A] focus:outline-none resize-none rounded-xl"
                />
              </div>

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#16352A] px-8 py-4 font-['Inter'] text-[15px] font-bold uppercase tracking-wider text-[#FAF8F5] transition-all hover:bg-black disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#E8D0A0]" strokeWidth={1.25} />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <span>Enviar solicitud</span>
                  )}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-[11px] uppercase tracking-widest font-bold text-[#475569] hover:text-[#16352A] transition-colors"
                  >
                    {copied ? 'Copiado al portapapeles' : 'Copiar resumen para mi registro'}
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
