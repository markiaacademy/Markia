export interface PlanItem {
  id: 'presencia' | 'autoridad' | 'premium';
  name: string;
  badge?: string;
  monthlyFee: number;
  initialPayment: number;
  finalPayment: number;
  description: string;
  positioningTag?: string;
  staticPosts: number;
  carousels: number;
  reels: number;
  totalFeedPosts: number;
  totalStories: number;
  storyFlyers: number;
  organicStories: number;
  recordingCoordination: string;
  goalReview: string;
  highlights: string[];
}

export const PLANS: PlanItem[] = [
  {
    id: 'presencia',
    name: 'Presencia',
    monthlyFee: 900,
    initialPayment: 450,
    finalPayment: 450,
    description: 'Gestión profesional para mantener tu perfil activo y estético, comunicando confianza a tus clientes.',
    staticPosts: 4,
    carousels: 2,
    reels: 2,
    totalFeedPosts: 8,
    totalStories: 30,
    storyFlyers: 12,
    organicStories: 18,
    recordingCoordination: 'Coordinación de una jornada mensual de grabación en tu oficina. Producción técnica por separado.',
    goalReview: 'Revisión escrita de objetivos e informe mensual.',
    highlights: [
      '8 publicaciones mensuales en feed',
      '30 historias (12 flyers diseñados + 18 pautas orgánicas)',
      'Coordinación de grabación en oficina',
      'Informe de rendimiento mensual',
      'Adaptación a Instagram y Facebook',
    ],
  },
  {
    id: 'autoridad',
    name: 'Autoridad',
    positioningTag: 'Para fortalecer tu posicionamiento en la zona',
    monthlyFee: 1200,
    initialPayment: 600,
    finalPayment: 600,
    description: 'Estrategia pensada para consolidar el liderazgo de tu inmobiliaria y diferenciarte de la competencia.',
    staticPosts: 4,
    carousels: 4,
    reels: 4,
    totalFeedPosts: 12,
    totalStories: 30,
    storyFlyers: 20,
    organicStories: 10,
    recordingCoordination: 'Coordinación de una jornada mensual de grabación en tu oficina. Producción técnica por separado.',
    goalReview: 'Reunión mensual estratégica de hasta 45 min e informe con recomendaciones.',
    highlights: [
      '12 publicaciones mensuales en feed',
      '30 historias (20 flyers diseñados + 10 pautas orgánicas)',
      'Reunión mensual estratégica (45 min)',
      'Estrategia por público y diferenciales',
      'Coordinación de grabación en oficina',
    ],
  },
  {
    id: 'premium',
    name: 'Impulso · Premium',
    positioningTag: 'Cobertura integral con capacitación y recursos',
    monthlyFee: 1600,
    initialPayment: 800,
    finalPayment: 800,
    description: 'Máximo volumen de contenidos, recursos de valor para tus clientes y capacitación para tu equipo.',
    staticPosts: 4,
    carousels: 6,
    reels: 6,
    totalFeedPosts: 16,
    totalStories: 40,
    storyFlyers: 30,
    organicStories: 10,
    recordingCoordination: 'Coordinación de una jornada mensual de grabación en tu oficina. Producción técnica por separado.',
    goalReview: 'Reunión mensual estratégica de hasta 60 min y una acción mensual de comunicación adicional.',
    highlights: [
      '16 publicaciones mensuales en feed',
      '40 historias (30 flyers diseñados + 10 pautas orgánicas)',
      'Recurso de valor mensual (Ebook, guía o landing)',
      'Capacitación mensual online para agentes',
      'Coordinación de pauta publicitaria',
    ],
  },
];

export interface WebSolutionItem {
  id: 'landing-captacion' | 'landing-lanzamiento' | 'landing-fidelizacion';
  name: string;
  tagline: string;
  description: string;
  timeline: string;
  features: string[];
}

export const WEB_SOLUTIONS: WebSolutionItem[] = [
  {
    id: 'landing-captacion',
    name: 'Landing de Captación & Tasaciones',
    tagline: 'Para captar propietarios y solicitudes de tasación',
    description: 'Diseñada para facilitar que los propietarios soliciten una tasación, ordenando tu propuesta de valor en una página de objetivo único.',
    timeline: '10 a 15 días (estimado)',
    features: [
      'Estructura orientada al contacto directo',
      'Formulario de solicitud de tasación',
      'Derivación directa a WhatsApp',
      'Optimización para navegación móvil',
    ],
  },
  {
    id: 'landing-lanzamiento',
    name: 'Landing de Preventa & Desarrollos',
    tagline: 'Para comercializar emprendimientos y lanzamientos',
    description: 'Página enfocada en presentar un desarrollo inmobiliario específico, facilitando la descarga de materiales y la consulta comercial.',
    timeline: '15 a 21 días (estimado)',
    features: [
      'Presentación visual del emprendimiento',
      'Funcionalidad de descarga de dossier',
      'Formulario de consulta segmentado',
      'Integración básica con WhatsApp',
    ],
  },
  {
    id: 'landing-fidelizacion',
    name: 'Portal de Fidelización & Inversores',
    tagline: 'Para mantener el vínculo con tus clientes frecuentes',
    description: 'Entorno pensado para presentar oportunidades antes de que salgan al mercado masivo y premiar la recomendación de nuevos clientes.',
    timeline: '15 a 20 días (estimado)',
    features: [
      'Sección de oportunidades destacadas',
      'Información exclusiva para inversores',
      'Módulo de programa de referidos',
      'Acceso a reportes de mercado',
    ],
  },
];

export const WEB_PILLARS = [
  {
    title: 'Orden y claridad',
    description: 'Estructuras pensadas para que el visitante no se pierda y encuentre rápidamente lo que busca.',
  },
  {
    title: 'Captación de Propietarios',
    description: 'Propuestas de valor diseñadas para que los propietarios confíen en vender su inmueble con tu firma.',
  },
  {
    title: 'Vínculo con el cliente',
    description: 'Espacios para que tus compradores e inversores se sientan parte de una comunidad con acceso exclusivo.',
  },
];

export const COMPARISON_ROWS = [
  {
    concept: 'Honorario mensual',
    presencia: 'USD 900',
    autoridad: 'USD 1.200',
    premium: 'USD 1.600',
  },
  {
    concept: 'Modalidad de pago',
    presencia: 'USD 450 + 450',
    autoridad: 'USD 600 + 600',
    premium: 'USD 800 + 800',
  },
  {
    concept: 'Posteos estáticos',
    presencia: '4',
    autoridad: '4',
    premium: '4',
  },
  {
    concept: 'Carruseles',
    presencia: '2',
    autoridad: '4',
    premium: '6',
  },
  {
    concept: 'Reels',
    presencia: '2',
    autoridad: '4',
    premium: '6',
  },
  {
    concept: 'Publicaciones en feed',
    presencia: '8',
    autoridad: '12',
    premium: '16',
  },
  {
    concept: 'Historias totales',
    presencia: '30',
    autoridad: '30',
    premium: '40',
  },
  {
    concept: 'Flyers diseñados',
    presencia: '12',
    autoridad: '20',
    premium: '30',
  },
  {
    concept: 'Historias orgánicas guiadas',
    presencia: '18',
    autoridad: '10',
    premium: '10',
  },
  {
    concept: 'Coordinación de grabación',
    presencia: '1 jornada',
    autoridad: '1 jornada',
    premium: '1 jornada',
  },
  {
    concept: 'Reunión estratégica',
    presencia: 'Informe escrito',
    autoridad: '45 min',
    premium: '60 min',
  },
];

export const INCLUDED_SERVICES = [
  {
    title: 'Diagnóstico y Perfil',
    description: 'Analizamos tu presencia actual y optimizamos tu perfil para que transmita solidez desde el primer momento.',
  },
  {
    title: 'Planificación Estratégica',
    description: 'Calendario mensual con ejes de contenido pensados para diferenciarte en el mercado inmobiliario.',
  },
  {
    title: 'Redacción Profesional',
    description: 'Textos adaptados al tono de tu inmobiliaria, priorizando la claridad y el valor real para el seguidor.',
  },
  {
    title: 'Diseño de Identidad',
    description: 'Línea visual contemporánea que respeta y potencia el branding de tu firma.',
  },
  {
    title: 'Edición de Reels',
    description: 'Montaje dinámico de tus videos con subtitulado cuidado y música acorde a la tendencia.',
  },
  {
    title: 'Programación y Reportes',
    description: 'Publicación en Instagram y Facebook con un informe mensual para que veas los resultados de la gestión.',
  },
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico y acuerdos',
    subtitle: 'Semana 1',
    detail: 'Alineamos objetivos, definimos el público y las zonas prioritarias para tu inmobiliaria.',
  },
  {
    step: '02',
    title: 'Preparación y guiones',
    subtitle: '15 días previos',
    detail: 'Redactamos los contenidos y preparamos los materiales. Sin cargo adicional por esta etapa previa.',
    isPreparation: true,
  },
  {
    step: '03',
    title: 'Producción y diseño',
    subtitle: 'Semana de ajuste',
    detail: 'Diseñamos las piezas y realizamos una ronda única de ajustes para asegurar la calidad final.',
  },
  {
    step: '04',
    title: 'Gestión operativa',
    subtitle: 'Mes de trabajo',
    detail: 'Publicamos los contenidos, moderamos comentarios y realizamos el seguimiento estratégico.',
  },
];

export const FAQS = [
  {
    question: '¿Qué incluyen las historias orgánicas guiadas?',
    answer: 'Son pautas e ideas que te damos para que tu equipo capture contenido cotidiano. No son piezas gráficas diseñadas; la dinámica de captura y publicación se acuerda al inicio según tu equipo.',
  },
  {
    question: '¿Cómo funciona la grabación en la oficina?',
    answer: 'Coordinamos una jornada mensual de grabación. Es importante notar que los honorarios del filmmaker, los traslados y la producción técnica se cotizan por separado.',
  },
  {
    question: '¿Las integraciones web están incluidas?',
    answer: 'Las integraciones con CRM, los accesos privados y otras funcionalidades especiales se definen y cotizan según el alcance específico del proyecto.',
  },
  {
    question: '¿Qué pasa con el hosting y el dominio?',
    answer: 'El costo de hosting, dominio y su mantenimiento anual son responsabilidad del cliente, según las condiciones acordadas.',
  },
];

export const CONDITIONS_GROUPS = [
  {
    title: 'Pagos y Plazos',
    items: [
      '50% al iniciar y 50% al finalizar el mes de publicaciones.',
      'Período de preparación de 15 días previo al inicio operativo.',
      'Sin cargo adicional por la etapa de preparación inicial.',
    ],
  },
  {
    title: 'Producción y Alcance',
    items: [
      'Honorarios de filmmaker y producción técnica por separado.',
      'Una ronda de ajustes consolidada por entrega mensual.',
      'Gestión de comentarios una vez por día hábil (Lunes a Viernes).',
    ],
  },
  {
    title: 'Desarrollo Web',
    items: [
      'Plazos de entrega estimados según el alcance y entrega de materiales.',
      'Hosting, dominio y mantenimiento a cargo del cliente.',
      'Funcionalidades especiales se cotizan de forma independiente.',
    ],
  },
];

