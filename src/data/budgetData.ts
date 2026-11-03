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
  commentManagement: string;
  valueResource: string | boolean;
  agentTraining: string | boolean;
  adCoordination: string | boolean;
  highlights: string[];
}

export const PLANS: PlanItem[] = [
  {
    id: 'presencia',
    name: 'Presencia',
    monthlyFee: 900,
    initialPayment: 450,
    finalPayment: 450,
    description: 'Gestión constante y profesional para mantener el perfil activo, estético y confiable.',
    staticPosts: 4,
    carousels: 2,
    reels: 2,
    totalFeedPosts: 8,
    totalStories: 30,
    storyFlyers: 12,
    organicStories: 18,
    recordingCoordination: '1 mensual en oficina',
    goalReview: 'Revisión escrita de objetivos',
    commentManagement: 'Incluida (días hábiles)',
    valueResource: false,
    agentTraining: false,
    adCoordination: false,
    highlights: [
      '8 publicaciones mensuales en feed',
      '30 historias (12 diseñadas + 18 pautas orgánicas)',
      '1 coordinación mensual de grabación en oficina',
      'Revisión escrita de objetivos e informe mensual',
      'Adaptación de contenido a Instagram y Facebook',
    ],
  },
  {
    id: 'autoridad',
    name: 'Autoridad',
    positioningTag: 'Propuesta para fortalecer el posicionamiento',
    monthlyFee: 1200,
    initialPayment: 600,
    finalPayment: 600,
    description: 'Estrategia orientada a consolidar el liderazgo de la inmobiliaria en su zona de influencia.',
    staticPosts: 4,
    carousels: 4,
    reels: 4,
    totalFeedPosts: 12,
    totalStories: 30,
    storyFlyers: 20,
    organicStories: 10,
    recordingCoordination: '1 mensual en oficina',
    goalReview: 'Estrategia por público, zona y diferenciales, reunión mensual de hasta 45 min e informe con recomendaciones',
    commentManagement: 'Incluida (días hábiles)',
    valueResource: false,
    agentTraining: false,
    adCoordination: false,
    highlights: [
      '12 publicaciones mensuales en feed (4 reels, 4 carruseles, 4 estáticos)',
      '30 historias (20 flyers diseñados + 10 pautas orgánicas)',
      'Reunión mensual estratégica de hasta 45 minutos',
      'Estrategia por público, zona y diferenciales',
      '1 coordinación de grabación en oficina e informe con recomendaciones',
    ],
  },
  {
    id: 'premium',
    name: 'Impulso · Premium',
    positioningTag: 'Cobertura integral con recursos editoriales y capacitación',
    monthlyFee: 1600,
    initialPayment: 800,
    finalPayment: 800,
    description: 'Máximo volumen de contenidos, recursos de captación y capacitación especializada para el equipo.',
    staticPosts: 4,
    carousels: 6,
    reels: 6,
    totalFeedPosts: 16,
    totalStories: 30,
    storyFlyers: 30,
    organicStories: 0,
    recordingCoordination: '1 mensual en oficina',
    goalReview: 'Reunión mensual de hasta 60 min en reemplazo de la anterior y una acción mensual de comunicación dentro del volumen',
    commentManagement: 'Incluida (días hábiles)',
    valueResource: 'Guía, ebook (hasta 8 págs), checklist o landing de 1 página a elección',
    agentTraining: 'Capacitación online mensual (hasta 60 min) con material y preguntas',
    adCoordination: 'Coordinación publicitaria con especialista en pauta',
    highlights: [
      '16 publicaciones mensuales en feed (6 reels, 6 carruseles, 4 estáticos)',
      '30 historias 100% producidas en flyers de alto impacto',
      '1 recurso de valor mensual: ebook, guía, checklist o landing page',
      '1 capacitación mensual online de hasta 60 min para agentes',
      'Coordinación publicitaria y reunión mensual de 60 min',
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
    tagline: 'Conversión directa para captar propietarios y tasaciones exclusivas',
    description: 'Embudo de conversión de una página diseñado para transformar visitas en solicitudes de tasación y captaciones en exclusiva, optimizado para tráfico de pauta publicitaria (Meta Ads y Google Ads).',
    timeline: '10 a 15 días de desarrollo',
    features: [
      'Estructura de alta conversión con llamada a la acción (CTA) prioritaria',
      'Calculadora o formulario interactivo de solicitud de tasación',
      'Derivación directa e inmediata a WhatsApp Business del tasador',
      'Optimización técnica de velocidad para tráfico pago móvil',
    ],
  },
  {
    id: 'landing-lanzamiento',
    name: 'Landing de Preventa & Desarrollos',
    tagline: 'Página monoproducto para comercializar emprendimientos en pozo',
    description: 'Página monoproducto de alto impacto visual orientada a captar inversores y compradores calificados para desarrollos específicos, maximizando reservas previas y consultas comerciales.',
    timeline: '15 a 21 días de desarrollo',
    features: [
      'Narrativa inmersiva para destacar terminaciones y rentabilidad',
      'Visualizador interactivo de plantas y tipologías destacadas',
      'Descarga de dossier comercial y carpeta técnica con validación de datos',
      'Formulario de preventa segmentado por ticket de inversión',
      'Integración con WhatsApp y CRM para seguimiento comercial rápido',
    ],
  },
  {
    id: 'landing-fidelizacion',
    name: 'Portal de Fidelización & Club de Inversores',
    tagline: 'Retención de clientes históricos, recompras y programa de referidos',
    description: 'Página exclusiva para fidelizar a compradores y propietarios pasados, presentándoles oportunidades antes de salir al mercado general y premiando la recomendación de nuevos clientes.',
    timeline: '15 a 20 días de desarrollo',
    features: [
      'Sección privada o acceso por invitación para clientes VIP',
      'Presentación de oportunidades off-market con prioridad temporal',
      'Módulo de programa de referidos para incentivar recomendaciones',
      'Acceso a reportes trimestrales de mercado e informes de valor',
    ],
  },
];

export const WEB_PILLARS = [
  {
    title: 'Conversión Directa Sin Fricción',
    description: 'Estructuras de objetivo único diseñadas para evitar la dispersión de los catálogos masivos y guiar al visitante directo hacia la acción comercial.',
  },
  {
    title: 'Captación de Propietarios',
    description: 'Formularios inteligentes y propuestas de valor pensadas para convencer a propietarios exigentes de vender su inmueble en exclusiva con tu firma.',
  },
  {
    title: 'Fidelización & Recompra',
    description: 'Entornos para mantener cautiva a tu cartera de compradores e inversores con accesos exclusivos y programas de recomendación boca a boca.',
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
    presencia: 'USD 450 + USD 450',
    autoridad: 'USD 600 + USD 600',
    premium: 'USD 800 + USD 800',
  },
  {
    concept: 'Posteos estáticos',
    presencia: '4',
    autoridad: '4',
    premium: '4',
  },
  {
    concept: 'Carruseles (hasta 6 placas)',
    presencia: '2',
    autoridad: '4',
    premium: '6',
  },
  {
    concept: 'Reels (hasta 60s edición)',
    presencia: '2',
    autoridad: '4',
    premium: '6',
  },
  {
    concept: 'Total de publicaciones en feed',
    presencia: '8',
    autoridad: '12',
    premium: '16',
  },
  {
    concept: 'Historias totales',
    presencia: '30',
    autoridad: '30',
    premium: '30',
  },
  {
    concept: 'Flyers diseñados para historias',
    presencia: '12',
    autoridad: '20',
    premium: '30',
  },
  {
    concept: 'Historias orgánicas guiadas',
    presencia: '18',
    autoridad: '10',
    premium: '0',
  },
  {
    concept: 'Coordinación de grabación en oficina',
    presencia: '1 mensual',
    autoridad: '1 mensual',
    premium: '1 mensual',
  },
  {
    concept: 'Revisión de objetivos y reunión',
    presencia: 'Revisión escrita',
    autoridad: 'Reunión hasta 45 min',
    premium: 'Reunión hasta 60 min + acción',
  },
  {
    concept: 'Gestión de comentarios (días hábiles)',
    presencia: 'Incluida',
    autoridad: 'Incluida',
    premium: 'Incluida',
  },
  {
    concept: 'Recurso de valor mensual',
    presencia: 'No',
    autoridad: 'No',
    premium: 'Sí (guía, ebook, checklist o landing)',
  },
  {
    concept: 'Capacitación mensual para agentes',
    presencia: 'No',
    autoridad: 'No',
    premium: 'Sí (online hasta 60 min)',
  },
  {
    concept: 'Coordinación de pauta publicitaria',
    presencia: 'No',
    autoridad: 'No',
    premium: 'Sí (con especialista)',
  },
];

export const INCLUDED_SERVICES = [
  {
    title: 'Diagnóstico & Perfil',
    description: 'Diagnóstico inicial integral y optimización arquitectónica del perfil para transmitir solidez desde el primer contacto.',
  },
  {
    title: 'Planificación Estratégica',
    description: 'Calendario editorial mensual con ejes de contenido, diferenciación de mercado y enfoque de captación y venta.',
  },
  {
    title: 'Redacción & Copywriting',
    description: 'Textos profesionales adaptados al tono de la inmobiliaria, sin fórmulas predecibles ni lenguaje publicitario vacío.',
  },
  {
    title: 'Diseño Gráfico & Estético',
    description: 'Línea visual contemporánea alineada al branding book de la firma y público objetivo de cada inmobiliaria.',
  },
  {
    title: 'Edición de Reels',
    description: 'Montaje audiovisual de reels de hasta 60 segundos con cortes dinámicos, música acorde y subtitulado cuidado.',
  },
  {
    title: 'Programación & Distribución',
    description: 'Publicación en Instagram y adaptación simultánea del mismo contenido a Facebook en horarios de mayor impacto.',
  },
  {
    title: 'Informe Mensual',
    description: 'Reporte consolidado de métricas, alcance e interacciones con conclusiones claras para guiar el siguiente período.',
  },
  {
    title: 'Moderación de Comentarios',
    description: 'Revisión una vez por día hábil (lunes a viernes) en publicaciones del mes para mantener el canal cuidado y atento.',
  },
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico y acuerdos iniciales',
    subtitle: 'Semana 1',
    detail: 'Alineación de objetivos de marca, relevamiento de público y zonas prioritarias, confirmación del servicio y pautas de trabajo.',
  },
  {
    step: '02',
    title: 'Preparación inicial y coordinación de grabación / wireframes',
    subtitle: '15 días previos',
    detail: 'Planificación editorial del mes o arquitectura de la web, redacción de contenidos, guiones y preparación de materiales.',
    isPreparation: true,
  },
  {
    step: '03',
    title: 'Producción, diseño y ronda de ajustes',
    subtitle: 'Semana de aprobación',
    detail: 'Consolidación de piezas visuales o prototipo interactivo de la web para una ronda única y eficiente de ajustes.',
  },
  {
    step: '04',
    title: 'Publicación / Lanzamiento y seguimiento',
    subtitle: 'Mes operativo',
    detail: 'Difusión de contenidos en redes o puesta en marcha del sitio web con medición de interacción y soporte continuo.',
  },
];

export const FAQS = [
  {
    question: '¿Puedo contratar Community Management y Diseño Web en conjunto?',
    answer: 'Sí. De hecho, es la fórmula recomendada para inmobiliarias que buscan un posicionamiento integral: las redes sociales (Instagram y Facebook) construyen autoridad, captan la atención y derivan a los clientes cualificados hacia una web inmobiliaria moderna que convierte las visitas en contactos directos de tasación o compra.',
  },
  {
    question: '¿Qué implica el período de 15 días de preparación inicial?',
    answer: 'Antes de iniciar el mes de publicaciones o la fase de código de un sitio web, contemplamos 15 días de preparación a partir de la recepción del pago inicial y los materiales necesarios provistos por la inmobiliaria. Este tiempo permite diagnosticar el perfil, elaborar el calendario editorial, redactar los guiones o estructurar los wireframes del sitio web sin improvisaciones ni retrasos.',
  },
  {
    question: '¿Qué cubre la sesión de grabación en oficina y qué queda por separado?',
    answer: 'Incluye la planificación de los contenidos a registrar, la confección de guiones y la coordinación de 1 sesión mensual de filmación en las oficinas de la inmobiliaria. Los honorarios del filmmaker, los traslados y los costos técnicos de producción corren por separado. La duración de la sesión se acuerda previamente con el equipo.',
  },
  {
    question: '¿En qué consiste el servicio de Diseño Web para inmobiliarias?',
    answer: 'Nos especializamos exclusivamente en landing pages de alto impacto para convertir y fidelizar clientes: embudos para captación de propietarios y solicitudes de tasación en exclusiva, páginas monoproducto para lanzamientos de desarrollos en preventa, y entornos privados para fidelizar a tu cartera de inversores. No desarrollamos catálogos masivos dispersos; priorizamos páginas de objetivo único donde cada visita se transforma en una oportunidad de negocio concreta.',
  },
  {
    question: '¿Qué incluye la gestión de comentarios en las redes sociales?',
    answer: 'Revisión y respuesta estándar una vez por día hábil, de lunes a viernes, sobre los posteos del feed del mes activo. No incluye atención de mensajes directos (DMs), negociación comercial ni coordinación de visitas a propiedades.',
  },
  {
    question: '¿En qué consiste el recurso de valor mensual del plan Impulso · Premium?',
    answer: 'La inmobiliaria puede elegir mensualmente un recurso de captación: una guía temática, un ebook de hasta 8 páginas, un checklist descargable o una landing page de una página con estructura acordada. Incluye enfoque estratégico, redacción, diseño y una ronda de ajustes con datos validados.',
  },
  {
    question: '¿Cuáles son las responsabilidades técnicas en el desarrollo web?',
    answer: 'El costo de hosting, contratación del servidor, registro y renovación anual del dominio quedan a cargo de la inmobiliaria. MARKIA entrega el desarrollo funcionando y optimizado, brindando las especificaciones de hosting necesarias.',
  },
];

export const CONTRACT_CONDITIONS = [
  'Modalidad de pago: 50% al iniciar los trabajos y 50% al finalizar el mes de publicaciones o la entrega del desarrollo web.',
  'Presencia: USD 450 + USD 450 | Autoridad: USD 600 + USD 600 | Impulso · Premium: USD 800 + USD 800.',
  'Período de preparación inicial de 15 días previos al inicio operativo o de publicaciones, computable desde la acreditación del pago inicial y entrega de materiales.',
  'Sin cargo inicial adicional por la etapa de preparación previa.',
  'Honorarios del filmmaker, traslados y producción técnica de grabación por separado.',
  'La duración de la sesión de grabación en oficina se acuerda previamente.',
  'Honorarios del especialista en pauta e inversión publicitaria en Meta Ads por separado.',
  'En desarrollos web y landing pages: hosting, contratación, mantenimiento y renovación de dominio a cargo de la inmobiliaria.',
  'Integraciones técnicas posteriores con CRMs o mantenimientos continuos no contemplados se cotizan por separado.',
  'Placas o piezas adicionales tendrán un valor informado y aprobado con anterioridad a su producción.',
  'Otros contenidos o servicios adicionales se cotizan con aprobación previa.',
  'Carruseles de hasta 6 placas y reels de hasta 60 segundos con edición estándar.',
  'Una ronda consolidada de ajustes por entrega mensual o entrega de fase web.',
  'Cada historia cuenta individualmente; 30 historias no implica necesariamente una publicación diaria.',
  'Gestión de comentarios: revisión una vez por día hábil (lunes a viernes). No incluye mensajes privados ni coordinación de visitas.',
  'Volumen de comentarios convenido al inicio y revisable en caso de aumento significativo.',
  'El cliente aporta información, materiales y autorizaciones en los plazos convenidos.',
  'El calendario está supeditado a la recepción de materiales y aprobaciones en fecha.',
  'Servicio de gestión estratégica, diseño y arquitectura digital; no constituye garantía de cantidad de consultas, captaciones o ventas.',
];
