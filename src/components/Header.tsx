import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MarkiaLogo } from './MarkiaLogo';

interface HeaderProps {
  onSelectPlan?: (planId: 'presencia' | 'autoridad' | 'premium' | 'asesoramiento') => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectPlan }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Community Management', href: '#community-management' },
    { label: 'Diseño Web', href: '#diseno-web' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[rgba(22,53,42,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Isologo only (no text 'markia' in menu) */}
        <div className="flex items-center shrink-0">
          <a
            href="#top"
            className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A]"
            aria-label="MARKIA - Ir al inicio"
          >
            <MarkiaLogo variant="dark" width={92} />
            <span className="sr-only">MARKIA</span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-[14px] font-medium tracking-tight text-[#475569]"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[#16352A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16352A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="#formulario-presupuesto"
            className="inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[15px] font-medium tracking-[-0.01em] text-[#FAF8F5] transition-colors hover:border-[#000000] hover:bg-[#000000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16352A]"
          >
            <span>Empezar</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#E8D0A0]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-[#16352A] border border-[rgba(22,53,42,0.15)] rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#16352A]"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-b border-[rgba(22,53,42,0.12)] bg-[#FAF8F5] px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-[16px] font-medium text-[#16352A] border-b border-[rgba(22,53,42,0.06)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#planes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-none border border-[#16352A] bg-[#16352A] px-7 py-3.5 font-['Inter'] text-[15px] font-medium text-[#FAF8F5] transition-colors hover:bg-black"
            >
              <span>Empezar</span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#E8D0A0]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
