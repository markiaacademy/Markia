import React from 'react';

interface MarkiaLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  width?: number;
}

/**
 * MARKIA Official Isologo Component
 * Uses the authentic logo file provided with transparent background.
 * Aspect ratio: 761 / 362 (mandatory proportion, object-fit contain).
 * Dark variant: Verde on Lino (#16352A)
 * Light variant: Lino on Negro (#FAF8F5)
 */
export const MarkiaLogo: React.FC<MarkiaLogoProps> = ({
  variant = 'dark',
  className = '',
  width = 104,
}) => {
  const isDark = variant === 'dark';
  const logoSrc = isDark ? '/markia-logo-verde.png' : '/markia-logo-light.png';

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: `${width}px`,
        aspectRatio: '761 / 362',
      }}
    >
      <img
        src={logoSrc}
        alt="MARKIA"
        className="w-full h-full object-contain select-none pointer-events-none"
        style={{
          aspectRatio: '761 / 362',
          objectFit: 'contain',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
