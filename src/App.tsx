import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { IncludedServices } from './components/IncludedServices';
import { Plans } from './components/Plans';
import { ComparisonTable } from './components/ComparisonTable';
import { WebDesignSection } from './components/WebDesignSection';
import { AboutMarkia } from './components/AboutMarkia';
import { ProcessAndPreparation } from './components/ProcessAndPreparation';
import { Conditions } from './components/Conditions';
import { FaqSection } from './components/FaqSection';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [serviceType, setServiceType] = useState<'cm' | 'web' | 'ambos' | 'asesoramiento'>('cm');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('autoridad');

  const handleSelectPlan = (
    planId: 'presencia' | 'autoridad' | 'premium'
  ) => {
    setServiceType('cm');
    setSelectedPlanId(planId);
    const formElement = document.getElementById('formulario-presupuesto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectWebSolution = (solutionId: string) => {
    setServiceType('web');
    setSelectedPlanId(solutionId);
    const formElement = document.getElementById('formulario-presupuesto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#16352A] flex flex-col font-['Inter']">
      <Header />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Resumen breve de los dos servicios */}
        <ServicesOverview />

        {/* 3. Qué incluye la gestión de redes */}
        <IncludedServices />

        {/* 5. Planes de Community Management */}
        <Plans
          onSelectPlan={handleSelectPlan}
          selectedPlanId={serviceType === 'cm' ? selectedPlanId : undefined}
        />

        {/* Collapsible Comparison Table */}
        <ComparisonTable onSelectPlan={handleSelectPlan} />

        {/* 6. Diseño y desarrollo web */}
        <WebDesignSection onSelectWebSolution={handleSelectWebSolution} />

        {/* 7. Quién está detrás de MARKIA */}
        <AboutMarkia />

        {/* 8. Proceso de trabajo */}
        <ProcessAndPreparation />

        {/* 9. Preguntas frecuentes */}
        <FaqSection />

        {/* 9. Condiciones */}
        <Conditions />

        {/* 10. Formulario de presupuesto */}
        <ContactQuote
          selectedServiceType={serviceType}
          selectedPlanId={selectedPlanId}
          onServiceSelect={(type, id) => {
            setServiceType(type);
            if (id) setSelectedPlanId(id);
          }}
        />
      </main>

      <Footer />

      {/* Floating Actions */}
      <WhatsAppButton />
    </div>
  );
}
