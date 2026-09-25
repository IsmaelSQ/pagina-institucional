import type {
  NavLink,
  HeroStat,
  ProposalFeature,
  ServiceItem,
  ProcessStep,
  TechItem,
  ProjectItem,
  TestimonialItem,
  FAQItem,
  ContactData,
} from '../types/ebano'

export const NAV_LINKS: NavLink[] = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export const HERO_STATS: HeroStat[] = [
  { value: '+45', label: 'Proyectos entregados', highlight: 'A nivel regional' },
  { value: '99.8%', label: 'Rendimiento y uptime', highlight: 'Core Web Vitals' },
  { value: '< 1.2s', label: 'Velocidad de carga', highlight: 'Optimización de assets' },
  { value: '100%', label: 'Diseño a medida', highlight: 'Sin plantillas genéricas' },
]

export const PROPOSAL_FEATURES: ProposalFeature[] = [
  {
    number: '01',
    title: 'Diseño personalizado',
    description: 'Interfaces pensadas para representar la identidad y objetivos de cada proyecto, priorizando la usabilidad.',
    iconName: 'Layout',
  },
  {
    number: '02',
    title: 'Tecnología adecuada',
    description: 'Seleccionamos herramientas modernas y mantenibles de acuerdo con las necesidades reales del negocio.',
    iconName: 'Code',
  },
  {
    number: '03',
    title: 'Visión a largo plazo',
    description: 'Construimos arquitecturas preparadas para escalar, recibir actualizaciones y mejorar su posicionamiento orgánico.',
    iconName: 'TrendingUp',
  },
]

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Landing Page de Alto Impacto',
    description: 'Páginas de aterrizaje diseñadas estratégicamente para captar leads, presentar ofertas y maximizar la tasa de conversión.',
    label: 'Conversión',
    iconName: 'Zap',
    tagsText: 'Conversión · Captación · Analytics · Velocidad',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    features: ['Diseño persuasivo orientado a acción', 'Integración con CRM y Analytics', 'Velocidad ultra optimizada'],
  },
  {
    number: '02',
    title: 'Sitio Web Corporativo',
    description: 'Presencia digital integral para empresas, estudios y organizaciones que buscan consolidar autoridad y confianza institucional.',
    label: 'Institucional',
    iconName: 'Building2',
    tagsText: 'Identidad · Multi-Página · SEO Semántico · CMS',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    features: ['Estructura multi-página modular', 'Panel autoadministrable o Headless', 'SEO técnico y semántico'],
  },
  {
    number: '03',
    title: 'Tienda Online & E-commerce',
    description: 'Plataformas de comercio electrónico fluidas, seguras y optimizadas para facilitar la navegación y el proceso de checkout.',
    label: 'E-commerce',
    iconName: 'ShoppingBag',
    tagsText: 'Catálogo · Pasarelas · Checkout Seguro · Envíos',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c55c3c04?auto=format&fit=crop&q=80&w=600',
    features: ['Catálogo dinámico y pasarelas de pago', 'Gestión de inventarios y pedidos', 'Experiencia mobile-first'],
  },
  {
    number: '04',
    title: 'Automatización & Apps Web',
    description: 'Sistemas a medida para ordenar clientes, pagos, cotizaciones y reportes operativos desde un solo panel de control.',
    label: 'Software',
    iconName: 'Code2',
    tagsText: 'Formularios · WhatsApp API · CRM · Métricas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    features: ['Integración con APIs externas', 'Paneles administrativos protegidos', 'Base de datos en la nube'],
  },
  {
    number: '05',
    title: 'Mantenimiento & Evolución',
    description: 'Acompañamiento continuo con mejoras de rendimiento, auditorías de seguridad, respaldos y soporte técnico prioritario.',
    label: 'Soporte',
    iconName: 'ShieldCheck',
    tagsText: 'Monitoreo · Respaldos · Seguridad · Core Web Vitals',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600',
    features: ['Monitoreo continuo de disponibilidad', 'Actualizaciones de seguridad y librerías', 'Optimización periódica de velocidad'],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'PASO 01',
    title: 'Descubrimiento & Estrategia',
    description: 'Analizamos a fondo los objetivos del negocio, el público objetivo y los requerimientos funcionales del proyecto.',
    duration: 'Fase Inicial',
    deliverable: 'Briefing técnico y mapa de sitio',
    iconName: 'Compass',
  },
  {
    step: 'PASO 02',
    title: 'Diseño UX/UI & Prototipado',
    description: 'Definimos la arquitectura visual, componentes interactivos y la experiencia de usuario en interfaces de alta fidelidad.',
    duration: 'Fase Creativa',
    deliverable: 'Prototipo interactivo navegable',
    iconName: 'Palette',
  },
  {
    step: 'PASO 03',
    title: 'Desarrollo & Optimización',
    description: 'Convertimos el diseño en código limpio, responsive y accesible utilizando estándares modernos de desarrollo web.',
    duration: 'Fase de Ingeniería',
    deliverable: 'Código fuente y pruebas QA',
    iconName: 'Code2',
  },
  {
    step: 'PASO 04',
    title: 'Despliegue & Seguimiento',
    description: 'Publicamos la plataforma en servidores de alto rendimiento y configuramos analítica para evaluar su rendimiento.',
    duration: 'Lanzamiento',
    deliverable: 'Página en vivo y documentación',
    iconName: 'Rocket',
  },
]

export const TECH_CARDS: TechItem[] = [
  {
    code: 'REACT / TS',
    title: 'Frontend Moderno',
    description: 'Interfaces interactivas, reactivas y componentes fuertemente tipados.',
    category: 'Frontend',
  },
  {
    code: 'TAILWIND / CSS',
    title: 'Diseño Responsivo',
    description: 'Sistemas de diseño escalables, adaptables a móviles, tablets y desktops.',
    category: 'Estilos',
  },
  {
    code: 'NEXT.JS / VITE',
    title: 'Frameworks & Build',
    description: 'Renderizado optimizado, generación estática y tiempos de carga mínimos.',
    category: 'Arquitectura',
  },
  {
    code: 'NODE / APIS',
    title: 'Lógica & Backend',
    description: 'Servicios RESTful, autenticación segura y procesamiento de formularios.',
    category: 'Backend',
  },
  {
    code: 'SQL / PRISMA',
    title: 'Bases de Datos',
    description: 'Modelado relacional estructurado para gestión eficiente de información.',
    category: 'Datos',
  },
  {
    code: 'FIGMA / UX',
    title: 'Prototipado',
    description: 'Sistemas de diseño visual centrados en la usabilidad y la estética de marca.',
    category: 'Diseño',
  },
  {
    code: 'SEO / CWV',
    title: 'Posicionamiento',
    description: 'Estructuras semánticas y optimización para Core Web Vitals de Google.',
    category: 'SEO',
  },
  {
    code: 'CLOUD / VERCEL',
    title: 'Infraestructura',
    description: 'Despliegue automatizado en redes globales CDN con certificados SSL y HTTPS.',
    category: 'DevOps',
  },
]

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: '1',
    category: 'corporativo',
    badge: 'Sitio Corporativo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Proyecto web corporativo para firma consultora',
    tag: 'Finanzas & Legal',
    title: 'Vanguard Capital Partners',
    description: 'Portal institucional multi-página con catálogo de servicios financieros, blog de análisis y optimización SEO integral.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
  },
  {
    id: '2',
    category: 'landing',
    badge: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    alt: 'Landing page para aplicación SaaS tecnológica',
    tag: 'SaaS / Tecnología',
    title: 'Nexus Data Analytics',
    description: 'Página de aterrizaje orientada a conversión de registros para plataforma de inteligencia artificial aplicada a negocios.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion'],
    isSmall: true,
    liveUrl: '#',
  },
  {
    id: '3',
    category: 'ecommerce',
    badge: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    alt: 'Tienda digital para marca de diseño',
    tag: 'Moda & Diseño',
    title: 'Atelier Minimalista',
    description: 'Tienda digital de alta gama con catálogo dinámico, filtros por colección y pasarela de pago segura integrada.',
    techStack: ['Shopify', 'Liquid', 'Tailwind CSS'],
    isSmall: true,
    liveUrl: '#',
  },
  {
    id: '4',
    category: 'corporativo',
    badge: 'Portal Médico',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    alt: 'Portal médico y centro de especialidades',
    tag: 'Salud & Bienestar',
    title: 'Centro Médico San Lucas',
    description: 'Plataforma web con sistema de reserva de citas, directorio de especialistas y módulo de consultas frecuentes.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    isSmall: true,
    liveUrl: '#',
  },
]

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    author: 'Ing. Rodrigo Benavides',
    role: 'CEO & Fundador',
    company: 'Benavides Consultores',
    rating: 5,
    quote: 'La transformación que experimentó nuestra presencia digital fue inmediata. El sitio no solo proyecta la seriedad que buscábamos, sino que duplicó nuestras solicitudes de cotización en los primeros dos meses.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    author: 'Lic. Mariana Ugarte',
    role: 'Directora de Marketing',
    company: 'NovaTech Solutions',
    rating: 5,
    quote: 'Trabajar con Ébano Digital fue un proceso sumamente ordenado. Cumplieron con los plazos prometidos y el código es impecable, rápido y perfectamente adaptado a celulares.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    author: 'Carlos Echevarría',
    role: 'Gerente Comercial',
    company: 'Lumina Studio Arquitectura',
    rating: 5,
    quote: 'Entendieron con precisión la identidad visual que queríamos transmitir. La atención al detalle en la tipografía, los contrastes y las animaciones sutiles marcó una diferencia enorme.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: '¿Qué tipo de proyectos desarrollan?',
    answer: 'Desarrollamos desde landing pages enfocadas en conversión y sitios web corporativos multi-página, hasta tiendas online (e-commerce) y plataformas web a medida.',
    category: 'Servicios',
  },
  {
    question: '¿El diseño y código son 100% personalizados?',
    answer: 'Sí. No utilizamos plantillas genéricas sobrecargadas. Cada proyecto se diseña en base a la identidad de tu negocio y se programa con tecnologías modernas para asegurar velocidad y facilidad de mantenimiento.',
    category: 'Metodología',
  },
  {
    question: '¿El sitio web estará optimizado para dispositivos móviles y Google?',
    answer: 'Totalmente. Aplicamos un enfoque responsive (mobile-first) y buenas prácticas de SEO técnico semántico, compresión de imágenes y velocidad de carga para que el sitio cumpla con los estándares de Google Core Web Vitals.',
    category: 'Técnico',
  },
  {
    question: '¿Pueden trabajar sobre un sitio web que ya tengo?',
    answer: 'Sí. Evaluamos el estado técnico y tecnológico de tu página actual para determinar si conviene una optimización/rediseño modular o una reconstrucción completa con mejor arquitectura.',
    category: 'Mantenimiento',
  },
  {
    question: '¿Cómo es el proceso de entrega y soporte post-lanzamiento?',
    answer: 'Al finalizar, entregamos la documentación completa y capacitamos a tu equipo. Además, ofrecemos planes de mantenimiento preventivo, respaldos automáticos y soporte continuo.',
    category: 'Garantía',
  },
]

export const CONTACT_DATA: ContactData = {
  email: 'hola@ebanodigital.com',
  phone: '+51 999 999 999',
  location: 'Lima, Perú · Trabajo remoto para toda Latinoamérica',
  socials: [
    { label: 'LinkedIn', code: 'IN', url: 'https://linkedin.com', iconName: 'Linkedin' },
    { label: 'GitHub', code: 'GH', url: 'https://github.com', iconName: 'Github' },
    { label: 'Instagram', code: 'IG', url: 'https://instagram.com', iconName: 'Instagram' },
    { label: 'Twitter / X', code: 'TW', url: 'https://twitter.com', iconName: 'Twitter' },
  ],
}
