import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { IncludedServices } from './components/IncludedServices';
import { Plans } from './components/Plans';
import { ComparisonTable } from './components/ComparisonTable';
import { WebDesignSection } from './components/WebDesignSection';
import { ProcessAndPreparation } from './components/ProcessAndPreparation';
import { Conditions } from './components/Conditions';
import { FaqSection } from './components/FaqSection';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';

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
      {/* Top Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Overview of the Two Core Services */}
        <ServicesOverview />

        {/* 3. Service 01: Community Management - Included Deliverables & Filmmaker */}
        <IncludedServices />

        {/* 4. Community Management Monthly Plans */}
        <Plans
          onSelectPlan={handleSelectPlan}
          selectedPlanId={serviceType === 'cm' ? selectedPlanId : undefined}
        />

        {/* 5. Detailed Metric Comparison Table for CM */}
        <ComparisonTable onSelectPlan={handleSelectPlan} />

        {/* 6. Service 02: Real Estate Web Design & Landing Pages */}
        <WebDesignSection onSelectWebSolution={handleSelectWebSolution} />

        {/* 7. Methodology & 15-day Initial Preparation */}
        <ProcessAndPreparation />

        {/* 8. Transparent Collaboration Guidelines */}
        <Conditions />

        {/* 9. Frequently Asked Questions (Accessible Accordions) */}
        <FaqSection />

        {/* 10. Interactive Proposal Form / Quote Builder */}
        <ContactQuote
          selectedServiceType={serviceType}
          selectedPlanId={selectedPlanId}
          onServiceSelect={(type, id) => {
            setServiceType(type);
            if (id) setSelectedPlanId(id);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
