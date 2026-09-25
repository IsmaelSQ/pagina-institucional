# Ébano Digital — Desarrollo Web & Soluciones Digitales

Página web institucional y portafolio profesional para estudio de desarrollo web, convertida y optimizada en **React 19**, **TypeScript 5.8** y **Vite 6**.

---

## 📁 Estructura del Proyecto

```text
sitio-institucional/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navegación con detección de scroll y menú móvil
│   │   │   └── Footer.tsx          # Pie de página y enlace volver arriba
│   │   └── sections/
│   │       ├── Hero.tsx            # Portada principal con imagen de fondo y metadatos
│   │       ├── About.tsx           # Sección Nosotros (#nosotros)
│   │       ├── Proposal.tsx        # Sección Propuesta (#propuesta)
│   │       ├── Services.tsx        # Lista de Servicios (#servicios)
│   │       ├── Process.tsx         # Metodología y pasos (#proceso)
│   │       ├── Technologies.tsx    # Capacidades técnicas (#tecnologias)
│   │       ├── Projects.tsx        # Portafolio de proyectos referenciales (#proyectos)
│   │       ├── FAQ.tsx             # Preguntas frecuentes con acordeón interactivo (#faq)
│   │       ├── CTA.tsx             # Banner de llamado a la acción (#cta)
│   │       └── Contact.tsx         # Datos de contacto y formulario (#contacto)
│   ├── data/
│   │   └── ebanoData.ts            # Datos centralizados y editables (textos, proyectos, FAQs)
│   ├── hooks/
│   │   ├── useActiveSection.ts     # Resalta el enlace activo según el scroll
│   │   ├── useHeaderScroll.ts      # Fondo con blur y borde en header al hacer scroll
│   │   └── useScrollReveal.ts      # Animaciones de entrada al hacer scroll (reveal)
│   ├── styles/
│   │   └── index.css               # Estilos del tema oscuro & dorado
│   ├── types/
│   │   └── ebano.ts                # Tipos e interfaces de TypeScript
│   ├── App.tsx                     # Componente principal
│   └── main.tsx                    # Punto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Comandos

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (TypeScript + Vite)
npm run build

# Previsualizar la compilación de producción
npm run preview
```

---

## ✨ Características y Migración a React + TypeScript
- **Componentes Modulares**: Cada sección es un componente React independiente y reutilizable.
- **Tipado Estricto (TypeScript)**: Todas las estructuras de datos (servicios, proyectos, preguntas frecuentes, enlaces) están tipadas mediante interfaces en `src/types/ebano.ts`.
- **Datos Centralizados**: Puedes actualizar los textos, proyectos, teléfonos y correos desde `src/data/ebanoData.ts`.
- **Custom Hooks React**:
  - `useScrollReveal`: Reemplaza el IntersectionObserver tradicional para animar los elementos `.reveal`.
  - `useHeaderScroll`: Controla el estado del header según `window.scrollY`.
  - `useActiveSection`: Rastrea qué sección está en el viewport para marcar el enlace activo del menú.
- **Interactividad React**:
  - Acordeón FAQ con control de estado suave.
  - Menú hamburguesa móvil con bloqueo de scroll en el `body`.
  - Formulario de contacto controlado con estado React.
